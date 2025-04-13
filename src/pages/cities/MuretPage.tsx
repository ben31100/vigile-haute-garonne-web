
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CityHero from '@/components/cities/CityHero';
import SpecificitesSection, { SpecificiteItem } from '@/components/cities/SpecificitesSection';
import CtaSection from '@/components/cities/CtaSection';
import { MapPin, Users, Building, Star, Activity } from 'lucide-react';

const MuretPage: React.FC = () => {
  const specificites: SpecificiteItem[] = [
    {
      icon: Building,
      title: "Protection des zones commerciales",
      description: "Sécurisation des centres commerciaux et zones de Muret, notamment Portet-sur-Garonne, avec des équipes spécialisées."
    },
    {
      icon: MapPin,
      title: "Sécurité industrielle",
      description: "Protection des sites industriels et zones d'activités de Muret, avec personnel formé aux risques spécifiques."
    },
    {
      icon: Users,
      title: "Événementiel et manifestations",
      description: "Dispositifs de sécurité pour les événements locaux, notamment aux Allées Niel, au stade ou lors des festivités annuelles."
    },
    {
      icon: Star,
      title: "Surveillance de chantiers",
      description: "Protection des sites en construction contre le vol de matériaux et les dégradations, notamment dans les zones en développement."
    },
    {
      icon: Activity,
      title: "Gardiennage résidentiel",
      description: "Services adaptés aux résidences et copropriétés, avec contrôle d'accès et rondes de surveillance régulières."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sécurité privée à Muret | LeVigile - Services de surveillance</title>
        <meta name="description" content="Services de sécurité privée à Muret : gardiennage, surveillance commerciale et industrielle, protection d'événements. Solutions adaptées aux entreprises et particuliers." />
        <link rel="canonical" href="https://www.levigile.fr/muret.html" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow pt-16">
          <CityHero 
            cityName="Muret" 
            subtitle="Services de sécurité pour la troisième ville de Haute-Garonne"
            backgroundImage="https://images.unsplash.com/photo-1619170743049-2f988e1977c4?auto=format&fit=crop&w=1920"
          />
          
          <SpecificitesSection items={specificites} />
          
          <CtaSection 
            title="Besoin d'une solution de sécurité à Muret ?" 
            subtitle="Nos agents, disponibles 24h/24, assurent la protection de vos locaux professionnels, commerces et événements à Muret et ses environs."
          />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default MuretPage;
