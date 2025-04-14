
/**
 * Utilitaires pour gérer les images dans l'application
 * Les clés d'API Supabase se trouvent dans src/integrations/supabase/client.ts
 * Le project_id se trouve dans supabase/config.toml
 */
import { supabase } from "@/integrations/supabase/client";

/**
 * Types d'images disponibles dans l'application
 */
export type ImageType = 'hero' | 'thumbnail' | 'service' | 'icon' | 'gallery';

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
  const basePath = '/images/cities/';
  const normalizedCityName = cityName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
  
  // Pour Toulouse, nous avons une gestion spéciale pour s'assurer que l'image est correctement chargée
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
  
  if (type === 'gallery') {
    return `${basePath}${normalizedCityName}-gallery-${variant || '1'}.jpg`;
  }
  
  // Image par défaut
  return `${basePath}default-${type}.jpg`;
};

/**
 * Charge une image depuis Supabase et retourne son URL publique
 * Configuration Supabase:
 * - URL et clé d'API : src/integrations/supabase/client.ts
 * - ID du projet : supabase/config.toml
 * 
 * @param imagePath Chemin de l'image dans le bucket Supabase
 * @returns Promise avec l'URL publique de l'image
 */
export const getSupabaseImageUrl = async (imagePath: string): Promise<string> => {
  try {
    // Si le chemin commence par '/', le supprimer
    const cleanPath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
    
    // Si c'est déjà une URL complète, la retourner directement
    if (cleanPath.startsWith('http')) {
      return cleanPath;
    }
    
    const { data } = await supabase.storage
      .from('images')
      .getPublicUrl(cleanPath);
    
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
  return `/images/${category}/${name}.jpg`;
};

/**
 * Crée un chemin d'image pour Supabase basé sur la référence de la ville et d'autres paramètres
 * @param cityId Identifiant de la ville
 * @param type Type d'image
 * @param variant Variante optionnelle (numéro ou nom)
 * @returns Chemin complet pour l'image
 */
export const createCityImagePath = (
  cityId: string,
  type: ImageType = 'hero',
  variant?: string | number
): string => {
  const normalizedCityId = cityId.toLowerCase();
  
  if (variant) {
    return `cities/${normalizedCityId}/${type}-${variant}`;
  }
  
  return `cities/${normalizedCityId}/${type}`;
};

/**
 * Génère un texte alternatif descriptif pour une image de ville
 * @param cityName Nom de la ville
 * @param type Type d'image
 * @param context Contexte additionnel
 * @returns Texte alternatif pour l'accessibilité
 */
export const generateCityImageAlt = (
  cityName: string,
  type: ImageType = 'hero',
  context?: string
): string => {
  switch (type) {
    case 'hero':
      return `Service de sécurité à ${cityName}${context ? ` - ${context}` : ''}`;
    case 'thumbnail':
      return `Aperçu de ${cityName}${context ? ` - ${context}` : ''}`;
    case 'service':
      return `Service ${context || 'de sécurité'} à ${cityName}`;
    case 'gallery':
      return `Galerie photo de ${cityName}${context ? ` - ${context}` : ''}`;
    default:
      return `Image de ${cityName}${context ? ` - ${context}` : ''}`;
  }
};
