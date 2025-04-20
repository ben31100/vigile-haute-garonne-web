
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OptimizedImage from '@/components/OptimizedImage';
import { preloadImages, loadDeferredResource } from '@/utils/optimizationUtils';

const GardiennagePage = () => {
  // Preload critical images on component mount
  useEffect(() => {
    // Précharger uniquement les images critiques (visibles sans scroll)
    preloadImages([
      "https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//gardiennage-hero.jpg"
    ], true);
    
    // Charger de manière différée les ressources non-critiques
    loadDeferredResource('style', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
  }, []);

  const handleTelegramClick = () => {
    window.open('https://t.me/levigile', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/33780817979', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Gardiennage | Levigile - Sécurité privée</title>
        <meta 
          name="description" 
          content="Services de gardiennage professionnels par Levigile. Sécurité et surveillance adaptées à vos besoins." 
        />
        {/* Directives de cache pour les navigateurs et CDN */}
        <meta httpEquiv="Cache-Control" content="max-age=86400" />
        <meta httpEquiv="Expires" content="86400" />
        {/* Préconnexion aux domaines externes */}
        <link 
          rel="preconnect" 
          href="https://dwugopridureefyyiyss.supabase.co"
          crossOrigin="anonymous"
        />
        <link 
          rel="dns-prefetch" 
          href="https://dwugopridureefyyiyss.supabase.co"
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-levigile-blue to-levigile-gray text-white py-28">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-4">Services de Gardiennage Professionnel</h1>
                <p className="text-xl mb-6">
                  Protection et surveillance adaptées à vos besoins spécifiques
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-levigile-red hover:bg-red-600">
                    <Phone className="mr-2 h-4 w-4" />
                    Demander un devis
                  </Button>
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                    <Mail className="mr-2 h-4 w-4" />
                    Nous contacter
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <OptimizedImage 
                  src="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Services%20de%20Gardiennage%20Professionnel%20levigile.webp" 
                  alt="Agent de sécurité Levigile en service" 
                  className="rounded-lg shadow-lg w-full max-w-[600px] object-cover"
                  width={600}
                  height={400}
                  priority={true}
                  format="webp"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Une sécurité sur mesure pour votre entreprise</h2>
              <p className="mb-4">
                Nos agents de sécurité qualifiés assurent la protection de vos locaux, de vos biens et de votre personnel. 
                Nous proposons des solutions adaptées à chaque secteur d'activité.
              </p>
              <p className="mb-4">
                Que vous ayez besoin d'une présence permanente ou ponctuelle, nos équipes sont formées pour répondre 
                efficacement à toutes les situations.
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Contrôle d'accès et filtrage</li>
                <li>Rondes de surveillance</li>
                <li>Prévention des risques</li>
                <li>Intervention sur alarme</li>
                <li>Gardiennage jour et nuit</li>
              </ul>
            </div>
            {/* Image removed as per user request */}
          </div>
        </section>

        {/* Services Details */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Nos prestations de gardiennage</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service cards - using map to reduce repetitive code */}
              {[
                {
                  title: "Gardiennage d'entreprise",
                  description: "Protection complète de vos locaux professionnels avec contrôle d'accès, surveillance des zones sensibles et gestion des incidents."
                },
                {
                  title: "Gardiennage de chantier",
                  description: "Sécurisation de vos chantiers contre le vol, le vandalisme et les intrusions, de jour comme de nuit, y compris les week-ends et jours fériés."
                },
                {
                  title: "Gardiennage d'entrepôt",
                  description: "Protection de vos stocks et marchandises avec contrôle des entrées/sorties et surveillance permanente de vos espaces de stockage."
                },
                {
                  title: "Gardiennage de commerce",
                  description: "Sécurisation de vos points de vente contre le vol à l'étalage et les incivilités, avec une présence discrète mais efficace."
                },
                {
                  title: "Gardiennage temporaire",
                  description: "Solutions ponctuelles pour vos besoins spécifiques : fermetures annuelles, travaux, absences prolongées ou situations exceptionnelles."
                },
                {
                  title: "Gardiennage résidentiel",
                  description: "Protection de résidences collectives, lotissements ou propriétés privées avec contrôle des accès et surveillance des parties communes."
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Pourquoi choisir Levigile ?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Features - using map to reduce repetitive code */}
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Agents qualifiés",
                description: "Personnel formé et certifié, régulièrement évalué et encadré"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Disponibilité 24/7",
                description: "Service continu, y compris les week-ends et jours fériés"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
                title: "Reporting détaillé",
                description: "Comptes rendus réguliers et transparence totale"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                ),
                title: "Réactivité",
                description: "Intervention rapide et efficace en cas d'incident"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-4">
                <div className="bg-levigile-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Button 
                onClick={handleTelegramClick}
                className="bg-[#0088cc] hover:bg-[#0077b5] text-white flex-1 flex items-center justify-center"
              >
                <Send className="mr-2 h-5 w-5" />
                Nous contacter sur Telegram
              </Button>
              
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-[#25D366] hover:bg-[#128C7E] text-white flex-1 flex items-center justify-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Nous contacter sur WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default GardiennagePage;
