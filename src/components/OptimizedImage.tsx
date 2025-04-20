
import React, { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

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

  const getOptimizedUrl = (url: string) => {
    if (format === 'original' || !url.includes('supabase.co')) {
      return url;
    }
    
    // Add WebP format and quality parameters for Supabase URLs
    const separator = url.includes('?') ? '&' : '?';
    const formatParam = `format=${format}`;
    const qualityParam = `quality=${quality}`;
    const widthParam = width ? `width=${width}` : '';
    
    let optimizedUrl = `${url}${separator}${formatParam}&${qualityParam}`;
    if (widthParam) {
      optimizedUrl += `&${widthParam}`;
    }
    
    return optimizedUrl;
  };

  useEffect(() => {
    if (!priority) {
      const img = new Image();
      img.src = getOptimizedUrl(src);
      
      img.onload = () => {
        setImageSrc(img.src);
        setIsLoading(false);
      };
      
      img.onerror = () => {
        console.error(`Failed to load image: ${src}`);
        setError(true);
        setIsLoading(false);
        setImageSrc(src); // Fallback to original source
      };
      
      return () => {
        img.onload = null;
        img.onerror = null;
      };
    } else {
      setImageSrc(getOptimizedUrl(src));
    }
  }, [src, priority, format, quality, width]);

  if (isLoading) {
    return (
      <Skeleton 
        className={`${loadingClassName}`} 
        style={{
          width: width ? `${width}px` : '100%',
          height: height ? `${height}px` : '300px'
        }}
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
