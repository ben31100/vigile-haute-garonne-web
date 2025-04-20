
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CityHero from '@/components/cities/CityHero';
import SpecificitesSection from '@/components/cities/SpecificitesSection';
import FaqSection from '@/components/cities/FaqSection';
import CtaSection from '@/components/cities/CtaSection';
import { Shield, MapPin, Calendar, Building, Users } from 'lucide-react';

const AlbiPage: React.FC = () => {
  const cityName = "Albi";
  const postalCode = "81000";
  const subtitle = "Services de sécurité et gardiennage professionnels à Albi";

  const specificitesItems = [
    {
      icon: MapPin,
      title: "Protection des zones résidentielles",
      description: `Surveillance des quartiers résidentiels dans toute la commune d'${cityName}`
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
      description: `Organisation d'événements sécurisés à ${cityName}`
    },
    {
      icon: Users,
      title: "Intervention rapide",
      description: "Équipe d'intervention disponible 24h/24 et 7j/7"
    }
  ];

  const faqItems = [
    {
      question: `Quels sont vos délais d'intervention à ${cityName} ?`,
      answer: `Nos équipes de sécurité sont disponibles 24h/24 et interviennent en moins de 30 minutes sur ${cityName} et sa périphérie.`
    },
    {
      question: `Proposez-vous des services de gardiennage ponctuel à ${cityName} ?`,
      answer: `Oui, nous proposons des services de gardiennage flexibles, adaptés à vos besoins ponctuels ou réguliers sur ${cityName}.`
    },
    {
      question: `Vos agents sont-ils formés aux spécificités d'${cityName} ?`,
      answer: `Tous nos agents sont qualifiés et formés spécifiquement pour intervenir sur ${cityName}, avec une connaissance approfondie du terrain.`
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Sécurité à {cityName} ({postalCode}) | LeVigile</title>
        <meta 
          name="description" 
          content={`Services professionnels de sécurité et gardiennage à ${cityName}. Protection 24h/24, agents qualifiés, intervention rapide. Devis gratuit au 05 54 54 64 28.`} 
        />
      </Helmet>

      <Header />
      
      <main className="flex-grow pt-24">
        <CityHero 
          cityName={cityName}
          subtitle={subtitle}
          backgroundImage="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Toulouse-hero.jpg"
        />

        <SpecificitesSection 
          items={specificitesItems}
          title={`Nos services de sécurité à ${cityName}`}
          subtitle={`Découvrez nos prestations de gardiennage et sécurité adaptées aux besoins spécifiques d'${cityName}`}
        />

        <FaqSection 
          items={faqItems}
          title={`Questions fréquentes sur nos services à ${cityName}`}
        />

        <CtaSection 
          title={`Besoin d'un service de sécurité à ${cityName} ?`}
          subtitle="Nos agents professionnels sont disponibles 24h/24 pour répondre à vos besoins spécifiques."
        />
      </main>

      <Footer />
    </div>
  );
};

export default AlbiPage;
