
import React, { useState } from 'react';
import { Menu, X, ChevronDown, ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from '@/hooks/use-mobile';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVillesDropdownOpen, setIsVillesDropdownOpen] = useState(false);
  const isMobile = useIsMobile();

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
            <img 
              src="/lovable-uploads/22d5a3e6-941d-4667-a9e4-798cabb7fe20.png" 
              alt="LeVigile Logo" 
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-levigile-dark hover:text-levigile-blue font-medium">Accueil</Link>
          <Link to="/#services" className="text-levigile-dark hover:text-levigile-blue font-medium">Nos services</Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="text-levigile-dark hover:text-levigile-blue font-medium bg-transparent hover:bg-transparent focus:bg-transparent inline-flex items-center">
              Villes <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="bg-white w-48 p-1">
              <DropdownMenuItem asChild>
                <Link to="/toulouse.html" className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Toulouse
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/blagnac.html" className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Blagnac
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/colomiers.html" className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Colomiers
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/tournefeuille.html" className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Tournefeuille
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/muret.html" className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Muret
                </Link>
              </DropdownMenuItem>
              <div className="border-t border-gray-100 my-1"></div>
              <DropdownMenuItem asChild>
                <Link to="/villes" className="cursor-pointer w-full px-4 py-2 text-sm font-medium text-levigile-blue hover:bg-gray-100 rounded-md">
                  Toutes les villes
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/#contact" className="text-levigile-dark hover:text-levigile-blue font-medium">Contact</Link>
          
          {/* Nouveau lien vers le gestionnaire de médias */}
          <Link to="/media" className="text-levigile-dark hover:text-levigile-blue font-medium flex items-center">
            <ImageIcon className="mr-2 h-4 w-4" />
            Médias
          </Link>
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
                  <Link to="/toulouse.html" className="block py-1 text-sm hover:text-levigile-blue" onClick={toggleMenu}>
                    Toulouse
                  </Link>
                  <Link to="/blagnac.html" className="block py-1 text-sm hover:text-levigile-blue" onClick={toggleMenu}>
                    Blagnac
                  </Link>
                  <Link to="/colomiers.html" className="block py-1 text-sm hover:text-levigile-blue" onClick={toggleMenu}>
                    Colomiers
                  </Link>
                  <Link to="/tournefeuille.html" className="block py-1 text-sm hover:text-levigile-blue" onClick={toggleMenu}>
                    Tournefeuille
                  </Link>
                  <Link to="/muret.html" className="block py-1 text-sm hover:text-levigile-blue" onClick={toggleMenu}>
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
            
            {/* Nouveau lien vers le gestionnaire de médias pour mobile */}
            <Link to="/media" 
              className="text-levigile-dark hover:text-levigile-blue font-medium py-2 px-4 flex items-center" 
              onClick={toggleMenu}
            >
              <ImageIcon className="mr-2 h-4 w-4" />
              Médias
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
