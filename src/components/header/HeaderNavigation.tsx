
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const HeaderNavigation: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex items-center justify-end flex-1">
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </div>
  );
};

export default HeaderNavigation;
