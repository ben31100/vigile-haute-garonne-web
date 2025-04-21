
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
        href="#"
        onClick={navigateToHomeAndScrollTop}
        className="flex items-center"
      >
        <OptimizedImage
          src="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//logo%20levigile%20securite.webp"
          alt="LeVigile Logo"
          className="h-6 w-auto cursor-pointer"
          width={120}
          height={24}
          priority={true}
        />
      </a>
    </div>
  );
};

export default HeaderLogo;
