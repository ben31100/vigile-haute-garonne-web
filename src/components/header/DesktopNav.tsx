import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const DesktopNav: React.FC = () => {
  const [isVillesDropdownOpen, setIsVillesDropdownOpen] = useState(false);
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
    // If already on the page, just scroll to top
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Otherwise, navigate to the page
      navigate(path);
    }
  };

  return (
    <nav className="hidden md:flex space-x-8">
      <a href="#" onClick={(e) => {
        e.preventDefault();
        navigateAndScrollTop('/');
      }} className="text-levigile-dark hover:text-levigile-blue font-medium">Accueil</a>
      
      <a href="#services" onClick={(e) => {
        e.preventDefault();
        scrollToSection('services');
      }} className="text-levigile-dark hover:text-levigile-blue font-medium">Nos services</a>
      
      <DropdownMenu open={isVillesDropdownOpen} onOpenChange={setIsVillesDropdownOpen}>
        <DropdownMenuTrigger className="text-levigile-dark hover:text-levigile-blue font-medium bg-transparent hover:bg-transparent focus:bg-transparent inline-flex items-center">
          Villes <ChevronDown className="ml-1 h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="bg-white w-48 p-1">
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
          <div className="border-t border-gray-100 my-1"></div>
          <DropdownMenuItem asChild>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                navigateAndScrollTop('/villes');
              }} 
              className="cursor-pointer w-full px-4 py-2 text-sm font-medium text-levigile-blue hover:bg-gray-100 rounded-md"
            >
              Toutes les villes
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
        
      <a href="#contact" onClick={(e) => {
        e.preventDefault();
        scrollToSection('contact');
      }} className="text-levigile-dark hover:text-levigile-blue font-medium">Contact</a>
    </nav>
  );
};

export default DesktopNav;
