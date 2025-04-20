
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CityHero from '@/components/cities/CityHero';
import SpecificitesSection, { SpecificiteItem } from '@/components/cities/SpecificitesSection';
import CtaSection from '@/components/cities/CtaSection';
import FaqSection, { FaqItem } from '@/components/cities/FaqSection';
import { MapPin, Users, Building, Star, Activity } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';

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

  // FAQ items
  const faqItems: FaqItem[] = [
    {
      question: "Quels sont les services de sécurité proposés par LeVigile à Tournefeuille ?",
      answer: "LeVigile propose à Tournefeuille des services complets de sécurité privée incluant la surveillance résidentielle, la sécurité des commerces, la protection d'événements culturels et sportifs, la surveillance des espaces verts et la sécurité des établissements publics. Tous nos agents sont certifiés et formés pour intervenir efficacement à Tournefeuille."
    },
    {
      question: "Comment LeVigile sécurise-t-il les résidences à Tournefeuille ?",
      answer: "À Tournefeuille, LeVigile sécurise les résidences individuelles et les copropriétés par des rondes régulières, un système d'intervention rapide sur alarme, et des dispositifs de contrôle d'accès adaptés. Nos agents connaissent parfaitement les particularités des quartiers résidentiels de Tournefeuille pour une protection optimale."
    },
    {
      question: "Comment contacter LeVigile pour un devis de sécurité à Tournefeuille ?",
      answer: "Pour obtenir un devis gratuit et personnalisé pour vos besoins en sécurité à Tournefeuille, vous pouvez nous contacter au 05 54 54 64 28 ou par email à contact@levigile.fr. Notre équipe locale vous proposera rapidement une solution adaptée à votre situation spécifique."
    },
    {
      question: "LeVigile intervient-il pour la sécurité des événements au Phare de Tournefeuille ?",
      answer: "Oui, LeVigile dispose d'une expertise spécifique pour la sécurité des événements au Phare de Tournefeuille. Nos agents sont formés à la gestion des flux de spectateurs, au contrôle d'accès et à l'intervention rapide en cas d'incident lors de concerts, spectacles et autres manifestations."
    },
    {
      question: "Quelles solutions LeVigile propose-t-il pour les commerces de Tournefeuille ?",
      answer: "LeVigile propose aux commerces de Tournefeuille des solutions complètes incluant le gardiennage, la vidéosurveillance, les systèmes d'alarme avec intervention, la protection contre le vol à l'étalage et la sécurisation des livraisons. Nos dispositifs sont adaptés à chaque type de commerce, qu'il s'agisse de boutiques de centre-ville ou d'enseignes en zone commerciale."
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
        <title>Sécurité privée à Tournefeuille | LeVigile - Services de surveillance</title>
        <meta name="description" content="Services de sécurité privée à Tournefeuille : surveillance résidentielle, protection des commerces et sécurisation d'événements. Solutions de sécurité adaptées à votre contexte." />
        <link rel="canonical" href="https://www.levigile.fr/tournefeuille.html" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
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
          
          <FaqSection items={faqItems} title="Questions fréquentes sur nos services à Tournefeuille" />
          
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
