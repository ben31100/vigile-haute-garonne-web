
/**
 * Utilitaires pour gérer les images dans l'application
 */

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
  const basePath = '/images/cities/';
  const normalizedCityName = cityName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
  // Pour Toulouse, nous avons une gestion spéciale directement dans le composant CityHero
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
 * Obtient l'URL d'une image générique (non liée à une ville)
 * @param category Catégorie de l'image (ex: 'service', 'background')
 * @param name Nom spécifique de l'image
 * @returns URL complète de l'image
 */
export const getGenericImageUrl = (category: string, name: string): string => {
  return `/images/${category}/${name}.jpg`;
};
