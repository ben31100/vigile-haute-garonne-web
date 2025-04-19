
import React from 'react';
import { Link } from 'react-router-dom';
import { blogArticles } from '@/data/blogData';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Search } from 'lucide-react';

const BlogSidebar: React.FC = () => {
  // Get the most recent 5 articles
  const recentArticles = [...blogArticles]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 5);
  
  return (
    <div className="space-y-6">
      {/* Search Box */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full py-2 pl-4 pr-10 border-b-2 border-levigile-blue focus:outline-none"
            />
            <Search className="absolute right-3 top-2 text-gray-500" size={20} />
          </div>
        </CardContent>
      </Card>
      
      {/* Recent Articles */}
      <Card>
        <CardHeader className="pb-2">
          <h3 className="text-lg font-bold text-levigile-blue">Articles récents</h3>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {recentArticles.map(article => (
              <li key={article.id}>
                <Link 
                  to={`/blog/${article.slug}`}
                  className="block text-sm hover:text-levigile-blue transition-colors"
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      
      {/* Recent Comments */}
      <Card>
        <CardHeader className="pb-2">
          <h3 className="text-lg font-bold text-levigile-blue">Commentaires récents</h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 italic">Aucun commentaire récent</p>
        </CardContent>
      </Card>
      
      {/* Categories */}
      <Card>
        <CardHeader className="pb-2">
          <h3 className="text-lg font-bold text-levigile-blue">Catégories</h3>
        </CardHeader>
        <CardContent>
          <ul className="space-y-1">
            <li>
              <Link to="/blog" className="text-sm hover:text-levigile-blue transition-colors font-medium">
                Actualités
              </Link>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogSidebar;
