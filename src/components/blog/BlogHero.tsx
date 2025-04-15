
import React from 'react';

const BlogHero: React.FC = () => {
  return (
    <section 
      className="text-white py-16 mb-10 relative h-[500px]"
      style={{
        backgroundImage: "url('https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//blog-levigile.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog LeVigile</h1>
          <p className="text-xl opacity-90">Expertise, conseils et actualités sur la sécurité privée</p>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
