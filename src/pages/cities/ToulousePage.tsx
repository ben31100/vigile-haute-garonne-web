
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CityHero from '@/components/cities/CityHero';
import SpecificitesSection, { SpecificiteItem } from '@/components/cities/SpecificitesSection';
import CtaSection from '@/components/cities/CtaSection';
import FaqSection, { FaqItem } from '@/components/cities/FaqSection';
import { MapPin, Users, Building, Star, Activity } from 'lucide-react';

const ToulousePage: React.FC = () => {
  const specificites: SpecificiteItem[] = [{
    icon: MapPin,
    title: "Surveillance de sites sensibles",
    description: "Protection renforcée des zones à haute valeur dans la métropole toulousaine, incluant les sites industriels et technologiques."
  }, {
    icon: Users,
    title: "Sécurité événementielle",
    description: "Services adaptés aux grands événements de Toulouse : festivals, matchs au Stadium, congrès et salons professionnels."
  }, {
    icon: Building,
    title: "Protection des commerces",
    description: "Solutions spécialisées pour les boutiques et centres commerciaux du centre-ville et des zones commerciales périphériques."
  }, {
    icon: Star,
    title: "Rondes de sécurité",
    description: "Patrouilles régulières dans les quartiers résidentiels et zones d'activités pour prévenir les intrusions et actes malveillants."
  }, {
    icon: Activity,
    title: "Intervention sur alarme",
    description: "Équipe d'intervention rapide disponible 24h/24 sur l'ensemble de l'agglomération toulousaine."
  }];

  // FAQ items
  const faqItems: FaqItem[] = [
    {
      question: "Quels sont les services de sécurité proposés par LeVigile à Toulouse ?",
      answer: "LeVigile propose à Toulouse des services complets de sécurité privée incluant le gardiennage, la surveillance de sites sensibles, les rondes de sécurité dans tous les quartiers, la protection d'événements (festivals, matchs au Stadium, congrès), l'intervention sur alarme 24h/24 et la sécurité incendie. Tous nos agents sont certifiés et formés spécifiquement pour intervenir dans la métropole toulousaine."
    },
    {
      question: "Dans quels quartiers de Toulouse LeVigile intervient-il ?",
      answer: "LeVigile intervient dans tous les quartiers de Toulouse : centre-ville, Capitole, Saint-Cyprien, Les Chalets, Compans-Caffarelli, Arnaud-Bernard, Saint-Michel, Le Mirail, Rangueil, La Côte Pavée, Jolimont, Borderouge, Purpan, Saint-Simon, Croix-Daurade et l'ensemble des zones d'activités périphériques. Notre connaissance approfondie de la ville permet une intervention rapide et efficace."
    },
    {
      question: "Comment contacter LeVigile pour un devis de sécurité à Toulouse ?",
      answer: "Pour obtenir un devis gratuit et personnalisé pour vos besoins en sécurité à Toulouse, vous pouvez nous contacter au 05 54 54 64 28 ou par email à contact@levigile.fr. Notre agence toulousaine située au 8 Place Roger Salengro vous accueille également du lundi au vendredi de 9h à 18h pour étudier vos besoins spécifiques."
    },
    {
      question: "Quel est le délai d'intervention de LeVigile à Toulouse en cas d'urgence ?",
      answer: "LeVigile dispose d'une équipe d'intervention rapide basée à Toulouse, disponible 24h/24 et 7j/7. Notre temps d'intervention moyen est de 15 minutes dans l'agglomération toulousaine. En cas d'urgence, contactez notre numéro dédié au 07 80 81 79 79 pour une intervention immédiate de nos agents de sécurité."
    },
    {
      question: "LeVigile peut-il assurer la sécurité des grands événements à Toulouse ?",
      answer: "Oui, LeVigile assure régulièrement la sécurité des grands événements toulousains. Nos équipes sont expérimentées dans la gestion de la sécurité pour les festivals, matchs sportifs, concerts, salons professionnels et événements culturels. Nous coordonnons notre action avec les autorités locales pour garantir une sécurité optimale à tous les participants."
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
        <title>Sécurité privée à Toulouse | LeVigile - Services de surveillance</title>
        <meta name="description" content="Services de sécurité privée à Toulouse : gardiennage, surveillance, rondes de sécurité. Protection pour commerces, entreprises et événements dans la ville rose." />
        <link rel="canonical" href="https://www.levigile.fr/toulouse.html" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <div className="flex flex-col min-h-screen bg-[#020202]/[0.29]">
        <Header />
        
        <main className="flex-grow pt-16">
          <CityHero 
            cityName="Toulouse" 
            subtitle="Services de sécurité sur mesure pour la ville rose" 
            backgroundImage="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Levigile%20securite.webp"
          />
          
          <SpecificitesSection items={specificites} />
          
          <FaqSection items={faqItems} title="Questions fréquentes sur nos services à Toulouse" />
          
          <CtaSection 
            title="Besoin d'un service de sécurité à Toulouse ?" 
            subtitle="Nos agents spécialement formés sont disponibles 24h/24 pour répondre à vos besoins spécifiques dans toute l'agglomération toulousaine." 
          />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ToulousePage;
