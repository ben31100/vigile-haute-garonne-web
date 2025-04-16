
import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, ClockIcon, UserIcon, ImageIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { isValidImageUrl, getFallbackImage } from '@/utils/unsplashUtils';

export interface BlogPost {
  id: number;
  title: string;
  subtitle?: string;
  author: string;
  date: string;
  readTime: string;
  categories: string[];
  featuredImage: string;
  slug: string;
  excerpt: string;
}

interface BlogArticleCardProps {
  post: BlogPost;
}

const BlogArticleCard: React.FC<BlogArticleCardProps> = ({ post }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  // Gestion des erreurs d'image
  const [imageError, setImageError] = React.useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  // Vérifier et préparer l'URL de l'image
  const imageUrl = React.useMemo(() => {
    if (imageError || !isValidImageUrl(post.featuredImage)) {
      return getFallbackImage(post.categories, post.id);
    }
    return post.featuredImage;
  }, [post.featuredImage, post.categories, post.id, imageError]);

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden relative">
        {!imageError ? (
          <img 
            src={imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <ImageIcon className="w-12 h-12 text-gray-400" />
          </div>
        )}
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
  );
};

export default BlogArticleCard;
