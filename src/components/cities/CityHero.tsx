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
  // Déterminer l'image de fond à utiliser
  let bgImage = backgroundImage || getCityImageUrl(cityName);

  // Si nous sommes sur la page de Toulouse et qu'aucune image de fond spécifique n'est fournie, utiliser toulouse-hero.png
  if (cityName === 'Toulouse' && !backgroundImage) {
    bgImage = '/lovable-uploads/16b12a0d-7453-48ac-a8f1-0803dc361f16.png';
  }
  console.log("Image de fond utilisée:", bgImage); // Pour le débogage

  return <section style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${bgImage}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#333' // Fallback si l'image ne charge pas - gris foncé plus adapté
  }} className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-white bg-black">
      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
          Sécurité à {cityName}
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto animate-fade-in animate-delay-200">
          {subtitle}
        </p>
      </div>
    </section>;
};
export default CityHero;