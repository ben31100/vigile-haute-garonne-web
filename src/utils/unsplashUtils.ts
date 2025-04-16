
/**
 * Utilitaire pour récupérer des images libres de droit d'Unsplash
 * 
 * Ces URLs sont prédéfinies et stables pour garantir la même image à chaque affichage
 * Elles utilisent le service gratuit d'Unsplash qui ne nécessite pas d'API key
 */

// Mapping de catégories à des URLs d'images Unsplash pertinentes
interface UnsplashImageCategory {
  [key: string]: string[];
}

const unsplashImages: UnsplashImageCategory = {
  "Conseils de sécurité": [
    "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1553434146-c412074ab02c?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1470&auto=format&fit=crop"
  ],
  "Surveillance": [
    "https://images.unsplash.com/photo-1616169790292-0665a7f2bbe6?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521791055366-0d553381ad47?q=80&w=1470&auto=format&fit=crop"
  ],
  "Gardiennage": [
    "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1557597883-aac6bf4a3d10?q=80&w=1470&auto=format&fit=crop"
  ],
  "Événementiel": [
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1470&auto=format&fit=crop"
  ],
  "Incendie": [
    "https://images.unsplash.com/photo-1598141246732-27a939a34cf8?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1557583051-7498601f38f0?q=80&w=1470&auto=format&fit=crop"
  ],
  "Réglementation": [
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1470&auto=format&fit=crop"
  ],
  "Entreprise": [
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=1470&auto=format&fit=crop"
  ],
  "Chantier": [
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1470&auto=format&fit=crop"
  ],
  "Cynophile": [
    "https://images.unsplash.com/photo-1576424859340-404ba653f116?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1536809188428-e8ecf663d0be?q=80&w=1470&auto=format&fit=crop"
  ],
  "Grande surface": [
    "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=1470&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1601599561213-832382fd07ba?q=80&w=1470&auto=format&fit=crop"
  ],
  "Résidence": [
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1470&auto=format&fit=crop"
  ],
  "default": [
    "https://images.unsplash.com/photo-1473903139234-26401a7e1f1f?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?q=80&w=1470&auto=format&fit=crop"
  ]
};

/**
 * Récupère une URL d'image Unsplash en fonction des catégories de l'article
 * @param categories Catégories de l'article
 * @param id Identifiant unique de l'article (pour garantir la cohérence des images)
 * @returns URL d'une image Unsplash pertinente
 */
export const getUnsplashImage = (categories: string[], id: number): string => {
  // Si aucune catégorie n'est fournie, utiliser l'image par défaut
  if (!categories || categories.length === 0) {
    const defaultImages = unsplashImages["default"];
    return defaultImages[id % defaultImages.length];
  }

  // Essayer de trouver une image correspondant à la première catégorie
  for (const category of categories) {
    const categoryKey = Object.keys(unsplashImages).find(key => 
      category.toLowerCase().includes(key.toLowerCase())
    );
    
    if (categoryKey && unsplashImages[categoryKey].length > 0) {
      const categoryImages = unsplashImages[categoryKey];
      return categoryImages[id % categoryImages.length];
    }
  }

  // Fallback: utiliser une image par défaut si aucune catégorie correspondante n'est trouvée
  const defaultImages = unsplashImages["default"];
  return defaultImages[id % defaultImages.length];
};

/**
 * Vérifie si une URL est valide
 * @param url URL à vérifier
 * @returns Booléen indiquant si l'URL est valide
 */
export const isValidImageUrl = (url: string): boolean => {
  if (!url) return false;
  return url.startsWith('http') && (
    url.includes('unsplash.com') || 
    url.includes('pexels.com') || 
    url.includes('pixabay.com') ||
    url.includes('lovable-uploads')
  );
};

/**
 * Obtient une image de remplacement si l'URL d'origine n'est pas valide
 * @param categories Catégories de l'article
 * @param id Identifiant unique de l'article
 * @returns URL d'une image valide
 */
export const getFallbackImage = (categories: string[], id: number): string => {
  return getUnsplashImage(categories, id);
};
