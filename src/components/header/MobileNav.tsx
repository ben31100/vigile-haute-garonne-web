import React, { useState } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const MobileNav: React.FC = () => {
  const [isVillesCollapsibleOpen, setIsVillesCollapsibleOpen] = useState(false);
  const [isServicesCollapsibleOpen, setIsServicesCollapsibleOpen] = useState(false);
  const [isCareerCollapsibleOpen, setIsCareerCollapsibleOpen] = useState(false);
  const [isEspacesCollapsibleOpen, setIsEspacesCollapsibleOpen] = useState(false);
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
            <Menu size={32} />
          </Button>
        </SheetTrigger>
        
        <SheetContent side="right" className="py-8 px-4 w-[280px]">
          <div className="flex flex-col space-y-4">
            <SheetClose asChild>
              <Link to="/" className="text-levigile-dark hover:text-levigile-blue font-medium py-2">
                Accueil
              </Link>
            </SheetClose>

            <Collapsible 
              className="w-full" 
              open={isServicesCollapsibleOpen} 
              onOpenChange={setIsServicesCollapsibleOpen}
            >
              <CollapsibleTrigger 
                className="flex w-full justify-between items-center text-levigile-dark hover:text-levigile-blue font-medium py-2"
              >
                <span>Nos services</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesCollapsibleOpen ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 pt-2 flex flex-col space-y-2">
                <SheetClose asChild>
                  <Link 
                    to="/services/gardiennage" 
                    className="text-sm text-gray-700 hover:text-levigile-blue py-1"
                  >
                    Gardiennage
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    to="/services/securite-evenementielle" 
                    className="text-sm text-gray-700 hover:text-levigile-blue py-1"
                  >
                    Sécurité événementielle
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    to="/services/intervention" 
                    className="text-sm text-gray-700 hover:text-levigile-blue py-1"
                  >
                    Intervention
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    to="/services/securite-cynophile" 
                    className="text-sm text-gray-700 hover:text-levigile-blue py-1"
                  >
                    Sécurité cynophile
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    to="/services/securite-magasin" 
                    className="text-sm text-gray-700 hover:text-levigile-blue py-1"
                  >
                    Sécurité magasin
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    to="/services/securite-residentielle" 
                    className="text-sm text-gray-700 hover:text-levigile-blue py-1"
                  >
                    Sécurité résidentielle
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    to="/services/securite-incendie" 
                    className="text-sm text-gray-700 hover:text-levigile-blue py-1"
                  >
                    Sécurité incendie
                  </Link>
                </SheetClose>
              </CollapsibleContent>
            </Collapsible>

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
              open={isVillesCollapsibleOpen} 
              onOpenChange={setIsVillesCollapsibleOpen}
            >
              <CollapsibleTrigger 
                className="flex w-full justify-between items-center text-levigile-dark hover:text-levigile-blue font-medium py-2"
              >
                <span>Villes</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isVillesCollapsibleOpen ? 'rotate-180' : ''}`} />
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

            <Collapsible 
              className="w-full" 
              open={isCareerCollapsibleOpen} 
              onOpenChange={setIsCareerCollapsibleOpen}
            >
              <CollapsibleTrigger 
                className="flex w-full justify-between items-center text-levigile-dark hover:text-levigile-blue font-medium py-2"
              >
                <span>Carrière</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isCareerCollapsibleOpen ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 pt-2 flex flex-col space-y-2">
                <SheetClose asChild>
                  <Link 
                    to="/carriere/pourquoi-nous-rejoindre" 
                    className="text-sm text-gray-700 hover:text-levigile-blue py-1"
                  >
                    Pourquoi nous rejoindre
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    to="/carriere/nos-metiers" 
                    className="text-sm text-gray-700 hover:text-levigile-blue py-1"
                  >
                    Nos métiers
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    to="/carriere/nos-offres" 
                    className="text-sm text-gray-700 hover:text-levigile-blue py-1"
                  >
                    Nos offres d'emploi
                  </Link>
                </SheetClose>
              </CollapsibleContent>
            </Collapsible>

            <SheetClose asChild>
              <Link 
                to="/contact"
                className="text-levigile-dark hover:text-levigile-blue font-medium py-2"
              >
                Contact
              </Link>
            </SheetClose>

            <Collapsible 
              className="w-full" 
              open={isEspacesCollapsibleOpen} 
              onOpenChange={setIsEspacesCollapsibleOpen}
            >
              <CollapsibleTrigger 
                className="flex w-full justify-between items-center text-levigile-dark hover:text-levigile-blue font-medium py-2"
              >
                <span>Espaces</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isEspacesCollapsibleOpen ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 pt-2 flex flex-col space-y-2">
                <SheetClose asChild>
                  <Link 
                    to="/espace-administrateur" 
                    className="text-sm text-gray-700 hover:text-levigile-blue py-1"
                  >
                    Espace Administrateur
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    to="/espace-client" 
                    className="text-sm text-gray-700 hover:text-levigile-blue py-1"
                  >
                    Espace Client
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    to="/espace-agent" 
                    className="text-sm text-gray-700 hover:text-levigile-blue py-1"
                  >
                    Espace Agent
                  </Link>
                </SheetClose>
              </CollapsibleContent>
            </Collapsible>
            
            <SheetClose asChild>
              <Link 
                to="/devenir-partenaire"
                className="text-levigile-dark hover:text-levigile-blue font-bold py-2"
              >
                Devenir partenaire
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
