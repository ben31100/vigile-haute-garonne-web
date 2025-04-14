
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
