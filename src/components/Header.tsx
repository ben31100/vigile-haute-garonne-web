
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
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
            <span className="text-levigile-blue text-2xl font-bold">Le<span className="text-levigile-red">Vigile</span></span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-levigile-dark hover:text-levigile-blue font-medium">Accueil</Link>
          <Link to="/#services" className="text-levigile-dark hover:text-levigile-blue font-medium">Nos services</Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-levigile-dark hover:text-levigile-blue font-medium bg-transparent hover:bg-transparent focus:bg-transparent">
                  Villes
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white">
                  <ul className="grid w-48 gap-1 p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/toulouse.html" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                          Toulouse
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/blagnac.html" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                          Blagnac
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/colomiers.html" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                          Colomiers
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/tournefeuille.html" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                          Tournefeuille
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/muret.html" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                          Muret
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li className="border-t border-gray-100 my-1"></li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/villes" className="block px-4 py-2 text-sm font-medium text-levigile-blue hover:bg-gray-100 rounded-md">
                          Toutes les villes
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
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
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
