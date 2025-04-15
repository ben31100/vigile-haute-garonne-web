
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/header/Header';
import Footer from '@/components/Footer';
import { CalendarIcon, ClockIcon, UserIcon, ChevronRightIcon, SearchIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const BlogPage: React.FC = () => {
  // Liste des catégories de blog
  const categories = [
    { name: 'Conseils de sécurité', count: 12 },
    { name: 'Surveillance', count: 8 },
    { name: 'Gardiennage', count: 15 },
    { name: 'Événementiel', count: 6 },
    { name: 'Incendie', count: 4 },
    { name: 'Réglementation', count: 9 }
  ];

  // Articles de blog
  const blogPosts = [
    {
      id: 1,
      title: "Les meilleures pratiques de sécurité pour les entreprises en 2025",
      subtitle: "Guide complet pour optimiser votre dispositif de sécurité",
      author: "Thomas Dupont",
      date: "2025-03-15",
      readTime: "8",
      categories: ["Conseils de sécurité", "Entreprises"],
      featuredImage: "https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//logo%20levigile%20securite.png",
      slug: 'pratiques-securite-2025',
      excerpt: "Découvrez comment moderniser votre stratégie de sécurité et protéger efficacement votre entreprise face aux nouvelles menaces."
    },
    {
      id: 2,
      title: "Comment sécuriser un événement : le guide complet",
      subtitle: "De la planification à l'exécution",
      author: "Marie Laurent",
      date: "2025-02-28",
      readTime: "10",
      categories: ["Événementiel", "Conseils de sécurité"],
      featuredImage: "https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//logo%20levigile%20securite.png",
      slug: 'securiser-evenement-guide',
      excerpt: "Organisez des événements en toute sécurité avec nos conseils d'experts pour la gestion des foules et la prévention des risques."
    },
    {
      id: 3,
      title: "La réglementation française sur les agents de sécurité privée",
      subtitle: "Ce que vous devez savoir en 2025",
      author: "Jean Moreau",
      date: "2025-02-10",
      readTime: "6",
      categories: ["Réglementation", "Formation"],
      featuredImage: "https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//logo%20levigile%20securite.png",
      slug: 'reglementation-agents-securite',
      excerpt: "Un aperçu complet des lois et normes qui régissent le secteur de la sécurité privée en France et leurs récentes évolutions."
    },
    {
      id: 4,
      title: "Technologies de surveillance moderne : ce qui fonctionne vraiment",
      subtitle: "Analyse comparative des solutions disponibles sur le marché",
      author: "Sophie Blanc",
      date: "2025-01-25",
      readTime: "9",
      categories: ["Surveillance", "Technologie"],
      featuredImage: "https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//logo%20levigile%20securite.png",
      slug: 'technologies-surveillance-moderne',
      excerpt: "Découvrez les dernières innovations en matière de surveillance et comment elles peuvent renforcer la sécurité de vos locaux."
    },
    {
      id: 5,
      title: "Prévention incendie dans les ERP : les obligations légales",
      subtitle: "Guide pratique pour les établissements recevant du public",
      author: "Pierre Dubois",
      date: "2025-01-15",
      readTime: "7",
      categories: ["Incendie", "Réglementation"],
      featuredImage: "https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//logo%20levigile%20securite.png",
      slug: 'prevention-incendie-erp',
      excerpt: "Tout ce que vous devez savoir sur les normes de sécurité incendie pour les établissements recevant du public en France."
    },
    {
      id: 6,
      title: "Former vos employés à la sécurité : les bonnes pratiques",
      subtitle: "Créer une culture de vigilance dans votre entreprise",
      author: "Camille Rousseau",
      date: "2024-12-20",
      readTime: "5",
      categories: ["Formation", "Conseils de sécurité"],
      featuredImage: "https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//logo%20levigile%20securite.png",
      slug: 'formation-employes-securite',
      excerpt: "Apprenez comment sensibiliser et former efficacement votre personnel aux enjeux de sécurité pour une protection optimale."
    }
  ];

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  return (
    <>
      <Helmet>
        <title>Blog LeVigile - Articles et conseils en sécurité</title>
        <meta name="description" content="Retrouvez nos articles experts sur la sécurité privée, les conseils de prévention et les tendances du secteur." />
      </Helmet>
      <Header />
      
      <main className="pt-24 pb-16 bg-gray-50">
        {/* Hero section */}
        <section className="bg-levigile-dark text-white py-12 mb-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog LeVigile</h1>
              <p className="text-xl opacity-90">Expertise, conseils et actualités sur la sécurité privée</p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Articles principale */}
            <div className="lg:w-2/3">
              {/* Barre de recherche pour mobile */}
              <div className="mb-8 lg:hidden">
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input 
                    placeholder="Rechercher un article..." 
                    className="pl-10 bg-white" 
                  />
                </div>
              </div>
              
              {/* Articles */}
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.featuredImage} 
                        alt={post.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.categories.slice(0, 2).map((category, index) => (
                          <Badge key={index} variant="outline" className="bg-levigile-lightgray text-levigile-blue font-medium text-xs">
                            {category}
                          </Badge>
                        ))}
                      </div>
                      
                      <h2 className="text-xl font-bold text-levigile-dark mb-2 line-clamp-2 hover:text-levigile-blue transition-colors">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      
                      <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
                        <div className="flex items-center">
                          <UserIcon className="h-4 w-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <CalendarIcon className="h-4 w-4 mr-1" />
                            <time dateTime={post.date}>{formatDate(post.date)}</time>
                          </div>
                          <div className="flex items-center">
                            <ClockIcon className="h-4 w-4 mr-1" />
                            <span>{post.readTime} min</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center mt-10">
                <nav className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled>Précédent</Button>
                  <Button variant="default" size="sm" className="bg-levigile-blue hover:bg-levigile-dark">1</Button>
                  <Button variant="outline" size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <Button variant="outline" size="sm">Suivant</Button>
                </nav>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="relative mb-6">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input 
                    placeholder="Rechercher un article..." 
                    className="pl-10" 
                  />
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-levigile-dark mb-4">Catégories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link 
                          to={`/blog/categorie/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-levigile-dark hover:text-levigile-blue transition-colors">
                            {category.name}
                          </span>
                          <span className="text-sm text-gray-500 bg-gray-100 rounded-full px-2 py-0.5">
                            {category.count}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-levigile-dark mb-4">Articles populaires</h3>
                  <ul className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <li key={post.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                        <Link to={`/blog/${post.slug}`} className="flex gap-3 group">
                          <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                            <img 
                              src={post.featuredImage} 
                              alt={post.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-levigile-dark group-hover:text-levigile-blue transition-colors line-clamp-2">
                              {post.title}
                            </h4>
                            <div className="flex items-center text-xs text-gray-500 mt-1">
                              <CalendarIcon className="h-3 w-3 mr-1" />
                              <time dateTime={post.date}>{formatDate(post.date)}</time>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-levigile-dark mb-4">Besoin d'un service de sécurité ?</h3>
                  <div className="bg-levigile-lightgray p-4 rounded-lg">
                    <p className="text-gray-700 mb-4">Nos experts sont disponibles pour répondre à toutes vos questions sur la sécurité de votre entreprise ou de votre événement.</p>
                    <Button className="w-full bg-levigile-blue hover:bg-levigile-dark">
                      Contactez-nous
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default BlogPage;
