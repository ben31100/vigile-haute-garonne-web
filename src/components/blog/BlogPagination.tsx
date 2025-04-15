
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
    <div className="flex justify-center my-8">
      <Pagination className="bg-white shadow-md rounded-lg p-4 w-auto inline-block">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
              className={`${currentPage <= 1 ? "pointer-events-none opacity-50" : "cursor-pointer hover:bg-gray-100"} text-levigile-dark font-medium`}
              aria-disabled={currentPage <= 1}
            />
          </PaginationItem>
          
          {pageNumbers.map((page, index) => {
            if (page === 'ellipsis-start' || page === 'ellipsis-end') {
              return (
                <PaginationItem key={`ellipsis-${index}`}>
                  <span className="px-4">...</span>
                </PaginationItem>
              );
            }
            
            return (
              <PaginationItem key={index}>
                <PaginationLink
                  onClick={() => handlePageChange(page as number)}
                  isActive={currentPage === page}
                  className={
                    currentPage === page 
                      ? "bg-levigile-blue hover:bg-levigile-dark text-white border-levigile-blue font-bold" 
                      : "cursor-pointer bg-white hover:bg-gray-100 text-levigile-dark border border-gray-200 font-medium"
                  }
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}
          
          <PaginationItem>
            <PaginationNext 
              onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
              className={`${currentPage >= totalPages ? "pointer-events-none opacity-50" : "cursor-pointer hover:bg-gray-100"} text-levigile-dark font-medium`}
              aria-disabled={currentPage >= totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default BlogPagination;
