
import React, { useState } from 'react';
import { blogArticles } from '@/data/blogData';
import { BlogArticlePreview } from '@/types/blog';
import BlogLayout from '@/components/blog/BlogLayout';
import BlogHero from '@/components/blog/BlogHero';
import BlogCard from '@/components/blog/BlogCard';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { 
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';

const ARTICLES_PER_PAGE = 6;

const BlogIndex: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Calculate total pages
  const totalArticles = blogArticles.length;
  const totalPages = Math.ceil(totalArticles / ARTICLES_PER_PAGE);
  
  // Get sorted articles
  const sortedArticles = [...blogArticles]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  
  // Get current page articles
  const indexOfLastArticle = currentPage * ARTICLES_PER_PAGE;
  const indexOfFirstArticle = indexOfLastArticle - ARTICLES_PER_PAGE;
  const currentArticles: BlogArticlePreview[] = sortedArticles
    .slice(indexOfFirstArticle, indexOfLastArticle)
    .map(({ content, relatedArticles, ...rest }) => rest);
  
  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  
  return (
    <BlogLayout title="Blog - Actualités et conseils sécurité">
      <BlogHero 
        subtitle="Actualités, conseils et expertise en matière de sécurité privée"
        background="bg-white"
        backgroundImage="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//blog%20du%20vigile.png"
        className="h-[450px] mb-16"
      />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentArticles.map(article => (
                <BlogCard key={article.id} article={article} />
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12">
                <Pagination>
                  <PaginationContent>
                    {currentPage > 1 && (
                      <PaginationItem>
                        <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
                      </PaginationItem>
                    )}
                    
                    {pageNumbers.map(number => (
                      <PaginationItem key={number}>
                        <PaginationLink 
                          isActive={currentPage === number}
                          onClick={() => handlePageChange(number)}
                          className={currentPage === number ? 'bg-red-600 text-white' : ''}
                        >
                          {number}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    {currentPage < totalPages && (
                      <PaginationItem>
                        <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
                      </PaginationItem>
                    )}
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </BlogLayout>
  );
};

export default BlogIndex;
