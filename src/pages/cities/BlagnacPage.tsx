
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CityHero from '@/components/cities/CityHero';
import SpecificitesSection, { SpecificiteItem } from '@/components/cities/SpecificitesSection';
import CtaSection from '@/components/cities/CtaSection';
import { MapPin, Users, Building, Star, Activity } from 'lucide-react';

const BlagnacPage: React.FC = () => {
  const specificites: SpecificiteItem[] = [
    {
      icon: MapPin,
      title: "Sécurité aéroportuaire",
      description: "Solutions de sécurité adaptées aux besoins spécifiques des entreprises situées à proximité de l'aéroport de Toulouse-Blagnac."
    },
    {
      icon: Building,
      title: "Protection des zones commerciales",
      description: "Surveillance spécifique pour le centre commercial de Blagnac et les galeries marchandes environnantes."
    },
    {
      icon: Users,
      title: "Sécurité des sites industriels",
      description: "Protection des sites industriels aéronautiques et des installations sensibles avec personnel qualifié et expérimenté."
    },
    {
      icon: Star,
      title: "Contrôle d'accès",
      description: "Solutions sur mesure pour la gestion et le contrôle des accès aux entreprises et zones sensibles."
    },
    {
      icon: Activity,
      title: "Vidéosurveillance",
      description: "Installation et gestion de systèmes de surveillance adaptés aux besoins spécifiques des entreprises de Blagnac."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sécurité privée à Blagnac | LeVigile - Services de surveillance</title>
        <meta name="description" content="Services professionnels de sécurité privée à Blagnac : gardiennage, surveillance, contrôle d'accès. Protection pour zones commerciales, aéroport et sites industriels." />
        <link rel="canonical" href="https://levigile.fr/blagnac.html" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow pt-16">
          <CityHero 
            cityName="Blagnac" 
            subtitle="Services de sécurité adaptés à la zone aéroportuaire et industrielle"
            backgroundImage="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//gardiennage-hero.jpg"
          />
          
          <SpecificitesSection items={specificites} />
          
          <CtaSection 
            title="Une solution de sécurité à Blagnac ?" 
            subtitle="Nos experts en sécurité proposent des services spécialisés pour les sites industriels, zones commerciales et résidentielles de Blagnac."
          />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlagnacPage;
