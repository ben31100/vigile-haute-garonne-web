
/**
 * Utilitaires pour gérer les images dans l'application
 */
import { supabase } from "@/integrations/supabase/client";

/**
 * Types d'images disponibles dans l'application
 */
export type ImageType = 'hero' | 'thumbnail' | 'service' | 'icon';

/**
 * Obtient l'URL d'une image de ville
 * @param cityName Nom de la ville (ex: 'toulouse')
 * @param type Type d'image (hero, thumbnail, etc.)
 * @param variant Variante optionnelle (ex: nom d'un service spécifique)
 * @returns URL complète de l'image
 */
export const getCityImageUrl = (
  cityName: string, 
  type: ImageType = 'hero',
  variant?: string
): string => {
  const basePath = 'images/cities/';
  const normalizedCityName = cityName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
  // Pour Toulouse, nous avons une gestion spéciale
  if (normalizedCityName === 'toulouse' && type === 'hero') {
    return `${basePath}toulouse-hero.jpg`;
  }
  
  if (type === 'hero') {
    // Les images hero ont un format standard
    return `${basePath}${normalizedCityName}-hero.jpg`;
  }
  
  if (type === 'thumbnail') {
    return `${basePath}${normalizedCityName}-thumbnail.jpg`;
  }
  
  if (type === 'service' && variant) {
    return `${basePath}${normalizedCityName}-service-${variant}.jpg`;
  }
  
  // Image par défaut
  return `${basePath}default-${type}.jpg`;
};

/**
 * Charge une image depuis Supabase et retourne son URL publique
 * @param imagePath Chemin de l'image dans le bucket Supabase
 * @returns Promise avec l'URL publique de l'image
 */
export const getSupabaseImageUrl = async (imagePath: string): Promise<string> => {
  try {
    // Si le chemin commence par '/', le supprimer
    const cleanPath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
    
    const { data, error } = await supabase.storage
      .from('images')
      .getPublicUrl(cleanPath);
    
    if (error) {
      console.error("Erreur lors de la récupération de l'image depuis Supabase:", error);
      return imagePath; // Retourner le chemin local en cas d'erreur
    }
    
    return data.publicUrl;
  } catch (error) {
    console.error("Erreur inattendue lors de la récupération de l'image:", error);
    return imagePath; // Retourner le chemin local en cas d'erreur
  }
};

/**
 * Obtient l'URL d'une image générique (non liée à une ville)
 * @param category Catégorie de l'image (ex: 'service', 'background')
 * @param name Nom spécifique de l'image
 * @returns URL complète de l'image
 */
export const getGenericImageUrl = (category: string, name: string): string => {
  return `images/${category}/${name}.jpg`;
};
