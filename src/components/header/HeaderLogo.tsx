
import React from 'react';
import { useNavigate } from 'react-router-dom';
import OptimizedImage from '@/components/OptimizedImage';

const HeaderLogo: React.FC = () => {
  const navigate = useNavigate();

  // Function to navigate and scroll to top of the home page
  const navigateToHomeAndScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex items-center">
      <a
        href="/"
        onClick={navigateToHomeAndScrollTop}
        className="flex items-center"
        aria-label="Accueil LeVigile"
      >
        <OptimizedImage
          alt="LeVigile Logo"
          className="h-6 w-auto cursor-pointer"
          src="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//logo%20levigile%20securite.webp"
          priority={true}
          width={180}
          height={36}
        />
      </a>
    </div>
  );
};

export default HeaderLogo;
