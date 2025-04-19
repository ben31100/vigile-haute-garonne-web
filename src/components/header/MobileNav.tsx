
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);
  
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <button 
        onClick={toggleMenu} 
        className="text-gray-800 hover:text-levigile-blue transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-50 px-4 py-5">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-800 hover:text-levigile-blue py-2 transition-colors" onClick={closeMenu}>
              Accueil
            </Link>
            
            <div>
              <button 
                className="flex items-center justify-between w-full text-gray-800 hover:text-levigile-blue py-2 transition-colors"
                onClick={toggleServices}
              >
                <span>Services</span>
                {servicesOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
              
              {servicesOpen && (
                <div className="ml-4 mt-2 flex flex-col space-y-2">
                  <Link to="/services/gardiennage" className="text-gray-700 hover:text-levigile-blue py-1 transition-colors" onClick={closeMenu}>
                    Gardiennage
                  </Link>
                  <Link to="/services/intervention" className="text-gray-700 hover:text-levigile-blue py-1 transition-colors" onClick={closeMenu}>
                    Intervention
                  </Link>
                  <Link to="/services/evenementiel" className="text-gray-700 hover:text-levigile-blue py-1 transition-colors" onClick={closeMenu}>
                    Sécurité Événementielle
                  </Link>
                  <Link to="/services/cynophile" className="text-gray-700 hover:text-levigile-blue py-1 transition-colors" onClick={closeMenu}>
                    Sécurité Cynophile
                  </Link>
                  <Link to="/services/incendie" className="text-gray-700 hover:text-levigile-blue py-1 transition-colors" onClick={closeMenu}>
                    Sécurité Incendie
                  </Link>
                  <Link to="/services/magasin" className="text-gray-700 hover:text-levigile-blue py-1 transition-colors" onClick={closeMenu}>
                    Sécurité Magasin
                  </Link>
                  <Link to="/services/residentielle" className="text-gray-700 hover:text-levigile-blue py-1 transition-colors" onClick={closeMenu}>
                    Sécurité Résidentielle
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/contact" className="text-gray-800 hover:text-levigile-blue py-2 transition-colors" onClick={closeMenu}>
              Contact
            </Link>
            
            <Link to="/espace" className="bg-levigile-blue text-white px-4 py-2 rounded text-center hover:bg-levigile-blue-dark transition-colors" onClick={closeMenu}>
              Espace Client
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
