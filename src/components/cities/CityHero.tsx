
import React, { useEffect, useState } from 'react';
import { getCityImageUrl, getSupabaseImageUrl } from '@/utils/imageUtils';
import { supabase } from '@/integrations/supabase/client';

/**
 * Configuration Supabase:
 * - URL et clé d'API: src/integrations/supabase/client.ts
 * - ID du projet: supabase/config.toml 
 */

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

  useEffect(() => {
    const loadImageFromSupabase = async () => {
      let imagePath;

      if (backgroundImage) {
        // Si une image spécifique est fournie, l'utiliser
        imagePath = backgroundImage;
      } else if (cityName === 'Toulouse') {
        // Pour Toulouse, utiliser une image spécifique
        imagePath = '/images/cities/toulouse-hero.jpg';
      } else {
        // Pour les autres villes, utiliser la fonction getCityImageUrl
        imagePath = getCityImageUrl(cityName);
      }

      // Si c'est une URL complète, l'utiliser directement
      if (imagePath.startsWith('http')) {
        setBgImage(imagePath);
        return;
      }

      try {
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
        setBgImage(imagePath);
      }
    };

    loadImageFromSupabase();
  }, [cityName, backgroundImage]);

  return (
    <section 
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${bgImage || '/images/cities/default-hero.jpg'}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#333' // Fallback si l'image ne charge pas - gris foncé plus adapté
      }} 
      className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-white bg-black"
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
