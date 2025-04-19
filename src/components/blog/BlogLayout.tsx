
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface BlogLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({
  children,
  title,
  description = 'Le blog de LeVigile - Actualités et conseils sur la sécurité privée',
  keywords = 'sécurité, blog sécurité, agent de sécurité, entreprise sécurité, conseils sécurité',
  ogImage = 'https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//agent%20de%20securite.jpg',
}) => {
  return (
    <>
      <Helmet>
        <title>{title} | Blog LeVigile</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen pb-16">
        {children}
      </main>
      
      <Footer />
    </>
  );
};

export default BlogLayout;
