
import React from 'react';
import { Link } from 'react-router-dom';
import { formatBlogDate } from '@/data/blogData';
import { BlogArticlePreview } from '@/types/blog';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface BlogCardProps {
  article: BlogArticlePreview;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ article, className = '' }) => {
  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-md ${className}`}>
      <Link to={`/blog/${article.slug}`} className="block">
        <AspectRatio ratio={16/9} className="bg-gray-100">
          <img 
            src={article.coverImage} 
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </AspectRatio>
      </Link>
      
      <CardHeader className="pb-2">
        <div className="flex gap-2 mb-2">
          {article.tags?.map((tag) => (
            <Badge key={tag.id} variant="outline" className="text-xs">
              {tag.name}
            </Badge>
          ))}
        </div>
        <Link to={`/blog/${article.slug}`} className="block">
          <h3 className="text-xl font-bold text-levigile-blue hover:text-levigile-gray transition-colors">
            {article.title}
          </h3>
        </Link>
      </CardHeader>
      
      <CardContent className="pb-2">
        <p className="text-sm text-gray-600 mb-2 line-clamp-3">
          {article.excerpt}
        </p>
      </CardContent>
      
      <CardFooter className="flex justify-between items-center pt-0 text-xs text-gray-500">
        <div className="flex items-center">
          <span className="mr-1">Par {article.author.name}</span>
        </div>
        <div className="flex items-center">
          <span>{formatBlogDate(article.publishedAt)}</span>
          <span className="mx-2">•</span>
          <span>{article.readingTime} min de lecture</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
