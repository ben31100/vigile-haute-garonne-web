
import React, { useEffect, useState } from 'react';
import { getCityImageUrl, getSupabaseImageUrl } from '@/utils/imageUtils';

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
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const loadImageFromSupabase = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        let imagePath;

        // Prioritize direct background image if provided
        if (backgroundImage) {
          // If it's already a full URL (contains supabase.co), use it directly
          if (backgroundImage.includes('supabase.co')) {
            setBgImage(backgroundImage);
            setIsLoading(false);
            return;
          }
          imagePath = backgroundImage;
        } else {
          imagePath = getCityImageUrl(cityName, 'hero');
        }

        // Get the public URL for the image path
        const publicUrl = await getSupabaseImageUrl(imagePath);
        setBgImage(publicUrl);
      } catch (error) {
        console.error("Erreur lors du chargement de l'image:", error);
        setHasError(true);
        // Use fallback image
        setBgImage("https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images/gardiennage-hero.jpg?format=webp&quality=80");
      } finally {
        setIsLoading(false);
      }
    };

    loadImageFromSupabase();
  }, [cityName, backgroundImage]);

  // Image de secours en cas d'échec du chargement
  const fallbackImage = "https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images/gardiennage-hero.jpg";

  return (
    <section 
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${bgImage || fallbackImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#333' // Fallback si l'image ne charge pas - gris foncé plus adapté
      }} 
      className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-white"
    >
      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
          Sécurité à {cityName}
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto animate-fade-in animate-delay-200">
          {subtitle}
        </p>
      </div>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="animate-spin h-8 w-8 border-4 border-white border-t-transparent rounded-full"></div>
        </div>
      )}
      {hasError && !isLoading && (
        <div className="absolute bottom-4 right-4 bg-red-600 text-white px-3 py-1 rounded text-sm">
          Image non disponible
        </div>
      )}
    </section>
  );
};

export default CityHero;
