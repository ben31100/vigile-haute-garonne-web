import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CityHero from '@/components/cities/CityHero';
import SpecificitesSection, { SpecificiteItem } from '@/components/cities/SpecificitesSection';
import CtaSection from '@/components/cities/CtaSection';
import { Shield, MapPin, Calendar, Building, Users } from 'lucide-react';

const PyreneesOrientalesPage: React.FC = () => {
  const cityName = "Pyrénées-Orientales";
  const postalCode = "66000";

  const specificitesItems: SpecificiteItem[] = [
    {
      icon: MapPin,
      title: "Protection des zones résidentielles",
      description: `Surveillance des quartiers résidentiels dans tout le département des ${cityName}`
    },
    {
      icon: Building,
      title: "Sécurité des commerces",
      description: "Protection adaptée pour les commerces et zones d'activité"
    },
    {
      icon: Shield,
      title: "Gardiennage professionnel",
      description: "Services de gardiennage pour entreprises et particuliers"
    },
    {
      icon: Calendar,
      title: "Sécurité événementielle",
      description: `Organisation d'événements sécurisés dans les ${cityName}`
    },
    {
      icon: Users,
      title: "Intervention rapide",
      description: "Équipe d'intervention disponible 24h/24 et 7j/7"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Sécurité dans les {cityName} - Protection professionnelle | LeVigile</title>
        <meta name="description" content={`Services de sécurité dans les ${cityName}. Protection et surveillance adaptées aux besoins des professionnels et particuliers.`} />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow pt-24">
        <CityHero 
          cityName={cityName}
          subtitle={`Services de sécurité privée professionnels dans les ${cityName} (${postalCode})`}
          backgroundImage="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Levigile%20securite.webp"
        />
        
        <SpecificitesSection 
          items={specificitesItems}
          title={`Pourquoi choisir LeVigile dans les ${cityName} ?`}
          subtitle="Notre expertise locale au service de votre sécurité"
        />
        
        <CtaSection 
          title={`Besoin d'un devis pour votre sécurité dans les ${cityName} ?`}
          subtitle="Nos conseillers sont disponibles pour étudier vos besoins et vous proposer une solution adaptée."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default PyreneesOrientalesPage;
