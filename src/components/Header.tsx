
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from '@/hooks/use-mobile';
import { getSupabaseImageUrl } from '@/utils/imageUtils';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVillesDropdownOpen, setIsVillesDropdownOpen] = useState(false);
  const isMobile = useIsMobile();
  const [logoUrl, setLogoUrl] = useState('');
  const [logoLoadError, setLogoLoadError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const url = await getSupabaseImageUrl('levigile securite.png');
        console.log('Logo URL fetched:', url);
        
        // Additional check to validate the URL
        const img = new Image();
        img.onload = () => {
          setLogoUrl(url);
          console.log('Logo loaded successfully');
        };
        img.onerror = () => {
          setLogoLoadError('Failed to load logo image');
          console.error('Failed to load logo image');
        };
        img.src = url;
      } catch (error) {
        console.error('Failed to load logo:', error);
        setLogoLoadError(error instanceof Error ? error.message : 'Unknown error');
      }
    };

    fetchLogo();
  }, []);

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
            {logoLoadError ? (
              <div className="text-red-500">Logo Loading Error: {logoLoadError}</div>
            ) : (
              <img 
                src={logoUrl || '/placeholder.svg'} 
                alt="LeVigile Logo" 
                className="h-10 w-auto"
                onError={(e) => {
                  console.error('Image load error', e);
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
            )}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-levigile-dark hover:text-levigile-blue font-medium">Accueil</Link>
          <a href="/#services" className="text-levigile-dark hover:text-levigile-blue font-medium">Nos services</a>
          
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
          
          <a href="/#contact" className="text-levigile-dark hover:text-levigile-blue font-medium">Contact</a>
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
    </header>
  );
};

export default Header;
