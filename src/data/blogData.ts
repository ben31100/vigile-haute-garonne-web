
import { getUnsplashImage, isValidImageUrl } from '@/utils/unsplashUtils';
import { supabase } from '@/integrations/supabase/client';

export const categories = [
  { name: 'Conseils de sécurité', count: 3 },
  { name: 'Surveillance', count: 2 },
  { name: 'Gardiennage', count: 2 },
  { name: 'Événementiel', count: 1 },
  { name: 'Incendie', count: 1 },
  { name: 'Réglementation', count: 1 }
];

const FIXED_IMAGE_URL = "https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//securite%20commerce%20levigie.webp";

const assignConsistentImage = (post: any): string => {
  return FIXED_IMAGE_URL;
};

// Fonction utilitaire pour récupérer une image depuis Supabase
export const getSupabaseImage = async (path: string) => {
  try {
    const { data } = await supabase.storage.from('images').getPublicUrl(path);
    return data.publicUrl;
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'image:', error);
    return FIXED_IMAGE_URL; // Retourner l'image par défaut en cas d'erreur
  }
};

export const blogPostsBase = [
  {
    id: 1,
    title: "5 conseils pour protéger votre commerce à Toulouse",
    subtitle: "Solutions de sécurité adaptées aux commerces toulousains",
    author: "A. Benhalima",
    date: "2025-02-15",
    readTime: "6",
    categories: ["Conseils de sécurité"],
    featuredImage: FIXED_IMAGE_URL,
    slug: "proteger-commerce-toulouse",
    excerpt: "Vous êtes commerçant à Toulouse ? Découvrez 5 conseils concrets pour renforcer la protection de votre commerce face aux risques de vols ou d'intrusions."
  }
];

export const blogPosts = blogPostsBase.map(post => ({
  ...post,
  featuredImage: assignConsistentImage(post)
}));
