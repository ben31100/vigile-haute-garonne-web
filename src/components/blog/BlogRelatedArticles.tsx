
import React from 'react';
import { BlogArticlePreview } from '@/types/blog';
import BlogCard from './BlogCard';

interface BlogRelatedArticlesProps {
  articles: BlogArticlePreview[];
}

const BlogRelatedArticles: React.FC<BlogRelatedArticlesProps> = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-levigile-blue mb-6">Articles connexes</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(article => (
          <BlogCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default BlogRelatedArticles;
