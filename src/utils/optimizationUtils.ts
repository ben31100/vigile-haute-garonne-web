
/**
 * Utilitaires pour optimiser le chargement des ressources
 */

/**
 * Précharge une liste d'images pour améliorer les performances
 * @param imagePaths Liste des chemins d'images à précharger
 */
export const preloadImages = (imagePaths: string[]) => {
  imagePaths.forEach(path => {
    const img = new Image();
    img.src = path;
  });
};

/**
 * Récupère la taille d'image optimale en fonction de la largeur de l'écran
 * @param baseUrl URL de base de l'image
 * @param widths Largeurs disponibles pour l'image
 * @returns URL optimisée pour la taille d'écran actuelle
 */
export const getResponsiveImageUrl = (
  baseUrl: string,
  widths: number[] = [320, 640, 960, 1280, 1920]
): string => {
  // Trier les largeurs par ordre croissant
  const sortedWidths = [...widths].sort((a, b) => a - b);
  
  // Obtenir la largeur de l'écran
  const screenWidth = window.innerWidth || document.documentElement.clientWidth;
  
  // Trouver la largeur optimale pour l'écran actuel
  const optimalWidth = sortedWidths.find(width => width >= screenWidth) || sortedWidths[sortedWidths.length - 1];
  
  // Si l'URL contient déjà des paramètres de redimensionnement, ne pas les modifier
  if (baseUrl.includes('width=') || baseUrl.includes('height=')) {
    return baseUrl;
  }
  
  // Si c'est une URL Supabase, ajouter les paramètres de redimensionnement
  if (baseUrl.includes('supabase.co')) {
    // Vérifier si l'URL a déjà des paramètres
    const separator = baseUrl.includes('?') ? '&' : '?';
    return `${baseUrl}${separator}width=${optimalWidth}&quality=80`;
  }
  
  return baseUrl;
};

/**
 * Définit les attributs de performance pour les scripts tiers
 * @param scriptId ID du script à optimiser
 * @param attributes Attributs à ajouter (async, defer, etc.)
 */
export const optimizeThirdPartyScript = (
  scriptId: string, 
  attributes: { [key: string]: string } = { async: "true", defer: "true" }
) => {
  const script = document.getElementById(scriptId);
  if (script) {
    Object.entries(attributes).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });
  }
};
