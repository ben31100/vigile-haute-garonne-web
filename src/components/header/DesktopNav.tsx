
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const DesktopNav: React.FC = () => {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <Link to="/" className="text-gray-800 hover:text-levigile-blue transition-colors font-medium">
        Accueil
      </Link>
      
      <div className="relative group">
        <button className="flex items-center text-gray-800 hover:text-levigile-blue transition-colors font-medium">
          Services <ChevronDown className="ml-1 h-4 w-4" />
        </button>
        <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className="py-1 grid gap-1">
            <Link to="/services/gardiennage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
              Gardiennage
            </Link>
            <Link to="/services/intervention" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
              Intervention
            </Link>
            <Link to="/services/evenementiel" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
              Sécurité Événementielle
            </Link>
            <Link to="/services/cynophile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
              Sécurité Cynophile
            </Link>
            <Link to="/services/incendie" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
              Sécurité Incendie
            </Link>
            <Link to="/services/magasin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
              Sécurité Magasin
            </Link>
            <Link to="/services/residentielle" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
              Sécurité Résidentielle
            </Link>
          </div>
        </div>
      </div>
      
      <Link to="/contact" className="text-gray-800 hover:text-levigile-blue transition-colors font-medium">
        Contact
      </Link>
      
      <Link to="/espace" className="bg-levigile-blue text-white px-4 py-2 rounded hover:bg-levigile-blue-dark transition-colors">
        Espace Client
      </Link>
    </nav>
  );
};

export default DesktopNav;
