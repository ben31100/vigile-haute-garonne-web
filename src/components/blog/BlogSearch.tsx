
import React from 'react';
import { SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';

const BlogSearch: React.FC = () => {
  return (
    <div className="relative">
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      <Input 
        placeholder="Rechercher un article..." 
        className="pl-10 bg-white" 
      />
    </div>
  );
};

export default BlogSearch;
