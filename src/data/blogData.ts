
import { getUnsplashImage, isValidImageUrl } from '@/utils/unsplashUtils';

export const categories = [
  { name: 'Conseils de sécurité', count: 3 },
  { name: 'Surveillance', count: 2 },
  { name: 'Gardiennage', count: 2 },
  { name: 'Événementiel', count: 1 },
  { name: 'Incendie', count: 1 },
  { name: 'Réglementation', count: 1 }
];

// Fonction pour assigner une image cohérente à chaque article
const assignConsistentImage = (post: any): string => {
  // Si l'image est déjà une URL Unsplash valide, la conserver
  if (isValidImageUrl(post.featuredImage)) {
    return post.featuredImage;
  }
  
  // Sinon, générer une nouvelle URL d'image basée sur les catégories et l'ID
  return getUnsplashImage(post.categories, post.id);
};

// Articles de blog avec leurs données
export const blogPostsBase = [];

// Appliquer des images cohérentes à tous les articles
export const blogPosts = blogPostsBase.map(post => ({
  ...post,
  featuredImage: assignConsistentImage(post)
}));
