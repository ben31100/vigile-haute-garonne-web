
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const HeaderNavigation: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
};

export default HeaderNavigation;
