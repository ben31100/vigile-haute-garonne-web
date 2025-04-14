
import React, { useEffect, useState } from 'react';
import { getCityImageUrl, getSupabaseImageUrl } from '@/utils/imageUtils';
import { supabase } from '@/integrations/supabase/client';

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
  const [bgImage, setBgImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImageFromSupabase = async () => {
      setIsLoading(true);
      let imagePath;

      if (backgroundImage) {
        // Si une image spécifique est fournie, l'utiliser
        imagePath = backgroundImage;
      } else {
        // Pour toutes les villes, utiliser la fonction getCityImageUrl
        imagePath = getCityImageUrl(cityName, 'hero');
      }

      try {
        // Si c'est une URL complète, l'utiliser directement
        if (imagePath.startsWith('http')) {
          setBgImage(imagePath);
          setIsLoading(false);
          return;
        }

        // Récupérer l'image depuis le bucket Supabase
        const cleanPath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
        const { data } = await supabase.storage
          .from('images')
          .getPublicUrl(cleanPath);

        console.log("Image récupérée depuis Supabase:", data.publicUrl);
        setBgImage(data.publicUrl);
      } catch (error) {
        console.error("Erreur inattendue:", error);
        // Utiliser le chemin local en cas d'erreur
        setBgImage(`/${imagePath}`);
      } finally {
        setIsLoading(false);
      }
    };

    loadImageFromSupabase();
  }, [cityName, backgroundImage]);

  // Animation classes for fade-in effect
  const fadeInClass = "animate-fade-in duration-700";

  return (
    <section 
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('${bgImage || '/images/cities/default-hero.jpg'}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#1e3a8a' // Blue fallback that matches the brand
      }} 
      className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-white transition-all duration-500"
    >
      <div className="container mx-auto px-4 text-center z-10">
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${fadeInClass}`}>
          Sécurité à {cityName}
        </h1>
        <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${fadeInClass} delay-200`}>
          {subtitle}
        </p>
        <div className={`mt-8 ${fadeInClass} delay-300`}>
          <button className="bg-levigile-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transform transition-transform hover:scale-105">
            Devis gratuit
          </button>
        </div>
      </div>
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-levigile-blue bg-opacity-70">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </section>
  );
};

export default CityHero;
