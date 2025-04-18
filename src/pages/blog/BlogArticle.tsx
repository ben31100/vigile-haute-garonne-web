
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getArticleBySlug, getRelatedArticles, formatBlogDate } from '@/data/blogData';
import BlogLayout from '@/components/blog/BlogLayout';
import BlogContent from '@/components/blog/BlogContent';
import BlogRelatedArticles from '@/components/blog/BlogRelatedArticles';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const BlogArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Récupération de l'article depuis les données
  const article = slug ? getArticleBySlug(slug) : undefined;
  
  // Redirection vers la page 404 si l'article n'existe pas
  useEffect(() => {
    if (!article && slug) {
      navigate('/404', { replace: true });
    }
  }, [article, navigate, slug]);
  
  // Si article est undefined (pendant le chargement ou si non trouvé)
  if (!article) {
    return null;
  }
  
  // Récupération des articles liés
  const relatedArticles = getRelatedArticles(article.id);
  
  // Fonction pour retourner à la page de blog
  const handleGoBack = () => {
    navigate('/blog');
  };
  
  return (
    <BlogLayout 
      title={article.title}
      description={article.excerpt}
      keywords={article.tags?.map(tag => tag.name).join(', ')}
      ogImage={article.coverImage}
    >
      <article>
        {/* Bouton Retour */}
        <div className="container mx-auto px-4 mb-6">
          <Button 
            variant="outline" 
            onClick={handleGoBack} 
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Retour au blog
          </Button>
        </div>

        {/* Image de couverture */}
        <div className="relative">
          <div className="w-full h-64 md:h-96 overflow-hidden">
            <AspectRatio ratio={16/9} className="bg-gray-100">
              <img 
                src={article.coverImage}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
          
          {/* Overlay pour assurer la lisibilité du texte */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
          {/* Tags et date, positionnés sur l'image */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="container mx-auto">
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-wrap gap-2 mb-3">
                  {article.tags?.map(tag => (
                    <Badge key={tag.id} variant="secondary" className="text-xs bg-white/80 text-levigile-blue">
                      {tag.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contenu principal de l'article */}
        <div className="container mx-auto px-4 -mt-6 relative z-10">
          <div className="max-w-3xl mx-auto bg-white rounded-t-lg shadow-lg p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-levigile-blue mb-4">
              {article.title}
            </h1>
            
            {article.subtitle && (
              <h2 className="text-xl text-levigile-gray mb-6">
                {article.subtitle}
              </h2>
            )}
            
            {/* Métadonnées de l'article */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-8">
              <div className="flex items-center">
                {article.author.avatar && (
                  <img 
                    src={article.author.avatar} 
                    alt={article.author.name}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                )}
                <div>
                  <p className="font-medium">{article.author.name}</p>
                  {article.author.role && (
                    <p className="text-sm text-gray-500">{article.author.role}</p>
                  )}
                </div>
              </div>
              
              <div className="text-sm text-gray-500">
                <span>{formatBlogDate(article.publishedAt)}</span>
                <span className="mx-2">•</span>
                <span>{article.readingTime} min de lecture</span>
              </div>
            </div>
            
            {/* Contenu de l'article */}
            <BlogContent content={article.content} className="mb-8" />
            
            {/* Articles connexes */}
            {relatedArticles.length > 0 && (
              <BlogRelatedArticles articles={relatedArticles} />
            )}
          </div>
        </div>
      </article>
    </BlogLayout>
  );
};

export default BlogArticle;
