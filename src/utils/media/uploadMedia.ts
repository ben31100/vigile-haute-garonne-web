
import { supabase } from "@/integrations/supabase/client";
import { MediaMetadata, UploadOptions } from "./types";

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
