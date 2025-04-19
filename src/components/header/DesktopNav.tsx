
import React from 'react';
import { useLocation } from 'react-router-dom';
import NavLink from './NavLink';
import ServicesMenu from './ServicesMenu';
import CitiesMenu from './CitiesMenu';
import CareerMenu from './CareerMenu';

const DesktopNav: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="flex items-center space-x-8">
      <NavLink 
        to="/"
        isActive={location.pathname === "/"}
      >
        Accueil
      </NavLink>
      
      <ServicesMenu />
      
      <NavLink 
        to="/blog"
        isActive={location.pathname.includes("/blog")}
      >
        Blog
      </NavLink>
      
      <CitiesMenu />

      <CareerMenu />
      
      <NavLink 
        to="/devenir-partenaire"
        isActive={location.pathname === "/devenir-partenaire"}
        className="font-bold"
      >
        Devenir partenaire
      </NavLink>
      
      <NavLink 
        to="/contact"
        isActive={location.pathname === "/contact"}
      >
        Contact
      </NavLink>
      
      <NavLink 
        to="/espace"
        isActive={location.pathname === "/espace"}
      >
        Espace sécurisé
      </NavLink>
    </nav>
  );
};

export default DesktopNav;

