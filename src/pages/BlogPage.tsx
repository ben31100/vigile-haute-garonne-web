
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/header/Header';
import Footer from '@/components/Footer';
import BlogArticle from '@/components/BlogArticle';

const BlogPage: React.FC = () => {
  // Example blog list
  const blogPosts = [
    {
      title: "Les meilleures pratiques de sécurité pour les entreprises en 2025",
      subtitle: "Guide complet pour optimiser votre dispositif de sécurité",
      author: "Thomas Dupont",
      date: "2025-03-15",
      readTime: "8",
      featuredImage: "https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//logo%20levigile%20securite.png",
      slug: 'pratiques-securite-2025',
      excerpt: "Découvrez comment moderniser votre stratégie de sécurité et protéger efficacement votre entreprise."
    },
    // Add more blog posts here
  ];

  return (
    <>
      <Helmet>
        <title>Blog LeVigile - Articles et conseils en sécurité</title>
        <meta name="description" content="Retrouvez nos articles experts sur la sécurité privée, les conseils de prévention et les tendances du secteur." />
      </Helmet>
      <Header />
      <div className="container mx-auto px-4 py-24 min-h-screen">
        <h1 className="text-4xl font-bold text-levigile-dark mb-8">Notre Blog</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={post.featuredImage} 
                alt={post.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-levigile-dark mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{new Date(post.date).toLocaleDateString('fr-FR')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
