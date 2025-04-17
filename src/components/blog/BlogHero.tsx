
import React from 'react';

interface BlogHeroProps {
  title: string;
  subtitle?: string;
  background?: string;
}

const BlogHero: React.FC<BlogHeroProps> = ({ 
  title, 
  subtitle,
  background = 'bg-gradient-to-r from-levigile-blue to-levigile-gray'
}) => {
  return (
    <div className={`${background} py-16 md:py-24 mb-12`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-lg md:text-xl text-white/80">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
