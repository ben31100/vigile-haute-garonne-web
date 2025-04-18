import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

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
    // If already on the page, just scroll to top
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Otherwise, navigate to the page
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
          <NavigationMenuItem>
            <NavigationMenuTrigger 
              className={cn(
                "text-levigile-dark hover:text-levigile-blue font-medium text-base bg-transparent hover:bg-transparent focus:bg-transparent transition-colors",
                location.pathname.includes("/services") && "text-levigile-blue"
              )}
              onClick={() => scrollToSection('services')}
            >
              Nos services
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white p-4 rounded-lg shadow-lg w-[800px] z-50">
              <ScrollArea className="max-h-[600px]">
                <div className="grid grid-cols-2 gap-6">
                  <Link to="/services/gardiennage" className="group flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                      <img 
                        src="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//ronde-hero.jpg" 
                        alt="Gardiennage" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-levigile-dark group-hover:text-levigile-blue mb-1">Gardiennage</h3>
                      <p className="text-sm text-gray-600">Surveillance et protection de vos locaux</p>
                    </div>
                  </Link>
                  
                  <Link to="/services/securite-evenementielle" className="group flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                      <img 
                        src="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Securite%20evenementielle%20levigile.png" 
                        alt="Sécurité événementielle" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-levigile-dark group-hover:text-levigile-blue mb-1">Sécurité événementielle</h3>
                      <p className="text-sm text-gray-600">Protection lors de vos événements</p>
                    </div>
                  </Link>
                  
                  <Link to="/services/intervention" className="group flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                      <img 
                        src="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Securiser%20un%20chantier%20par%20Levigile.png" 
                        alt="Intervention" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-levigile-dark group-hover:text-levigile-blue mb-1">Intervention</h3>
                      <p className="text-sm text-gray-600">Réponse rapide en cas d'incidents</p>
                    </div>
                  </Link>
                  
                  <Link to="/services/securite-cynophile" className="group flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                      <img 
                        src="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Agent%20cynophile%20levigile.png" 
                        alt="Sécurité cynophile" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-levigile-dark group-hover:text-levigile-blue mb-1">Sécurité cynophile</h3>
                      <p className="text-sm text-gray-600">Protection avec maîtres-chiens</p>
                    </div>
                  </Link>
                  
                  <Link to="/services/securite-magasin" className="group flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                      <img 
                        src="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Securite%20en%20grande%20surface%20Levigile.png" 
                        alt="Sécurité magasin" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-levigile-dark group-hover:text-levigile-blue mb-1">Sécurité magasin</h3>
                      <p className="text-sm text-gray-600">Protection des commerces et boutiques</p>
                    </div>
                  </Link>
                  
                  <Link to="/services/securite-residentielle" className="group flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                      <img 
                        src="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Surveillance%20de%20residences%20Levigile.png" 
                        alt="Sécurité résidentielle" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-levigile-dark group-hover:text-levigile-blue mb-1">Sécurité résidentielle</h3>
                      <p className="text-sm text-gray-600">Protection de résidences et immeubles</p>
                    </div>
                  </Link>
                  
                  <Link to="/services/securite-incendie" className="group flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                      <img 
                        src="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Securite%20incendie%20levigile.jpg" 
                        alt="Sécurité incendie" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-levigile-dark group-hover:text-levigile-blue mb-1">Sécurité incendie</h3>
                      <p className="text-sm text-gray-600">Prévention et gestion des risques incendie</p>
                    </div>
                  </Link>
                </div>
              </ScrollArea>
            </NavigationMenuContent>
          </NavigationMenuItem>
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
      
      <DropdownMenu open={isVillesDropdownOpen} onOpenChange={setIsVillesDropdownOpen}>
        <DropdownMenuTrigger 
          className={cn(
            "text-levigile-dark hover:text-levigile-blue font-medium text-base bg-transparent hover:bg-transparent focus:bg-transparent inline-flex items-center transition-colors",
            (location.pathname.includes("/toulouse") || 
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
