/**
 * Utilitaires pour gérer les images dans l'application
 * Les clés d'API Supabase se trouvent dans src/integrations/supabase/client.ts
 * Le project_id se trouve dans supabase/config.toml
 */
import { supabase } from "@/integrations/supabase/client";
import { getResponsiveImageUrl } from "./optimizationUtils";

/**
 * Types d'images disponibles dans l'application
 */
export type ImageType = 'hero' | 'thumbnail' | 'service' | 'icon';

// Images par défaut disponibles dans l'application - URLs COMPLETES Supabase
const DEFAULT_IMAGES = {
  hero: "https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images/gardiennage-hero.jpg?format=webp&quality=80",
  thumbnail: "https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images/agent-securite-thumbnail.jpg?format=webp&quality=80",
  service: "https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images/service-default.jpg?format=webp&quality=80",
  icon: "https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images/icon-default.png?format=webp&quality=80"
};

/**
 * Optimise une URL d'image pour le format WebP et la taille
 * @param url URL de l'image à optimiser
 * @param options Options d'optimisation (qualité, largeur, etc.)
 * @returns URL optimisée
 */
export const optimizeImageUrl = (
  url: string, 
  options: { 
    width?: number; 
    quality?: number; 
    format?: 'webp' | 'jpeg' | 'png' | 'original';
  } = {}
): string => {
  const { width, quality = 80, format = 'webp' } = options;
  
  if (format === 'original' || !url.includes('supabase.co')) {
    return getResponsiveImageUrl(url);
  }
  
  const separator = url.includes('?') ? '&' : '?';
  const widthParam = width ? `width=${width}` : '';
  const qualityParam = `quality=${quality}`;
  const formatParam = `format=${format}`;
  
  let optimizedUrl = url;
  if (widthParam) {
    optimizedUrl += `${separator}${widthParam}`;
  }
  
  const nextSeparator = optimizedUrl.includes('?') ? '&' : '?';
  optimizedUrl += `${nextSeparator}${qualityParam}&${formatParam}`;
  
  return optimizedUrl;
};

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
  // Si cityName est vide ou invalide, retourner l'image par défaut
  if (!cityName || typeof cityName !== 'string') {
    console.warn("Nom de ville invalide ou non fourni");
    return DEFAULT_IMAGES[type];
  }

  const basePath = '/images/cities/';
  const normalizedCityName = cityName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
  // Cas spécial pour Toulouse
  if (normalizedCityName === 'toulouse' && type === 'hero') {
    return `${basePath}toulouse-hero.jpg`;
  }
  
  if (type === 'hero') {
    return `${basePath}${normalizedCityName}-hero.jpg`;
  }
  
  if (type === 'thumbnail') {
    return `${basePath}${normalizedCityName}-thumbnail.jpg`;
  }
  
  if (type === 'service' && variant) {
    return `${basePath}${normalizedCityName}-service-${variant}.jpg`;
  }
  
  // Image par défaut - utiliser les URLs Supabase comme fallback
  return DEFAULT_IMAGES[type] || DEFAULT_IMAGES.hero;
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
    // Si le chemin est déjà une URL Supabase, la retourner directement
    if (imagePath.includes('supabase.co')) {
      return imagePath;
    }
    
    // Si le chemin commence par '/', le supprimer
    const cleanPath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
    
    // Si l'image contient 'default', utiliser l'image par défaut
    if (cleanPath.includes('default')) {
      if (cleanPath.includes('hero')) {
        return DEFAULT_IMAGES.hero;
      } else if (cleanPath.includes('thumbnail')) {
        return DEFAULT_IMAGES.thumbnail;
      } else if (cleanPath.includes('service')) {
        return DEFAULT_IMAGES.service;
      }
      return DEFAULT_IMAGES.hero;
    }
    
    // Corrigé pour résoudre l'erreur TS: La méthode getPublicUrl ne retourne pas d'erreur, seulement data
    const { data } = await supabase.storage
      .from('images')
      .getPublicUrl(cleanPath);
    
    return data.publicUrl;
  } catch (error) {
    console.error("Erreur inattendue lors de la récupération de l'image:", error);
    // Retourner une image par défaut en cas d'erreur
    if (imagePath.includes('hero')) {
      return DEFAULT_IMAGES.hero;
    } else if (imagePath.includes('thumbnail')) {
      return DEFAULT_IMAGES.thumbnail;
    } else if (imagePath.includes('service')) {
      return DEFAULT_IMAGES.service;
    }
    return DEFAULT_IMAGES.hero; // Fallback par défaut
  }
};

/**
 * Obtient l'URL d'une image générique (non liée à une ville)
 * @param category Catégorie de l'image (ex: 'service', 'background')
 * @param name Nom spécifique de l'image
 * @returns URL complète de l'image
 */
export const getGenericImageUrl = (category: string, name: string): string => {
  // Vérifier si c'est une demande d'image qui n'existe pas localement
  if (category === 'cities' && name.includes('default')) {
    return DEFAULT_IMAGES.hero;
  }
  
  // Pour les autres images génériques, essayer d'abord en local
  try {
    return `images/${category}/${name}.jpg`;
  } catch (error) {
    // Si l'image n'existe pas localement, utiliser l'image par défaut
    return DEFAULT_IMAGES.hero;
  }
};

// Exporter les fonctions d'optimisation
export { getResponsiveImageUrl } from './optimizationUtils';
