
import React, { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import HeaderLogo from './HeaderLogo';

const Header: React.FC = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <HeaderLogo />
          
          {isMobile ? (
            <MobileNav />
          ) : (
            <DesktopNav />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
