
import React from 'react';
import { Link } from 'react-router-dom';

interface Category {
  name: string;
  count: number;
}

interface BlogCategoriesProps {
  categories: Category[];
}

const BlogCategories: React.FC<BlogCategoriesProps> = ({ categories }) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-levigile-dark mb-4">Catégories</h3>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={index}>
            <Link 
              to={`/blog/categorie/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-50 transition-colors"
            >
              <span className="text-levigile-dark hover:text-levigile-blue transition-colors">
                {category.name}
              </span>
              <span className="text-sm text-gray-500 bg-gray-100 rounded-full px-2 py-0.5">
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
