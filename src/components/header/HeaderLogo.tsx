
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderLogo: React.FC = () => {
  const navigate = useNavigate();
  const [logoLoaded, setLogoLoaded] = useState(false);
  const logoUrl = "https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//logo%20levigile%20securite.webp";

  // Function to navigate and scroll to top of the home page
  const navigateToHomeAndScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Indique que le logo est chargé, pour que l'avertissement de preload soit évité
    const img = new Image();
    img.src = logoUrl;
    img.onload = () => setLogoLoaded(true);
    
    return () => {
      img.onload = null;
    };
  }, []);

  return (
    <div className="flex items-center">
      <a
        href="#"
        onClick={navigateToHomeAndScrollTop}
        className="flex items-center"
      >
        {logoLoaded ? (
          <img
            alt="LeVigile Logo"
            className="h-6 w-auto cursor-pointer"
            src={logoUrl}
            width={180}
            height={30}
            loading="eager"
            fetchPriority="high"
          />
        ) : (
          <div className="h-6 w-[180px] bg-gray-200 animate-pulse rounded"></div>
        )}
      </a>
    </div>
  );
};

export default HeaderLogo;

