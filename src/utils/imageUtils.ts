
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
  
  // Si l'image n'existe pas ou si le type n'est pas reconnu
  // on peut retourner une image par défaut ou fallback sur les uploads de Lovable
  const uploadedImage = getUploadedImage(cityName);
  if (uploadedImage) {
    return uploadedImage;
  }
  
  // Image par défaut
  return `${basePath}default-${type}.jpg`;
};

/**
 * Fonction pour récupérer les images déjà téléchargées via Lovable
 * Permet de faire la transition vers la nouvelle structure
 */
const getUploadedImage = (cityName: string): string | null => {
  // Mapping des villes vers les images déjà téléchargées
  const uploadedImages: Record<string, string> = {
    // Nous n'utilisons plus les images uploadées via Lovable pour Toulouse
    // car nous avons maintenant l'image dans le dossier images/cities
    // 'toulouse': '/lovable-uploads/9bedebd2-00c5-4ecf-af03-f4313a2ee507.png',
    // Ajoutez d'autres mappings au besoin
  };
  
  return uploadedImages[cityName.toLowerCase()] || null;
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
