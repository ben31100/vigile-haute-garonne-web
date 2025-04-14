
import { supabase } from "@/integrations/supabase/client";

/**
 * Types d'objets média supportés
 */
export type MediaType = 'image' | 'video';

/**
 * Interface pour les métadonnées des médias
 */
export interface MediaMetadata {
  id?: string;
  name: string;
  description?: string;
  bucket_id: string;
  storage_path: string;
  content_type: string;
  size: number;
  city_reference?: string;
  service_reference?: string;
  is_public: boolean;
}

/**
 * Options pour le téléchargement de fichiers
 */
export interface UploadOptions {
  bucket: 'images' | 'videos';
  folder?: string;
  isPublic?: boolean;
  cityReference?: string;
  serviceReference?: string;
  description?: string;
}

/**
 * Télécharge un fichier vers Supabase Storage
 * @param file Le fichier à télécharger
 * @param options Options de téléchargement
 * @returns URL publique du fichier et métadonnées
 */
export const uploadMedia = async (
  file: File, 
  options: UploadOptions
): Promise<{ url: string, metadata: MediaMetadata } | null> => {
  try {
    // Déterminer le dossier (public ou privé)
    const folder = options.isPublic !== false ? 'public' : 'private';
    const fullFolder = options.folder 
      ? `${folder}/${options.folder}` 
      : folder;
    
    // Créer un nom de fichier unique
    const fileExtension = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}.${fileExtension}`;
    const filePath = `${fullFolder}/${fileName}`;
    
    // Télécharger le fichier vers le bucket
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from(options.bucket)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
        contentType: file.type
      });
    
    if (uploadError) {
      console.error('Erreur lors du téléchargement:', uploadError);
      return null;
    }
    
    // Créer l'enregistrement dans la table des médias
    const mediaMetadata: MediaMetadata = {
      name: file.name,
      description: options.description || '',
      bucket_id: options.bucket,
      storage_path: uploadData.path,
      content_type: file.type,
      size: file.size,
      city_reference: options.cityReference,
      service_reference: options.serviceReference,
      is_public: options.isPublic !== false
    };
    
    const { data: mediaData, error: mediaError } = await supabase
      .from('medias')
      .insert(mediaMetadata)
      .select()
      .single();
    
    if (mediaError) {
      console.error('Erreur lors de l\'enregistrement des métadonnées:', mediaError);
      // Supprimer le fichier téléchargé en cas d'erreur
      await supabase.storage.from(options.bucket).remove([filePath]);
      return null;
    }
    
    // Récupérer l'URL publique du fichier
    const { data: publicUrlData } = supabase.storage
      .from(options.bucket)
      .getPublicUrl(filePath);
    
    return {
      url: publicUrlData.publicUrl,
      metadata: mediaData
    };
  } catch (error) {
    console.error('Erreur lors du processus de téléchargement:', error);
    return null;
  }
};

/**
 * Récupère les médias selon les critères spécifiés
 * @param options Options de filtrage
 * @returns Liste des médias correspondant aux critères
 */
export const getMedias = async ({
  bucket,
  cityReference,
  serviceReference,
  limit = 10,
  offset = 0
}: {
  bucket?: 'images' | 'videos';
  cityReference?: string;
  serviceReference?: string;
  limit?: number;
  offset?: number;
}) => {
  let query = supabase.from('medias').select('*');
  
  if (bucket) {
    query = query.eq('bucket_id', bucket);
  }
  
  if (cityReference) {
    query = query.eq('city_reference', cityReference);
  }
  
  if (serviceReference) {
    query = query.eq('service_reference', serviceReference);
  }
  
  // Toujours filtrer pour ne récupérer que les médias publics
  query = query.eq('is_public', true);
  
  const { data, error } = await query
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);
  
  if (error) {
    console.error('Erreur lors de la récupération des médias:', error);
    return [];
  }
  
  // Ajouter les URLs publiques
  return data.map(media => {
    const { data: urlData } = supabase.storage
      .from(media.bucket_id)
      .getPublicUrl(media.storage_path);
    
    return {
      ...media,
      url: urlData.publicUrl
    };
  });
};

/**
 * Supprime un média et son fichier associé
 * @param mediaId ID du média à supprimer
 * @returns true si la suppression a réussi, false sinon
 */
export const deleteMedia = async (mediaId: string): Promise<boolean> => {
  try {
    // Récupérer d'abord les métadonnées du média
    const { data: media, error: fetchError } = await supabase
      .from('medias')
      .select('*')
      .eq('id', mediaId)
      .single();
    
    if (fetchError || !media) {
      console.error('Erreur lors de la récupération du média:', fetchError);
      return false;
    }
    
    // Supprimer le fichier du bucket
    const { error: storageError } = await supabase.storage
      .from(media.bucket_id)
      .remove([media.storage_path]);
    
    if (storageError) {
      console.error('Erreur lors de la suppression du fichier:', storageError);
      return false;
    }
    
    // Supprimer l'enregistrement des métadonnées
    const { error: deleteError } = await supabase
      .from('medias')
      .delete()
      .eq('id', mediaId);
    
    if (deleteError) {
      console.error('Erreur lors de la suppression des métadonnées:', deleteError);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Erreur lors du processus de suppression:', error);
    return false;
  }
};
