
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CityHero from '@/components/cities/CityHero';
import SpecificitesSection, { SpecificiteItem } from '@/components/cities/SpecificitesSection';
import CtaSection from '@/components/cities/CtaSection';
import { MapPin, Users, Building, Star, Activity } from 'lucide-react';

const TournefeuilePage: React.FC = () => {
  const specificites: SpecificiteItem[] = [
    {
      icon: MapPin,
      title: "Surveillance résidentielle",
      description: "Protection adaptée aux quartiers résidentiels de Tournefeuille, avec rondes régulières et interventions sur alarme."
    },
    {
      icon: Building,
      title: "Sécurité des commerces",
      description: "Solutions spécifiques pour les commerces et le centre commercial de Tournefeuille, incluant la prévention contre le vol."
    },
    {
      icon: Users,
      title: "Sécurité événementielle",
      description: "Dispositifs de sécurité pour les événements au Phare, à l'Escale, et lors des nombreux festivals et manifestations culturelles."
    },
    {
      icon: Star,
      title: "Protection des espaces verts",
      description: "Surveillance des parcs et espaces de loisirs, particulièrement pendant la période estivale autour du lac de La Ramée."
    },
    {
      icon: Activity,
      title: "Sécurité des établissements publics",
      description: "Protection des écoles, médiathèque et infrastructures sportives avec des agents formés aux spécificités des ERP."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sécurité privée à Tournefeuille | LeVigile - Services de surveillance</title>
        <meta name="description" content="Services de sécurité privée à Tournefeuille : surveillance résidentielle, protection des commerces et sécurisation d'événements. Solutions de sécurité adaptées à votre contexte." />
        <link rel="canonical" href="https://www.levigile.fr/tournefeuille.html" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow pt-16">
          <CityHero 
            cityName="Tournefeuille" 
            subtitle="Sécurité adaptée pour cette ville résidentielle de l'ouest toulousain"
            backgroundImage="evenement-hero.jpg"
          />
          
          <SpecificitesSection items={specificites} />
          
          <CtaSection 
            title="Besoin d'un service de sécurité à Tournefeuille ?" 
            subtitle="Nos agents qualifiés assurent la protection de vos biens et de vos proches à Tournefeuille, avec des solutions adaptées à chaque situation."
          />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default TournefeuilePage;
