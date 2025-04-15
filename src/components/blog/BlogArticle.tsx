
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Share2, Calendar, User, Clock, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export interface BlogArticleProps {
  title: string;
  subtitle?: string;
  author: string;
  date: string;
  readTime?: string;
  featuredImage: string;
  content: React.ReactNode;
  tags?: string[];
  relatedArticles?: Array<{
    id: string;
    title: string;
    image: string;
    slug: string;
  }>;
  relatedServices?: Array<{
    id: string;
    title: string;
    description: string;
    slug: string;
  }>;
}

const BlogArticle: React.FC<BlogArticleProps> = ({
  title,
  subtitle,
  author,
  date,
  readTime,
  featuredImage,
  content,
  tags = [],
  relatedArticles = [],
  relatedServices = []
}) => {
  const formattedDate = new Date(date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-white min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Navigation retour */}
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/blog" className="flex items-center text-levigile-blue hover:text-levigile-dark">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux articles
            </Link>
          </Button>
        </div>

        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Image mise en avant */}
          <section className="mb-8">
            <AspectRatio ratio={16 / 9} className="bg-gray-100">
              <img 
                src={featuredImage} 
                alt={title} 
                className="w-full h-full object-cover" 
              />
            </AspectRatio>
          </section>

          {/* Header de l'article */}
          <header className="px-6 md:px-10 pt-6 pb-8 border-b border-gray-100">
            <h1 className="text-3xl md:text-4xl font-bold text-levigile-dark mb-4 leading-tight">
              {title}
            </h1>
            
            {subtitle && (
              <p className="text-lg text-gray-600 mb-6">{subtitle}</p>
            )}
            
            <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>{author}</span>
              </div>
              
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <time dateTime={date}>{formattedDate}</time>
              </div>
              
              {readTime && (
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{readTime} min de lecture</span>
                </div>
              )}
              
              <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                {tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </header>

          {/* Contenu principal */}
          <main className="px-6 md:px-10 py-8 article-content">
            {content}
          </main>

          {/* Partage et actions */}
          <div className="px-6 md:px-10 py-6 border-t border-gray-100 flex justify-between items-center">
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Partager
            </Button>
            
            <Button variant="default" size="sm" asChild>
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </article>

        {/* Sidebar avec articles et services connexes */}
        <aside className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Articles connexes */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold text-levigile-dark mb-6">Articles similaires</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedArticles.map((article) => (
                <Card 
                  key={article.id} 
                  className="overflow-hidden hover:shadow-md transition-shadow"
                >
                  <Link to={`/blog/${article.slug}`}>
                    <AspectRatio ratio={16 / 9}>
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-levigile-dark hover:text-levigile-blue transition-colors">
                        {article.title}
                      </h3>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>

          {/* Services connexes */}
          <div>
            <h2 className="text-xl font-bold text-levigile-dark mb-6">Nos services</h2>
            <Card className="bg-levigile-lightgray p-6">
              <ul className="space-y-4">
                {relatedServices.map((service) => (
                  <li key={service.id}>
                    <Link 
                      to={`/services/${service.slug}`}
                      className="block hover:bg-white p-3 rounded-md transition-colors"
                    >
                      <h3 className="font-semibold text-levigile-blue">{service.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6">
                <Button 
                  variant="outline" 
                  className="w-full border-levigile-blue text-levigile-blue hover:bg-levigile-blue hover:text-white"
                  asChild
                >
                  <Link to="/services">Tous nos services</Link>
                </Button>
              </div>
            </Card>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogArticle;
