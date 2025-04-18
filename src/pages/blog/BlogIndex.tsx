
import React, { useState } from 'react';
import { blogArticles } from '@/data/blogData';
import { BlogArticlePreview } from '@/types/blog';
import BlogLayout from '@/components/blog/BlogLayout';
import BlogHero from '@/components/blog/BlogHero';
import BlogCard from '@/components/blog/BlogCard';
import { Button } from '@/components/ui/button';

const ARTICLES_PER_PAGE = 6;

const BlogIndex: React.FC = () => {
  const [displayCount, setDisplayCount] = useState(ARTICLES_PER_PAGE);
  const hasMoreArticles = displayCount < blogArticles.length;
  
  const articlesToDisplay: BlogArticlePreview[] = blogArticles
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, displayCount)
    .map(({ content, relatedArticles, ...rest }) => rest);
  
  const loadMoreArticles = () => {
    setDisplayCount(prev => Math.min(prev + ARTICLES_PER_PAGE, blogArticles.length));
  };
  
  return (
    <BlogLayout title="Blog - Actualités et conseils sécurité">
      <BlogHero 
        title="Blog LeVigile" 
        subtitle="Actualités, conseils et expertise en matière de sécurité privée"
        background="bg-white"
        backgroundImage="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//blog%20du%20vigile.png"
        className="h-[600px]"
      />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesToDisplay.map(article => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
        
        {hasMoreArticles && (
          <div className="mt-12 text-center">
            <Button onClick={loadMoreArticles} className="px-6">
              Voir plus d'articles
            </Button>
          </div>
        )}
      </div>
    </BlogLayout>
  );
};

export default BlogIndex;
