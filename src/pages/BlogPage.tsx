
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/header/Header';
import Footer from '@/components/Footer';
import BlogHero from '@/components/blog/BlogHero';
import BlogArticleCard from '@/components/blog/BlogArticleCard';
import BlogPagination from '@/components/blog/BlogPagination';
import BlogSidebar from '@/components/blog/BlogSidebar';
import BlogSearch from '@/components/blog/BlogSearch';
import { categories, blogPosts } from '@/data/blogData';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog LeVigile - Articles et conseils en sécurité</title>
        <meta name="description" content="Retrouvez nos articles experts sur la sécurité privée, les conseils de prévention et les tendances du secteur." />
      </Helmet>
      <Header />
      
      <main className="pt-24 pb-16 bg-gray-50">
        <BlogHero />

        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Articles principale */}
            <div className="lg:w-2/3">
              {/* Barre de recherche pour mobile */}
              <div className="mb-8 lg:hidden">
                <BlogSearch />
              </div>
              
              {/* Articles */}
              {blogPosts.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  {blogPosts.map((post) => (
                    <BlogArticleCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <Alert className="mb-10">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Aucun article n'est disponible pour le moment. Revenez bientôt pour découvrir nos nouveaux contenus.
                  </AlertDescription>
                </Alert>
              )}
              
              {/* Pagination - Afficher seulement s'il y a des articles */}
              {blogPosts.length > 0 && <BlogPagination />}
            </div>
            
            {/* Sidebar */}
            <BlogSidebar 
              categories={categories} 
              popularPosts={blogPosts.slice(0, 3)} 
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default BlogPage;
