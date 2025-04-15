
import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const BlogPagination: React.FC<BlogPaginationProps> = ({ 
  currentPage, 
  totalPages,
  onPageChange
}) => {
  // Don't render pagination if there's only one page
  if (totalPages <= 1) return null;

  // Function to handle previous page navigation
  const handlePreviousPage = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  // Function to handle next page navigation
  const handleNextPage = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Function to handle specific page navigation
  const handlePageClick = (e: React.MouseEvent, page: number) => {
    e.preventDefault();
    onPageChange(page);
  };

  return (
    <div className="flex justify-center mt-10">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              onClick={handlePreviousPage}
              className={currentPage <= 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
              href="#"
            />
          </PaginationItem>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink 
                onClick={(e) => handlePageClick(e, page)}
                isActive={page === currentPage}
                href="#"
                className={page === currentPage ? "bg-levigile-blue text-white hover:bg-levigile-dark" : ""}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          
          <PaginationItem>
            <PaginationNext 
              onClick={handleNextPage}
              className={currentPage >= totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
              href="#"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default BlogPagination;
