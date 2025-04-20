import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import CareerMenu from './CareerMenu';

const DesktopNav: React.FC = () => {
  const [isVillesDropdownOpen, setIsVillesDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Function for scrolling to a section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function for navigation with scroll to top
  const navigateAndScrollTop = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="flex items-center space-x-8">
      <Link 
        to="/" 
        className={cn(
          "text-levigile-dark hover:text-levigile-blue font-medium text-base transition-colors",
          location.pathname === "/" && "text-levigile-blue"
        )}
      >
        Accueil
      </Link>
      
      <DropdownMenu open={isServicesDropdownOpen} onOpenChange={setIsServicesDropdownOpen}>
        <DropdownMenuTrigger 
          className={cn(
            "text-levigile-dark hover:text-levigile-blue font-medium text-base bg-transparent hover:bg-transparent focus:bg-transparent inline-flex items-center transition-colors",
            location.pathname.includes("/services") && "text-levigile-blue"
          )}
        >
          Nos services <ChevronDown className="ml-1 h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="bg-white w-48 p-1 z-50">
          <DropdownMenuItem asChild>
            <Link 
              to="/services/gardiennage"
              className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Gardiennage
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link 
              to="/services/securite-evenementielle"
              className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Sécurité événementielle
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link 
              to="/services/intervention"
              className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Intervention
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link 
              to="/services/securite-cynophile"
              className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Sécurité cynophile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link 
              to="/services/securite-magasin"
              className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Sécurité magasin
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link 
              to="/services/securite-residentielle"
              className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Sécurité résidentielle
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link 
              to="/services/securite-incendie"
              className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Sécurité incendie
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      <Link 
        to="/blog" 
        className={cn(
          "text-levigile-dark hover:text-levigile-blue font-medium text-base transition-colors",
          location.pathname.includes("/blog") && "text-levigile-blue"
        )}
      >
        Blog
      </Link>
      
      <DropdownMenu open={isVillesDropdownOpen} onOpenChange={setIsVillesDropdownOpen}>
        <DropdownMenuTrigger 
          className={cn(
            "text-levigile-dark hover:text-levigile-blue font-medium text-base bg-transparent hover:bg-transparent focus:bg-transparent inline-flex items-center transition-colors",
            (location.pathname.includes("/villes") || 
             location.pathname.includes("/toulouse") || 
             location.pathname.includes("/blagnac") ||
             location.pathname.includes("/colomiers") ||
             location.pathname.includes("/tournefeuille") ||
             location.pathname.includes("/muret")) && "text-levigile-blue"
          )}
        >
          Villes <ChevronDown className="ml-1 h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="bg-white w-48 p-1 z-50">
          <DropdownMenuItem asChild>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                navigateAndScrollTop('/toulouse.html');
              }} 
              className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Toulouse
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                navigateAndScrollTop('/blagnac.html');
              }} 
              className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Blagnac
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                navigateAndScrollTop('/colomiers.html');
              }} 
              className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Colomiers
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                navigateAndScrollTop('/tournefeuille.html');
              }} 
              className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Tournefeuille
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                navigateAndScrollTop('/muret.html');
              }} 
              className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Muret
            </a>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link 
              to="/villes" 
              className="cursor-pointer w-full px-4 py-2 text-sm font-medium text-levigile-blue hover:bg-gray-100 rounded-md"
            >
              Toutes les villes
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <CareerMenu />
      
      <Link 
        to="/devenir-partenaire" 
        className={cn(
          "text-levigile-dark hover:text-levigile-blue font-medium text-base transition-colors font-bold",
          location.pathname === "/devenir-partenaire" && "text-levigile-blue"
        )}
      >
        Devenir partenaire
      </Link>
        
      <Link to="/contact" className="text-levigile-dark hover:text-levigile-blue font-medium text-base transition-colors">
        Contact
      </Link>
      
      <DropdownMenu>
        <DropdownMenuTrigger 
          className="text-levigile-dark hover:text-levigile-blue font-medium text-base bg-transparent hover:bg-transparent focus:bg-transparent inline-flex items-center transition-colors"
        >
          Espaces <ChevronDown className="ml-1 h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="bg-white w-48 p-1 z-50">
          <DropdownMenuItem asChild>
            <Link 
              to="/espace-administrateur"
              className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Espace Administrateur
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link 
              to="/espace-client"
              className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Espace Client
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link 
              to="/espace-agent"
              className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Espace Agent
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default DesktopNav;
