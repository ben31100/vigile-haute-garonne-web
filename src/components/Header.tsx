
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVillesDropdownOpen, setIsVillesDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleVillesDropdown = () => {
    setIsVillesDropdownOpen(!isVillesDropdownOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-levigile-blue text-2xl font-bold">Le<span className="text-levigile-red">Vigile</span></span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-levigile-dark hover:text-levigile-blue font-medium">Accueil</Link>
          <Link to="/#services" className="text-levigile-dark hover:text-levigile-blue font-medium">Nos services</Link>
          
          <div className="relative group">
            <button 
              className="text-levigile-dark hover:text-levigile-blue font-medium flex items-center"
              onClick={() => setIsVillesDropdownOpen(!isVillesDropdownOpen)}
            >
              Villes <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white z-10 hidden group-hover:block">
              <div className="rounded-md ring-1 ring-black ring-opacity-5 py-1">
                <Link to="/securite-ville-toulouse" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Toulouse</Link>
                <Link to="/securite-ville-blagnac" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Blagnac</Link>
                <Link to="/securite-ville-colomiers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Colomiers</Link>
                <Link to="/securite-ville-tournefeuille" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tournefeuille</Link>
                <Link to="/securite-ville-muret" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Muret</Link>
                <div className="border-t border-gray-100 my-1"></div>
                <Link to="/villes" className="block px-4 py-2 text-sm font-medium text-levigile-blue hover:bg-gray-100">Toutes les villes</Link>
              </div>
            </div>
          </div>
          
          <Link to="/#contact" className="text-levigile-dark hover:text-levigile-blue font-medium">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-4">
            <Link to="/" 
              className="text-levigile-dark hover:text-levigile-blue font-medium py-2 px-4" 
              onClick={toggleMenu}
            >
              Accueil
            </Link>
            <Link to="/#services" 
              className="text-levigile-dark hover:text-levigile-blue font-medium py-2 px-4" 
              onClick={toggleMenu}
            >
              Nos services
            </Link>
            
            <div className="relative">
              <button 
                onClick={toggleVillesDropdown}
                className="w-full text-left text-levigile-dark hover:text-levigile-blue font-medium py-2 px-4 flex justify-between items-center"
              >
                <span>Villes</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isVillesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isVillesDropdownOpen && (
                <div className="pl-4 space-y-2 mt-2 border-l-2 border-levigile-lightgray ml-4">
                  <Link to="/securite-ville-toulouse" className="block py-1 text-sm hover:text-levigile-blue" onClick={toggleMenu}>
                    Toulouse
                  </Link>
                  <Link to="/securite-ville-blagnac" className="block py-1 text-sm hover:text-levigile-blue" onClick={toggleMenu}>
                    Blagnac
                  </Link>
                  <Link to="/securite-ville-colomiers" className="block py-1 text-sm hover:text-levigile-blue" onClick={toggleMenu}>
                    Colomiers
                  </Link>
                  <Link to="/securite-ville-tournefeuille" className="block py-1 text-sm hover:text-levigile-blue" onClick={toggleMenu}>
                    Tournefeuille
                  </Link>
                  <Link to="/securite-ville-muret" className="block py-1 text-sm hover:text-levigile-blue" onClick={toggleMenu}>
                    Muret
                  </Link>
                  <Link to="/villes" className="block py-1 text-sm font-medium text-levigile-blue" onClick={toggleMenu}>
                    Toutes les villes
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/#contact" 
              className="text-levigile-dark hover:text-levigile-blue font-medium py-2 px-4" 
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
