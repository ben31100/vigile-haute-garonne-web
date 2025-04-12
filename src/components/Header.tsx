
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-levigile-blue text-2xl font-bold">Le<span className="text-levigile-red">Vigile</span></span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="text-levigile-dark hover:text-levigile-blue font-medium">Accueil</a>
          <a href="#services" className="text-levigile-dark hover:text-levigile-blue font-medium">Nos services</a>
          <a href="#contact" className="text-levigile-dark hover:text-levigile-blue font-medium">Contact</a>
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
            <a href="/" 
              className="text-levigile-dark hover:text-levigile-blue font-medium py-2 px-4" 
              onClick={toggleMenu}
            >
              Accueil
            </a>
            <a href="#services" 
              className="text-levigile-dark hover:text-levigile-blue font-medium py-2 px-4" 
              onClick={toggleMenu}
            >
              Nos services
            </a>
            <a href="#contact" 
              className="text-levigile-dark hover:text-levigile-blue font-medium py-2 px-4" 
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
