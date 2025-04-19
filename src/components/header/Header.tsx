
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderLogo from './HeaderLogo';
import HeaderNavigation from './HeaderNavigation';

const Header: React.FC = () => {
  const location = useLocation();

  // Make sure page scrolls to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <HeaderLogo />
        <HeaderNavigation />
      </div>
    </header>
  );
};

export default Header;
