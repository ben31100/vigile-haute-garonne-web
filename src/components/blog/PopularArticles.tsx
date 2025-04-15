
import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon } from 'lucide-react';
import { BlogPost } from './BlogArticleCard';

interface PopularArticlesProps {
  posts: BlogPost[];
}

const PopularArticles: React.FC<PopularArticlesProps> = ({ posts }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-levigile-dark mb-4">Articles populaires</h3>
      <ul className="space-y-4">
        {posts.slice(0, 3).map((post) => (
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
  );
};

export default PopularArticles;
