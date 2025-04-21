import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CityHero from '@/components/cities/CityHero';
import SpecificitesSection, { SpecificiteItem } from '@/components/cities/SpecificitesSection';
import CtaSection from '@/components/cities/CtaSection';
import FaqSection from '@/components/cities/FaqSection';
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
  
  // FAQ items for Colomiers
  const faqItems = [
    {
      question: "Quels sont les services de sécurité proposés par LeVigile à Colomiers ?",
      answer: "LeVigile propose à Colomiers des services complets de sécurité privée incluant la protection des zones d'activités (Perget, En Jacca), la sécurité des sites industriels aéronautiques, le gardiennage d'immeubles, la sécurité événementielle et les rondes de surveillance. Nos agents sont formés spécifiquement pour intervenir sur Colomiers et ses spécificités locales."
    },
    {
      question: "Comment contacter LeVigile pour un devis de sécurité à Colomiers ?",
      answer: "Pour obtenir un devis gratuit et personnalisé pour vos besoins en sécurité à Colomiers, contactez-nous au 05 54 54 64 28 ou par email à contact@levigile.fr. Notre équipe locale vous répondra sous 24h avec une proposition adaptée à votre situation."
    },
    {
      question: "Proposez-vous des services adaptés aux sous-traitants aéronautiques de Colomiers ?",
      answer: "Oui, LeVigile propose des solutions spécifiques pour les sous-traitants aéronautiques implantés à Colomiers, comprenant la protection des installations sensibles, le contrôle d'accès, la surveillance des secrets industriels et la sécurisation des chaînes de production."
    },
    {
      question: "Assurez-vous la sécurité pour les événements au Hall Comminges ?",
      answer: "Oui, LeVigile dispose d'une équipe expérimentée pour la sécurité événementielle à Colomiers, notamment au Hall Comminges. Nos agents assurent le contrôle d'accès, la gestion des flux de visiteurs et la surveillance générale pour tous types d'événements, salons et manifestations culturelles."
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
            backgroundImage="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Levigile%20securite.webp"
          />
          
          <SpecificitesSection items={specificites} />
          
          <FaqSection 
            items={faqItems} 
            title="Questions fréquentes sur nos services à Colomiers"
          />
          
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
