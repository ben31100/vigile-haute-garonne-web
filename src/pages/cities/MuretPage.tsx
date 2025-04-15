
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CityHero from '@/components/cities/CityHero';
import SpecificitesSection, { SpecificiteItem } from '@/components/cities/SpecificitesSection';
import CtaSection from '@/components/cities/CtaSection';
import FaqSection, { FaqItem } from '@/components/cities/FaqSection';
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

  // FAQ items
  const faqItems: FaqItem[] = [
    {
      question: "Quels sont les services de sécurité proposés par LeVigile à Muret ?",
      answer: "LeVigile propose à Muret des services complets de sécurité privée incluant le gardiennage de sites commerciaux et industriels, la surveillance de chantiers, les rondes de sécurité, la protection d'événements locaux, l'intervention sur alarme et la sécurité résidentielle. Tous nos agents sont certifiés et formés spécifiquement pour intervenir dans la région de Muret."
    },
    {
      question: "Dans quels secteurs de Muret LeVigile intervient-il ?",
      answer: "LeVigile intervient dans tous les secteurs de Muret : centre-ville, zones commerciales, zones industrielles, quartiers résidentiels et communes limitrophes. Notre connaissance approfondie du territoire permet une intervention rapide et efficace dans toute l'agglomération muretaine."
    },
    {
      question: "Comment contacter LeVigile pour un devis de sécurité à Muret ?",
      answer: "Pour obtenir un devis gratuit et personnalisé pour vos besoins en sécurité à Muret, vous pouvez nous contacter au 05 54 54 64 28 ou par email à contact@levigile.fr. Notre équipe locale vous proposera rapidement une solution adaptée à vos besoins spécifiques."
    },
    {
      question: "Quel est le délai d'intervention de LeVigile à Muret en cas d'urgence ?",
      answer: "LeVigile dispose d'une équipe d'intervention disponible 24h/24 et 7j/7 pour Muret et ses environs. Notre temps d'intervention moyen est de 20 minutes dans l'ensemble de la zone. En cas d'urgence, contactez notre numéro dédié pour une intervention immédiate."
    },
    {
      question: "LeVigile peut-il assurer la sécurité des événements à Muret ?",
      answer: "Oui, LeVigile assure régulièrement la sécurité des événements à Muret, qu'il s'agisse de manifestations sportives, culturelles ou commerciales. Nos équipes sont expérimentées dans la gestion de la sécurité pour tout type d'événement et travaillent en coordination avec les autorités locales pour garantir une sécurité optimale."
    }
  ];

  // FAQ Schema pour Position 0
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Sécurité privée à Muret | LeVigile - Services de surveillance</title>
        <meta name="description" content="Services de sécurité privée à Muret : gardiennage, surveillance commerciale et industrielle, protection d'événements. Solutions adaptées aux entreprises et particuliers." />
        <link rel="canonical" href="https://www.levigile.fr/muret.html" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow pt-16">
          <CityHero 
            cityName="Muret" 
            subtitle="Services de sécurité pour la troisième ville de Haute-Garonne"
            backgroundImage="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//ronde-hero.jpg"
          />
          
          <SpecificitesSection items={specificites} />
          
          <FaqSection items={faqItems} title="Questions fréquentes sur nos services à Muret" />
          
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
