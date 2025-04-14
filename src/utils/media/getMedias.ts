
import { supabase } from "@/integrations/supabase/client";
import { MediaMetadata } from "./types";

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
}): Promise<(MediaMetadata & { url: string })[]> => {
  try {
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
  } catch (error) {
    console.error('Erreur inattendue lors de la récupération des médias:', error);
    return [];
  }
};

/**
 * Récupère une image spécifique pour une ville
 * @param cityId Identifiant de la ville
 * @param type Type d'image (hero, thumbnail, etc.)
 * @returns URL de l'image ou null si non trouvée
 */
export const getCityImage = async (
  cityId: string,
  type: 'hero' | 'thumbnail' = 'hero'
): Promise<string | null> => {
  try {
    const { data, error } = await supabase
      .from('medias')
      .select('*')
      .eq('bucket_id', 'images')
      .eq('city_reference', cityId)
      .eq('is_public', true)
      .ilike('name', `%${type}%`)
      .limit(1);

    if (error || !data || data.length === 0) {
      console.log(`Aucune image ${type} trouvée pour ${cityId}`);
      return null;
    }
    
    const { data: urlData } = supabase.storage
      .from(data[0].bucket_id)
      .getPublicUrl(data[0].storage_path);
      
    return urlData.publicUrl;
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'image de la ville:', error);
    return null;
  }
};

/**
 * Récupère les médias pour une galerie de ville
 * @param cityId Identifiant de la ville
 * @param limit Nombre maximum d'éléments à récupérer
 * @returns Liste des médias pour la galerie
 */
export const getCityGalleryMedias = async (
  cityId: string,
  limit = 6
): Promise<(MediaMetadata & { url: string })[]> => {
  return getMedias({
    bucket: 'images',
    cityReference: cityId,
    limit
  });
};
