
import React, { useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/header/Header';
import Footer from '@/components/Footer';
import BlogArticleCard from '@/components/blog/BlogArticleCard';
import BlogPagination from '@/components/blog/BlogPagination';
import BlogSidebar from '@/components/blog/BlogSidebar';
import BlogSearch from '@/components/blog/BlogSearch';
import { categories as staticCategories, blogPosts } from '@/data/blogData';

const ITEMS_PER_PAGE = 6;

const BlogCategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page') || '1');
  
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

  // Paginate filtered posts
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredPosts.slice(startIndex, endIndex);
  }, [currentPage, filteredPosts]);

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
                    {paginatedPosts.map((post) => (
                      <BlogArticleCard key={post.id} post={post} />
                    ))}
                  </div>
                  
                  {/* Pagination */}
                  <BlogPagination totalItems={filteredPosts.length} itemsPerPage={ITEMS_PER_PAGE} />
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
