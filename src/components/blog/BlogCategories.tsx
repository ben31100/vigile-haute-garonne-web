
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface BlogCategoriesProps {
  categories: Array<{ name: string; count: number }>;
}

const BlogCategories: React.FC<BlogCategoriesProps> = ({ categories }) => {
  // Fonction pour convertir un nom de catégorie en slug
  const categoryToSlug = (name: string) => {
    return name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  };

  // Trier les catégories par nombre d'articles (décroissant)
  const sortedCategories = [...categories].sort((a, b) => b.count - a.count);

  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-levigile-dark mb-4">Catégories</h3>
      <ul className="space-y-2">
        {sortedCategories.map((category, index) => (
          <li key={index}>
            <Link
              to={`/blog/categorie/${categoryToSlug(category.name)}`}
              className={cn(
                "flex justify-between items-center p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                category.count === 0 && "opacity-50 pointer-events-none"
              )}
            >
              <span>{category.name}</span>
              <span className="text-sm bg-levigile-lightgray text-levigile-blue px-2 py-1 rounded-full">
                {category.count}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogCategories;
