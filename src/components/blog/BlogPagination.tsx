
import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

interface BlogPaginationProps {
  totalItems: number;
  itemsPerPage?: number;
}

const BlogPagination: React.FC<BlogPaginationProps> = ({ 
  totalItems, 
  itemsPerPage = 6 
}) => {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page') || '1');
  const navigate = useNavigate();
  
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  if (totalPages <= 1) return null;
  
  const handlePageChange = (pageNumber: number) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', pageNumber.toString());
    navigate(`?${newParams.toString()}`);
  };
  
  // Calculate page numbers to show (show max 5 pages)
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 3;
    
    if (totalPages <= maxPagesToShow) {
      // If we have 3 or fewer pages, show all of them
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show the first page
      pages.push(1);
      
      // Calculate start and end pages to show around current page
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      // Add ellipsis if there's a gap after page 1
      if (startPage > 2) {
        pages.push('ellipsis-start');
      }
      
      // Add pages around current page
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      
      // Add ellipsis if there's a gap before last page
      if (endPage < totalPages - 1) {
        pages.push('ellipsis-end');
      }
      
      // Always show the last page if more than 1 page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }
    
    return pages;
  };
  
  const pageNumbers = getPageNumbers();
  
  return (
    <div className="flex justify-center mt-8 mb-12">
      <div className="inline-flex items-center justify-center rounded-md bg-white shadow-md border border-gray-200 p-1">
        <button
          onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className={`relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-l-md ${
            currentPage <= 1
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-levigile-dark bg-white hover:bg-gray-100 cursor-pointer'
          }`}
        >
          Précédent
        </button>
        
        {pageNumbers.map((page, index) => {
          if (page === 'ellipsis-start' || page === 'ellipsis-end') {
            return (
              <span key={`ellipsis-${index}`} className="px-3 py-2 text-sm text-gray-700">
                ...
              </span>
            );
          }
          
          return (
            <button
              key={`page-${index}`}
              onClick={() => handlePageChange(page as number)}
              className={`relative inline-flex items-center px-4 py-2 text-sm font-medium ${
                currentPage === page
                  ? 'z-10 bg-levigile-blue text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-levigile-blue'
                  : 'text-gray-900 hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          );
        })}
        
        <button
          onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className={`relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-r-md ${
            currentPage >= totalPages
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-levigile-dark bg-white hover:bg-gray-100 cursor-pointer'
          }`}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default BlogPagination;
