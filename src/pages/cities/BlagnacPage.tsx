import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CityHero from '@/components/cities/CityHero';
import SpecificitesSection, { SpecificiteItem } from '@/components/cities/SpecificitesSection';
import CtaSection from '@/components/cities/CtaSection';
import FaqSection from '@/components/cities/FaqSection';
import { MapPin, Users, Building, Star, Activity } from 'lucide-react';

const BlagnacPage: React.FC = () => {
  const specificites: SpecificiteItem[] = [
    {
      icon: MapPin,
      title: "Sécurité aéroportuaire",
      description: "Solutions de sécurité adaptées aux besoins spécifiques des entreprises situées à proximité de l'aéroport de Toulouse-Blagnac."
    },
    {
      icon: Building,
      title: "Protection des zones commerciales",
      description: "Surveillance spécifique pour le centre commercial de Blagnac et les galeries marchandes environnantes."
    },
    {
      icon: Users,
      title: "Sécurité des sites industriels",
      description: "Protection des sites industriels aéronautiques et des installations sensibles avec personnel qualifié et expérimenté."
    },
    {
      icon: Star,
      title: "Contrôle d'accès",
      description: "Solutions sur mesure pour la gestion et le contrôle des accès aux entreprises et zones sensibles."
    },
    {
      icon: Activity,
      title: "Vidéosurveillance",
      description: "Installation et gestion de systèmes de surveillance adaptés aux besoins spécifiques des entreprises de Blagnac."
    }
  ];

  // FAQ items for Blagnac
  const faqItems = [
    {
      question: "Quels sont les services de sécurité proposés par LeVigile à Blagnac ?",
      answer: "LeVigile propose à Blagnac des services complets de sécurité privée incluant le gardiennage aéroportuaire, la surveillance des zones commerciales, la sécurité des sites industriels aéronautiques, le contrôle d'accès et la vidéosurveillance. Nos agents sont spécialement formés pour les spécificités de Blagnac et ses infrastructures sensibles."
    },
    {
      question: "Comment contacter LeVigile pour un devis de sécurité à Blagnac ?",
      answer: "Pour obtenir un devis gratuit et personnalisé pour vos besoins en sécurité à Blagnac, contactez-nous au 05 54 54 64 28 ou par email à contact@levigile.fr. Notre équipe locale vous répondra sous 24h avec une proposition adaptée aux spécificités de votre site à Blagnac."
    },
    {
      question: "LeVigile intervient-il en urgence à Blagnac ?",
      answer: "Oui, LeVigile dispose d'une équipe d'intervention rapide disponible 24h/24 et 7j/7 à Blagnac et ses environs. Notre proximité avec l'aéroport nous permet d'intervenir très rapidement sur l'ensemble de la commune pour tout type de situation d'urgence."
    },
    {
      question: "Proposez-vous des services de sécurité spécifiques pour l'aéroport de Blagnac ?",
      answer: "Oui, LeVigile propose des services spécifiques pour les entreprises situées dans la zone aéroportuaire de Blagnac, avec des agents formés aux exigences particulières de ce secteur sensible. Nous assurons la sécurité des locaux, le contrôle d'accès et la protection des personnels conformément aux normes de sûreté aéroportuaire."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sécurité privée à Blagnac | LeVigile - Services de surveillance</title>
        <meta name="description" content="Services professionnels de sécurité privée à Blagnac : gardiennage, surveillance, contrôle d'accès. Protection pour zones commerciales, aéroport et sites industriels." />
        <link rel="canonical" href="https://levigile.fr/blagnac.html" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow pt-16">
          <CityHero 
            cityName="Blagnac" 
            subtitle="Services de sécurité adaptés à la zone aéroportuaire et industrielle"
            backgroundImage="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Levigile%20securite.webp"
          />
          
          <SpecificitesSection items={specificites} />
          
          <FaqSection 
            items={faqItems} 
            title="Questions fréquentes sur nos services à Blagnac"
          />
          
          <CtaSection 
            title="Une solution de sécurité à Blagnac ?" 
            subtitle="Nos experts en sécurité proposent des services spécialisés pour les sites industriels, zones commerciales et résidentielles de Blagnac."
          />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlagnacPage;
