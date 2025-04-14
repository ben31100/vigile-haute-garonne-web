
import { supabase } from "@/integrations/supabase/client";

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
