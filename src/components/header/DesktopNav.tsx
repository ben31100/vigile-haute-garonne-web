
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import ServicesMenu from './ServicesMenu';
import CitiesMenu from './CitiesMenu';

const DesktopNav: React.FC = () => {
  const [isVillesDropdownOpen, setIsVillesDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      
      <NavigationMenu>
        <NavigationMenuList className="space-x-8">
          <ServicesMenu 
            scrollToSection={scrollToSection} 
            isActive={location.pathname.includes("/services")}
          />
        </NavigationMenuList>
      </NavigationMenu>
      
      <Link 
        to="/blog" 
        className={cn(
          "text-levigile-dark hover:text-levigile-blue font-medium text-base transition-colors",
          location.pathname.includes("/blog") && "text-levigile-blue"
        )}
      >
        Blog
      </Link>
      
      <CitiesMenu 
        isVillesDropdownOpen={isVillesDropdownOpen}
        setIsVillesDropdownOpen={setIsVillesDropdownOpen}
        navigateAndScrollTop={navigateAndScrollTop}
        isActive={
          location.pathname.includes("/toulouse") || 
          location.pathname.includes("/blagnac") ||
          location.pathname.includes("/colomiers") ||
          location.pathname.includes("/tournefeuille") ||
          location.pathname.includes("/muret")
        }
      />
      
      <a 
        href="#contact" 
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('contact');
        }} 
        className="text-levigile-dark hover:text-levigile-blue font-medium text-base transition-colors"
      >
        Contact
      </a>
    </nav>
  );
};

export default DesktopNav;
