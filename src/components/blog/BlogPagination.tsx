
import React from 'react';
import { Button } from '@/components/ui/button';

const BlogPagination: React.FC = () => {
  return (
    <div className="flex justify-center mt-10">
      <nav className="flex items-center space-x-2">
        <Button variant="outline" size="sm" disabled>Précédent</Button>
        <Button variant="default" size="sm" className="bg-levigile-blue hover:bg-levigile-dark">1</Button>
        <Button variant="outline" size="sm">2</Button>
        <Button variant="outline" size="sm">3</Button>
        <Button variant="outline" size="sm">Suivant</Button>
      </nav>
    </div>
  );
};

export default BlogPagination;
