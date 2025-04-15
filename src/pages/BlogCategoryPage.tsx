
import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/header/Header';
import Footer from '@/components/Footer';
import BlogArticleCard from '@/components/blog/BlogArticleCard';
import BlogPagination from '@/components/blog/BlogPagination';
import BlogSidebar from '@/components/blog/BlogSidebar';
import BlogSearch from '@/components/blog/BlogSearch';
import { categories as staticCategories, blogPosts } from '@/data/blogData';

const BlogCategoryPage: React.FC = () => {
  // Articles per page - augmenté à 6
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const { categorySlug } = useParams<{ categorySlug: string }>();
  
  // Convert slug back to category name for display and filtering
  const categoryName = useMemo(() => {
    if (!categorySlug) return '';
    // Convert kebab-case back to Title Case
    return categorySlug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }, [categorySlug]);
  
  // Filter posts by category
  const filteredPosts = useMemo(() => {
    if (!categoryName) return blogPosts;
    return blogPosts.filter(post => 
      post.categories.some(cat => cat.toLowerCase() === categoryName.toLowerCase())
    );
  }, [categoryName]);

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // Calculate actual category counts based on blog posts
  const categoriesWithRealCounts = staticCategories.map(category => {
    const count = blogPosts.filter(post => 
      post.categories.some(cat => cat === category.name)
    ).length;
    
    return {
      ...category,
      count
    };
  });

  return (
    <>
      <Helmet>
        <title>Catégorie {categoryName} | Blog LeVigile</title>
        <meta 
          name="description" 
          content={`Articles sur ${categoryName} - Conseils et actualités en sécurité privée de LeVigile.`} 
        />
      </Helmet>
      
      <Header />
      
      <main className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-levigile-dark mb-2">Catégorie : {categoryName}</h1>
            <p className="text-gray-600">
              Retrouvez tous nos articles sur la thématique {categoryName.toLowerCase()}.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Articles principale */}
            <div className="lg:w-2/3">
              {/* Barre de recherche pour mobile */}
              <div className="mb-8 lg:hidden">
                <BlogSearch />
              </div>
              
              {filteredPosts.length > 0 ? (
                <>
                  {/* Articles */}
                  <div className="grid md:grid-cols-2 gap-6 mb-10">
                    {currentPosts.map((post) => (
                      <BlogArticleCard key={post.id} post={post} />
                    ))}
                  </div>
                  
                  {/* Pagination */}
                  <BlogPagination 
                    currentPage={currentPage} 
                    totalPages={totalPages} 
                    onPageChange={handlePageChange} 
                  />
                </>
              ) : (
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <h2 className="text-xl font-semibold text-levigile-dark mb-3">
                    Aucun article dans cette catégorie
                  </h2>
                  <p className="text-gray-600">
                    Nous n'avons pas encore publié d'articles dans cette catégorie.
                    Revenez bientôt pour découvrir nos nouveaux contenus.
                  </p>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <BlogSidebar 
              categories={categoriesWithRealCounts} 
              popularPosts={blogPosts} 
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default BlogCategoryPage;
