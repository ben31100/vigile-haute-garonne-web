import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const Header: React.FC = () => {
  const [isVillesDropdownOpen, setIsVillesDropdownOpen] = useState(false);
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false);
  const isMobile = useIsMobile();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              alt="LeVigile Logo" 
              className="h-10 w-auto" 
              src="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//logo%20levigile%20securite.png" 
            />
          </Link>
        </div>

      
      <nav className="hidden md:flex space-x-8">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-levigile-dark hover:text-levigile-blue font-medium">Accueil</Link>
        <a href="/#services" onClick={(e) => {
          e.preventDefault();
          scrollToSection('services');
        }} className="text-levigile-dark hover:text-levigile-blue font-medium">Nos services</a>
        
        
          <DropdownMenu open={isVillesDropdownOpen} onOpenChange={setIsVillesDropdownOpen}>
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
          
        <a href="/#contact" onClick={(e) => {
          e.preventDefault();
          scrollToSection('contact');
        }} className="text-levigile-dark hover:text-levigile-blue font-medium">Contact</a>
      </nav>

      {/* Mobile Menu Button with Sheet */}
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
                <Link 
                  to="/" 
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-levigile-dark hover:text-levigile-blue font-medium py-2"
                >
                  Accueil
                </Link>
              </SheetClose>
              
              <SheetClose asChild>
                <a 
                  href="/#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                  className="text-levigile-dark hover:text-levigile-blue font-medium py-2"
                >
                  Nos services
                </a>
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
                      <Link to="/toulouse.html" className="text-sm text-gray-700 hover:text-levigile-blue py-1">
                        Toulouse
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/blagnac.html" className="text-sm text-gray-700 hover:text-levigile-blue py-1">
                        Blagnac
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/colomiers.html" className="text-sm text-gray-700 hover:text-levigile-blue py-1">
                        Colomiers
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/tournefeuille.html" className="text-sm text-gray-700 hover:text-levigile-blue py-1">
                        Tournefeuille
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/muret.html" className="text-sm text-gray-700 hover:text-levigile-blue py-1">
                        Muret
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/villes" className="text-sm font-medium text-levigile-blue hover:text-levigile-dark py-1">
                        Toutes les villes
                      </Link>
                    </SheetClose>
                  </CollapsibleContent>
                </Collapsible>
                
              
              <SheetClose asChild>
                <a 
                  href="/#contact"
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
    </div>
    </header>
  );
};

export default Header;
