import React, { useState } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const MobileNav: React.FC = () => {
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false);
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
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="sm" aria-label="Menu">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="py-8 px-4 w-[280px]">
          <div className="flex flex-col space-y-4">
            <SheetClose asChild>
              <Link to="/" className="text-levigile-dark hover:text-levigile-blue font-medium py-2">
                Accueil
              </Link>
            </SheetClose>
            
            <SheetClose asChild>
              <a 
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('services');
                }}
                className="text-levigile-dark hover:text-levigile-blue font-medium py-2"
              >
                Nos services
              </a>
            </SheetClose>
            
            <SheetClose asChild>
              <Link 
                to="/blog"
                className="text-levigile-dark hover:text-levigile-blue font-medium py-2"
              >
                Blog
              </Link>
            </SheetClose>
            
            <Collapsible 
              className="w-full" 
              open={isCollapsibleOpen} 
              onOpenChange={setIsCollapsibleOpen}
            >
              <CollapsibleTrigger 
                className="flex w-full justify-between items-center text-levigile-dark hover:text-levigile-blue font-medium py-2"
              >
                <span>Villes</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isCollapsibleOpen ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 pt-2 flex flex-col space-y-2">
                <SheetClose asChild>
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      navigateAndScrollTop('/toulouse.html');
                    }} 
                    className="text-sm text-gray-700 hover:text-levigile-blue py-1"
                  >
                    Toulouse
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      navigateAndScrollTop('/blagnac.html');
                    }} 
                    className="text-sm text-gray-700 hover:text-levigile-blue py-1"
                  >
                    Blagnac
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      navigateAndScrollTop('/colomiers.html');
                    }} 
                    className="text-sm text-gray-700 hover:text-levigile-blue py-1"
                  >
                    Colomiers
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      navigateAndScrollTop('/tournefeuille.html');
                    }} 
                    className="text-sm text-gray-700 hover:text-levigile-blue py-1"
                  >
                    Tournefeuille
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      navigateAndScrollTop('/muret.html');
                    }} 
                    className="text-sm text-gray-700 hover:text-levigile-blue py-1"
                  >
                    Muret
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      navigateAndScrollTop('/villes');
                    }} 
                    className="text-sm font-medium text-levigile-blue hover:text-levigile-dark py-1"
                  >
                    Toutes les villes
                  </a>
                </SheetClose>
              </CollapsibleContent>
            </Collapsible>
            
            <SheetClose asChild>
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="text-levigile-dark hover:text-levigile-blue font-medium py-2"
              >
                Contact
              </a>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
