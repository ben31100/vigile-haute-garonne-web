
import React from 'react';
import { getCityImageUrl } from '@/utils/imageUtils';

interface CityHeroProps {
  cityName: string;
  subtitle: string;
  backgroundImage?: string;
}

const CityHero: React.FC<CityHeroProps> = ({ 
  cityName, 
  subtitle, 
  backgroundImage 
}) => {
  // Si aucune image n'est fournie explicitement, utiliser notre utilitaire
  const bgImage = backgroundImage || getCityImageUrl(cityName);
  
  return (
    <section 
      className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
          Sécurité à {cityName}
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto animate-fade-in animate-delay-200">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default CityHero;
