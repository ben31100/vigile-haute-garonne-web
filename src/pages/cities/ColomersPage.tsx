
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CityHero from '@/components/cities/CityHero';
import SpecificitesSection, { SpecificiteItem } from '@/components/cities/SpecificitesSection';
import CtaSection from '@/components/cities/CtaSection';
import { MapPin, Users, Building, Star, Activity } from 'lucide-react';

const ColomersPage: React.FC = () => {
  const specificites: SpecificiteItem[] = [
    {
      icon: Building,
      title: "Protection des zones d'activités",
      description: "Sécurisation des entreprises et commerces dans les différentes zones d'activités de Colomiers, notamment Perget et En Jacca."
    },
    {
      icon: MapPin,
      title: "Sécurité des sites industriels",
      description: "Protection adaptée pour les nombreux sites industriels et sous-traitants de l'aéronautique implantés à Colomiers."
    },
    {
      icon: Users,
      title: "Gardiennage d'immeubles",
      description: "Services de gardiennage pour les résidences et immeubles de bureaux, assurant la tranquillité des occupants."
    },
    {
      icon: Activity,
      title: "Sécurité événementielle",
      description: "Dispositifs de sécurité pour les événements au Hall Comminges, à l'Espace Nautique Jean Vauchère et autres lieux publics."
    },
    {
      icon: Star,
      title: "Rondes de surveillance",
      description: "Patrouilles régulières dans les zones résidentielles et commerciales pour prévenir les actes de malveillance."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sécurité privée à Colomiers | LeVigile - Services de surveillance</title>
        <meta name="description" content="Services de sécurité privée à Colomiers : gardiennage, surveillance, protection des zones industrielles et commerciales. Solutions adaptées aux entreprises et particuliers." />
        <link rel="canonical" href="https://www.levigile.fr/colomiers.html" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow pt-16">
          <CityHero 
            cityName="Colomiers" 
            subtitle="Protection sur mesure pour la deuxième ville de Haute-Garonne"
            backgroundImage="https://images.unsplash.com/photo-1571866651698-9fca013a7cda?auto=format&fit=crop&w=1920"
          />
          
          <SpecificitesSection items={specificites} />
          
          <CtaSection 
            title="Besoin de sécurité à Colomiers ?" 
            subtitle="Nos équipes expérimentées sont à votre service pour sécuriser vos locaux professionnels, résidences et événements à Colomiers."
          />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ColomersPage;
