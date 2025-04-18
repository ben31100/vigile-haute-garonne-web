
import React from 'react';

interface BlogHeroProps {
  title?: string;
  subtitle?: string;
  background?: string;
  backgroundImage?: string;
  className?: string;
}

const BlogHero: React.FC<BlogHeroProps> = ({ 
  title, 
  subtitle,
  background = 'bg-gradient-to-r from-levigile-blue to-levigile-gray',
  backgroundImage,
  className = 'py-16 md:py-24 mb-12'
}) => {
  const backgroundStyle = backgroundImage 
    ? { 
        backgroundImage: `url('${backgroundImage}')`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      } 
    : {};

  return (
    <div 
      className={`${background} ${className} flex items-center`} 
      style={backgroundStyle}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {title && (
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
          )}
          
          {subtitle && (
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-semibold">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
