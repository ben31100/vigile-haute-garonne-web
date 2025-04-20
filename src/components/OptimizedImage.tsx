
import React, { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { getResponsiveImageUrl } from '@/utils/optimizationUtils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loadingClassName?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png' | 'original';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loadingClassName = 'rounded-lg bg-gray-200',
  priority = false,
  sizes = '100vw',
  quality = 80,
  format = 'webp'
}) => {
  const [isLoading, setIsLoading] = useState(!priority);
  const [imageSrc, setImageSrc] = useState(priority ? src : '');
  const [error, setError] = useState(false);

  // Convertir l'URL pour utiliser des formats plus efficaces comme WebP
  const getOptimizedSrc = (url: string) => {
    // Si déjà en format optimisé ou si on doit conserver le format original, retourner l'URL directement
    if (format === 'original' || !url.includes('supabase.co')) {
      return getResponsiveImageUrl(url);
    }
    
    const separator = url.includes('?') ? '&' : '?';
    const qualityParam = `quality=${quality}`;
    const formatParam = `format=${format}`;
    
    // Pour les URLs Supabase, ajouter les paramètres de format et qualité
    return getResponsiveImageUrl(`${url}${separator}${formatParam}&${qualityParam}`);
  };

  useEffect(() => {
    if (!priority) {
      const optimizedSrc = getOptimizedSrc(src);
      
      const img = new Image();
      img.src = optimizedSrc;
      
      img.onload = () => {
        setImageSrc(optimizedSrc);
        setIsLoading(false);
      };
      
      img.onerror = () => {
        console.error(`Failed to load image: ${optimizedSrc}`);
        setError(true);
        setIsLoading(false);
        // Fallback to original source if optimization fails
        setImageSrc(src);
      };
      
      return () => {
        img.onload = null;
        img.onerror = null;
      };
    } else {
      // For priority images, optimize immediately
      setImageSrc(getOptimizedSrc(src));
    }
  }, [src, priority, format, quality]);

  if (isLoading) {
    return (
      <Skeleton 
        className={`${loadingClassName}`} 
        style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : '300px' }}
      />
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      sizes={sizes}
      onError={() => {
        if (!error) {
          setError(true);
          setImageSrc(src); // Fallback to original source
        }
      }}
    />
  );
};

export default OptimizedImage;
