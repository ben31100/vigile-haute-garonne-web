
import { supabase } from "@/integrations/supabase/client";

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
