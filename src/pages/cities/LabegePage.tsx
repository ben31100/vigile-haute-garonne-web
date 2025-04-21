import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CityHero from '@/components/cities/CityHero';
import SpecificitesSection, { SpecificiteItem } from '@/components/cities/SpecificitesSection';
import CtaSection from '@/components/cities/CtaSection';
import { Shield, MapPin, Calendar, Building, Users } from 'lucide-react';

const LabegePage: React.FC = () => {
  const cityName = "Labège";
  const postalCode = "31670";

  const specificitesItems: SpecificiteItem[] = [
    {
      icon: MapPin,
      title: "Protection des zones d'activités",
      description: `Surveillance des zones commerciales et de l'Innopole de ${cityName}`
    },
    {
      icon: Building,
      title: "Sécurité des entreprises",
      description: "Protection adaptée pour les entreprises technologiques"
    },
    {
      icon: Shield,
      title: "Gardiennage professionnel",
      description: "Services de gardiennage pour entreprises et particuliers"
    },
    {
      icon: Calendar,
      title: "Sécurité événementielle",
      description: `Organisation d'événements sécurisés à ${cityName}`
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
        <title>Sécurité à {cityName} - Protection professionnelle | LeVigile</title>
        <meta name="description" content={`Services de sécurité à ${cityName}. Gardiennage, surveillance et protection adaptés aux besoins des professionnels et des particuliers.`} />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow pt-24">
        <CityHero 
          cityName={cityName}
          subtitle={`Services de sécurité privée professionnels à ${cityName} (${postalCode})`}
          backgroundImage="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Levigile%20securite.webp"
        />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl font-bold mb-4 text-levigile-blue">
                Agence de sécurité à {cityName}
              </h1>
              <p className="text-lg text-gray-700">
                Services de sécurité professionnels adaptés aux besoins spécifiques de {cityName}.
              </p>
            </div>
          </div>
        </section>
        
        <SpecificitesSection 
          items={specificitesItems}
          title={`Pourquoi choisir LeVigile à ${cityName} ?`}
          subtitle="Notre expertise locale au service de votre sécurité"
        />
        
        <CtaSection 
          title={`Besoin d'un devis pour votre sécurité à ${cityName} ?`}
          subtitle="Nos conseillers sont disponibles pour étudier vos besoins et vous proposer une solution adaptée."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default LabegePage;
