
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CityHero from '@/components/cities/CityHero';
import SpecificitesSection from '@/components/cities/SpecificitesSection';
import FaqSection from '@/components/cities/FaqSection';
import CtaSection from '@/components/cities/CtaSection';
import { Shield, Clock, Map } from 'lucide-react';

const MontaubanPage: React.FC = () => {
  const cityName = "Montauban";
  const subtitle = "Services de sécurité et gardiennage professionnels à Montauban";

  const services = [
    "Surveillance de sites industriels et commerciaux",
    "Protection des zones d'activités et entreprises",
    "Sécurité des événements culturels et sportifs",
    "Gardiennage de chantiers et entrepôts",
    "Sécurité des commerces et centres commerciaux",
    "Protection de biens et de personnes"
  ];

  const specificites = [
    {
      icon: Shield,
      title: "Protection sur mesure",
      description: "Solutions adaptées aux besoins spécifiques de chaque client à Montauban"
    },
    {
      icon: Clock,
      title: "Réactivité maximale",
      description: "Intervention rapide 24h/24 et 7j/7 dans tout Montauban et ses environs"
    },
    {
      icon: Map,
      title: "Expertise locale",
      description: "Connaissance approfondie du territoire montalbanais et de ses enjeux sécuritaires"
    }
  ];

  const faqItems = [
    {
      question: "Quels sont vos délais d'intervention à Montauban ?",
      answer: "Nos équipes de sécurité sont disponibles 24h/24 et interviennent en moins de 30 minutes sur Montauban et sa périphérie."
    },
    {
      question: "Proposez-vous des services de gardiennage ponctuel à Montauban ?",
      answer: "Oui, nous proposons des services de gardiennage flexibles, adaptés à vos besoins ponctuels ou réguliers sur Montauban."
    },
    {
      question: "Vos agents sont-ils formés aux spécificités de Montauban ?",
      answer: "Tous nos agents sont qualifiés et formés spécifiquement pour intervenir sur Montauban, avec une connaissance approfondie du terrain."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sécurité et Gardiennage à Montauban (82000) | LeVigile</title>
        <meta 
          name="description" 
          content="Services professionnels de sécurité et gardiennage à Montauban. Protection 24h/24, agents qualifiés, intervention rapide. Devis gratuit au 05 54 54 64 28." 
        />
      </Helmet>

      <Header />
      
      <main>
        <CityHero 
          cityName={cityName}
          subtitle={subtitle}
          backgroundImage="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images/cities/montauban-hero.jpg"
        />

        <SpecificitesSection 
          items={specificites}
          title={`Nos services de sécurité à ${cityName}`}
          subtitle={`Découvrez nos prestations de gardiennage et sécurité adaptées aux besoins spécifiques de ${cityName}`}
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
    </>
  );
};

export default MontaubanPage;
