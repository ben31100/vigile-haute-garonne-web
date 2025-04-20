
/**
 * Utilitaires pour optimiser le chargement des ressources
 */

/**
 * Précharge une liste d'images pour améliorer les performances
 * @param imagePaths Liste des chemins d'images à précharger
 * @param highPriority Si true, utilise fetchpriority="high" pour les ressources critiques
 */
export const preloadImages = (imagePaths: string[], highPriority: boolean = false) => {
  imagePaths.forEach(path => {
    // Créer un lien de préchargement dans le head
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = path;
    if (highPriority) {
      link.setAttribute('fetchpriority', 'high');
    }
    document.head.appendChild(link);
    
    // Précharger aussi dans le cache du navigateur
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
  // Si l'URL est vide ou non définie, retourner une URL d'image par défaut
  if (!baseUrl) {
    return '/placeholder.svg';
  }
  
  // Trier les largeurs par ordre croissant
  const sortedWidths = [...widths].sort((a, b) => a - b);
  
  // Obtenir la largeur de l'écran
  const screenWidth = typeof window !== 'undefined' 
    ? window.innerWidth || document.documentElement.clientWidth 
    : 1280; // Valeur par défaut pour le SSR
  
  // Obtenir la densité de pixels (pour les écrans Retina)
  const pixelRatio = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
  
  // Calculer la largeur optimale en tenant compte de la densité de pixels
  const idealWidth = screenWidth * pixelRatio;
  
  // Trouver la largeur optimale pour l'écran actuel
  const optimalWidth = sortedWidths.find(width => width >= idealWidth) || sortedWidths[sortedWidths.length - 1];
  
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

/**
 * Charge des ressources de manière différée pour améliorer les performances
 * @param resourceType Type de ressource ('script', 'style', 'font')
 * @param url URL de la ressource à charger
 * @param options Options supplémentaires
 */
export const loadDeferredResource = (
  resourceType: 'script' | 'style' | 'font',
  url: string,
  options: { id?: string; callback?: () => void; attributes?: Record<string, string> } = {}
) => {
  // Attendre que le contenu principal soit chargé
  if (document.readyState === 'complete') {
    createResource();
  } else {
    window.addEventListener('load', createResource);
  }

  function createResource() {
    let element: HTMLElement;

    if (resourceType === 'script') {
      element = document.createElement('script');
      (element as HTMLScriptElement).src = url;
      (element as HTMLScriptElement).defer = true;
    } else if (resourceType === 'style') {
      element = document.createElement('link');
      (element as HTMLLinkElement).rel = 'stylesheet';
      (element as HTMLLinkElement).href = url;
    } else if (resourceType === 'font') {
      element = document.createElement('link');
      (element as HTMLLinkElement).rel = 'preload';
      (element as HTMLLinkElement).as = 'font';
      (element as HTMLLinkElement).href = url;
      (element as HTMLLinkElement).setAttribute('crossorigin', 'anonymous');
    } else {
      return;
    }

    if (options.id) {
      element.id = options.id;
    }

    if (options.attributes) {
      Object.entries(options.attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
    }

    if (options.callback) {
      element.onload = options.callback;
    }

    document.head.appendChild(element);
  }
};

/**
 * Utilise l'API Intersection Observer pour charger les images à la demande
 * @param elements NodeList ou Array d'éléments à observer
 * @param callback Fonction à exécuter quand l'élément est visible
 */
export const setupLazyLoading = (
  elements: NodeListOf<Element> | Element[],
  callback: (element: Element) => void
) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '100px' });

  elements.forEach(element => {
    observer.observe(element);
  });

  return observer;
};
