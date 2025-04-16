
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
export const blogPostsBase = [
  {
    id: 1,
    title: "5 conseils pour protéger votre commerce à Toulouse",
    subtitle: "Conseils concrets pour renforcer la sécurité de votre établissement",
    author: "Samir Benhalima",
    date: "2025-04-10",
    readTime: "8",
    categories: ["Conseils de sécurité", "Surveillance"],
    featuredImage: "",
    slug: 'proteger-commerce-toulouse',
    excerpt: "Vous êtes commerçant à Toulouse ? La sécurité de votre boutique est essentielle face aux risques de vols ou d'intrusions. Découvrez nos conseils pour renforcer votre protection."
  },
  {
    id: 2,
    title: "Sécurité événementielle : comment choisir la bonne société ?",
    subtitle: "Guide pratique pour organisateurs d'événements",
    author: "Samir Benhalima",
    date: "2025-03-28",
    readTime: "6",
    categories: ["Événementiel", "Conseils de sécurité"],
    featuredImage: "",
    slug: 'securite-evenementielle-choisir',
    excerpt: "Organiser un événement, c'est aussi penser à la sécurité des participants. Comment s'assurer de choisir la bonne société de sécurité pour votre manifestation ?"
  },
  {
    id: 3,
    title: "Différences entre gardiennage et surveillance mobile",
    subtitle: "Comprendre ces deux prestations souvent confondues",
    author: "Samir Benhalima",
    date: "2025-03-15",
    readTime: "7",
    categories: ["Gardiennage", "Surveillance"],
    featuredImage: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1470&auto=format&fit=crop",
    slug: 'difference-gardiennage-surveillance-mobile',
    excerpt: "Gardiennage ou surveillance mobile ? Ces deux prestations sont souvent confondues. Voici leurs différences, pour mieux choisir votre solution de sécurité."
  },
  {
    id: 4,
    title: "Pourquoi opter pour un agent de sécurité la nuit à Colomiers",
    subtitle: "Solutions adaptées aux entreprises colomiéroises",
    author: "Samir Benhalima",
    date: "2025-02-25",
    readTime: "5",
    categories: ["Gardiennage", "Conseils de sécurité"],
    featuredImage: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1470&auto=format&fit=crop",
    slug: 'agent-securite-nuit-colomiers',
    excerpt: "Colomiers connaît une forte activité nocturne, mais aussi des risques accrus pour les entreprises. Découvrez pourquoi un agent de sécurité la nuit est une solution à envisager."
  },
  {
    id: 5,
    title: "Règlementation 2025 : ce que dit la loi sur la sécurité privée",
    subtitle: "Les évolutions légales que vous devez connaître",
    author: "Samir Benhalima",
    date: "2025-02-10",
    readTime: "9",
    categories: ["Réglementation"],
    featuredImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1470&auto=format&fit=crop",
    slug: 'reglementation-2025-securite-privee',
    excerpt: "Le secteur de la sécurité privée est encadré par la loi, et 2025 apporte son lot de nouveautés. Voici ce qu'il faut savoir pour rester conforme."
  },
  {
    id: 6,
    title: "Les meilleures pratiques de sécurité pour les entreprises en 2025",
    subtitle: "Guide complet pour optimiser votre dispositif de sécurité",
    author: "Samir Benhalima",
    date: "2025-01-15",
    readTime: "8",
    categories: ["Conseils de sécurité"],
    featuredImage: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=1470&auto=format&fit=crop",
    slug: 'pratiques-securite-2025',
    excerpt: "Découvrez comment moderniser votre stratégie de sécurité et protéger efficacement votre entreprise face aux nouvelles menaces."
  },
  {
    id: 7,
    title: "Sécurité incendie : les obligations légales pour les entreprises en Haute-Garonne",
    subtitle: "Guide complet des exigences et solutions pour être en conformité",
    author: "Samir Benhalima",
    date: "2025-04-05",
    readTime: "7",
    categories: ["Incendie", "Réglementation"],
    featuredImage: "",
    slug: 'securite-incendie-obligations-legales',
    excerpt: "En Haute-Garonne, toutes les entreprises ont des obligations strictes en matière de sécurité incendie. Découvrez quelles sont ces obligations et comment les respecter."
  },
  {
    id: 8,
    title: "Agent cynophile : dans quels cas faire appel à un maître-chien ?",
    subtitle: "Les avantages d'une équipe cynophile pour votre sécurité",
    author: "Samir Benhalima",
    date: "2025-03-20",
    readTime: "6",
    categories: ["Surveillance", "Conseils de sécurité"],
    featuredImage: "",
    slug: 'agent-cynophile-maitre-chien',
    excerpt: "L'agent cynophile est un professionnel redoutablement efficace dans certaines situations de sécurité. Découvrez quand il est vraiment indispensable."
  },
  {
    id: 9,
    title: "Sécuriser un chantier : 4 erreurs à éviter absolument",
    subtitle: "Protégez efficacement vos sites en construction",
    author: "Samir Benhalima",
    date: "2025-03-08",
    readTime: "5",
    categories: ["Surveillance", "Conseils de sécurité"],
    featuredImage: "",
    slug: 'securiser-chantier-erreurs-eviter',
    excerpt: "Les chantiers sont des cibles fréquentes de vols et de dégradations. Découvrez les erreurs courantes à ne pas commettre pour protéger votre site."
  },
  {
    id: 10,
    title: "Surveillance de résidences : une solution contre les cambriolages en périphérie toulousaine",
    subtitle: "Comment protéger efficacement votre quartier résidentiel",
    author: "Samir Benhalima",
    date: "2025-02-20",
    readTime: "6",
    categories: ["Surveillance", "Gardiennage"],
    featuredImage: "",
    slug: 'surveillance-residences-cambriolages',
    excerpt: "Face aux cambriolages et incivilités dans les communes périphériques de Toulouse, la surveillance privée devient une solution privilégiée par de nombreux résidents."
  },
  {
    id: 11,
    title: "Sécurité en grande surface : quels dispositifs pour protéger clients et employés ?",
    subtitle: "Stratégies efficaces pour la sécurité en retail",
    author: "Samir Benhalima",
    date: "2025-02-05",
    readTime: "7",
    categories: ["Surveillance", "Conseils de sécurité"],
    featuredImage: "",
    slug: 'securite-grande-surface-dispositifs',
    excerpt: "Vols à l'étalage, incivilités, gestion de flux : une grande surface nécessite un dispositif de sécurité professionnel et bien pensé. Découvrez comment protéger clients et employés."
  }
];

// Appliquer des images cohérentes à tous les articles
export const blogPosts = blogPostsBase.map(post => ({
  ...post,
  featuredImage: assignConsistentImage(post)
}));
