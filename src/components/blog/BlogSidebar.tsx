
import React from 'react';
import BlogSearch from './BlogSearch';
import BlogCategories from './BlogCategories';
import PopularArticles from './PopularArticles';
import ContactCta from './ContactCta';
import { BlogPost } from './BlogArticleCard';

interface BlogSidebarProps {
  categories: Array<{ name: string; count: number }>;
  popularPosts: BlogPost[];
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({ categories, popularPosts }) => {
  return (
    <div className="lg:w-1/3">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="mb-6">
          <BlogSearch />
        </div>
        
        <BlogCategories categories={categories} />
        
        <PopularArticles posts={popularPosts} />
        
        <ContactCta />
      </div>
    </div>
  );
};

export default BlogSidebar;
