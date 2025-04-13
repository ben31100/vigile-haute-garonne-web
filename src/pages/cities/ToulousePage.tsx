
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CityHero from '@/components/cities/CityHero';
import SpecificitesSection, { SpecificiteItem } from '@/components/cities/SpecificitesSection';
import CtaSection from '@/components/cities/CtaSection';
import { MapPin, Users, Building, Star, Activity } from 'lucide-react';

const ToulousePage: React.FC = () => {
  const specificites: SpecificiteItem[] = [
    {
      icon: MapPin,
      title: "Surveillance de sites sensibles",
      description: "Protection renforcée des zones à haute valeur dans la métropole toulousaine, incluant les sites industriels et technologiques."
    },
    {
      icon: Users,
      title: "Sécurité événementielle",
      description: "Services adaptés aux grands événements de Toulouse : festivals, matchs au Stadium, congrès et salons professionnels."
    },
    {
      icon: Building,
      title: "Protection des commerces",
      description: "Solutions spécialisées pour les boutiques et centres commerciaux du centre-ville et des zones commerciales périphériques."
    },
    {
      icon: Star,
      title: "Rondes de sécurité",
      description: "Patrouilles régulières dans les quartiers résidentiels et zones d'activités pour prévenir les intrusions et actes malveillants."
    },
    {
      icon: Activity,
      title: "Intervention sur alarme",
      description: "Équipe d'intervention rapide disponible 24h/24 sur l'ensemble de l'agglomération toulousaine."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sécurité privée à Toulouse | LeVigile - Services de surveillance</title>
        <meta name="description" content="Services de sécurité privée à Toulouse : gardiennage, surveillance, rondes de sécurité. Protection pour commerces, entreprises et événements dans la ville rose." />
        <link rel="canonical" href="https://www.levigile.fr/toulouse.html" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow pt-16">
          <CityHero 
            cityName="Toulouse" 
            subtitle="Services de sécurité sur mesure pour la ville rose"
            backgroundImage="/lovable-uploads/77981cbb-3233-4df4-af0e-f571db93e92d.png"
          />
          
          <SpecificitesSection items={specificites} />
          
          <CtaSection 
            title="Besoin d'un service de sécurité à Toulouse ?" 
            subtitle="Nos agents spécialement formés sont disponibles 24h/24 pour répondre à vos besoins spécifiques dans toute l'agglomération toulousaine."
          />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ToulousePage;
