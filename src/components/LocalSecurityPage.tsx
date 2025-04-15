import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HeroSection from './local-security/HeroSection';
import MainContent from './local-security/MainContent';
import Sidebar from './local-security/Sidebar';
import CityNotFound from './local-security/CityNotFound';
import SeoElements, { FaqItem } from './local-security/SeoElements';
import FaqSection from './local-security/FaqSection';
import CtaSection from './cities/CtaSection';
import cities from '../data/cities.json';

const LocalSecurityPage: React.FC = () => {
  const { cityId } = useParams<{ cityId: string }>();
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();
  
  // Find the city data
  const city = cities.find(c => c.id === cityId);
  
  // Generate FAQ items for this city
  const generateFaqItems = (cityName: string, postalCode: string): FaqItem[] => {
    return [
      {
        question: `Quels sont les services de sécurité proposés par LeVigile à ${cityName} ?`,
        answer: `LeVigile propose à ${cityName} (${postalCode}) des services complets de sécurité privée incluant le gardiennage, la surveillance de sites, les rondes de sécurité, la protection d'événements, l'intervention sur alarme et la sécurité incendie. Tous nos agents sont certifiés et formés spécifiquement pour intervenir sur ${cityName} et ses environs.`
      },
      {
        question: `Comment contacter LeVigile pour un devis de sécurité à ${cityName} ?`,
        answer: `Pour obtenir un devis gratuit et personnalisé pour vos besoins en sécurité à ${cityName}, vous pouvez nous contacter au 05 54 54 64 28 ou par email à contact@levigile.fr. Notre équipe locale vous répondra sous 24h avec une proposition adaptée à votre situation spécifique.`
      },
      {
        question: `LeVigile intervient-il en urgence à ${cityName} ?`,
        answer: `Oui, LeVigile dispose d'une équipe d'intervention rapide disponible 24h/24 et 7j/7 à ${cityName} et dans toute la région. En cas d'urgence, contactez notre numéro dédié au 07 80 81 79 79 pour une intervention immédiate de nos agents de sécurité.`
      },
      {
        question: `Quels quartiers de ${cityName} sont couverts par les services de LeVigile ?`,
        answer: `LeVigile couvre l'intégralité des quartiers de ${cityName} (${postalCode}) ainsi que les communes environnantes. Nos agents connaissent parfaitement le terrain et sont formés aux spécificités locales pour garantir une sécurité optimale sur l'ensemble du territoire.`
      },
      {
        question: `Quels types d'établissements peuvent bénéficier des services de LeVigile à ${cityName} ?`,
        answer: `À ${cityName}, LeVigile sécurise tous types d'établissements : commerces, entreprises, sites industriels, résidences, copropriétés, chantiers, établissements publics et événements. Chaque client bénéficie d'une solution sur mesure adaptée à ses besoins spécifiques et aux particularités de ${cityName}.`
      }
    ];
  };
  
  // Scroll to top on page load or route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoaded(true);
  }, [cityId, location.pathname]);
  
  if (!loaded) {
    return <div>Chargement...</div>;
  }
  
  // If city not found, display error
  if (!city) {
    return <CityNotFound />;
  }
  
  // Generate title and description for SEO
  const metaTitle = `Sécurité à ${city.name} (${city.postalCode}) | LeVigile - Agents qualifiés 24/7`;
  const metaDescription = `Services de sécurité privée à ${city.name}. Gardiennage, surveillance et protection par des agents professionnels disponibles 24h/24. Devis gratuit au 05 54 54 64 28.`;
  
  // Generate FAQ items
  const faqItems = generateFaqItems(city.name, city.postalCode);

  return (
    <div className="flex flex-col min-h-screen">
      <SeoElements 
        cityName={city.name}
        cityId={city.id}
        postalCode={city.postalCode}
        metaTitle={metaTitle}
        metaDescription={metaDescription}
      />
      
      <Header />
      
      <main className="flex-grow">
        <HeroSection 
          cityName={city.name} 
          postalCode={city.postalCode} 
        />
        
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <MainContent 
                cityName={city.name}
                neighborhoods={city.neighborhoods}
                nearbyAreas={city.nearbyAreas}
                specificServices={city.specificServices}
              />
            </div>
            
            <div className="md:w-1/3">
              <Sidebar cityName={city.name} />
            </div>
          </div>
        </div>
        
        <FaqSection faqItems={faqItems} cityName={city.name} />
        
        <CtaSection 
          title={`Besoin d'un service de sécurité à ${city.name} ?`}
          subtitle="Nos agents professionnels sont disponibles 24h/24 pour répondre à vos besoins spécifiques."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default LocalSecurityPage;
