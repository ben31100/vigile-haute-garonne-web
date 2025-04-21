
/**
 * Utilitaires pour optimiser le chargement des ressources
 */

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
 * Optimise le chargement des ressources en utilisant l'Intersection Observer
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

/**
 * Charge les ressources de manière différée
 */
export const loadDeferredResource = (
  resourceType: 'script' | 'style' | 'font',
  url: string,
  options: { id?: string; callback?: () => void; attributes?: Record<string, string> } = {}
) => {
  if (document.readyState === 'complete') {
    createResource();
  } else {
    window.addEventListener('load', createResource);
  }

  function createResource() {
    let element: HTMLElement;
    
    switch (resourceType) {
      case 'script':
        element = document.createElement('script');
        (element as HTMLScriptElement).src = url;
        (element as HTMLScriptElement).defer = true;
        break;
      case 'style':
        element = document.createElement('link');
        (element as HTMLLinkElement).rel = 'stylesheet';
        (element as HTMLLinkElement).href = url;
        break;
      case 'font':
        element = document.createElement('link');
        (element as HTMLLinkElement).rel = 'stylesheet';
        (element as HTMLLinkElement).href = url;
        break;
      default:
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
 * Optimise les dimensions des images en fonction de la taille de l'écran
 */
export const optimizeImageDimensions = (images: NodeListOf<HTMLImageElement>) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (!img.width || !img.height) {
          const setDimensions = () => {
            img.width = img.naturalWidth;
            img.height = img.naturalHeight;
          };
          if (img.complete) {
            setDimensions();
          } else {
            img.onload = setDimensions;
          }
        }
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => observer.observe(img));
};

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
 * Cache les ressources statiques avec un service worker
 */
export const setupServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then(registration => {
        console.log('SW registered:', registration);
      }).catch(error => {
        console.log('SW registration failed:', error);
      });
    });
  }
};
