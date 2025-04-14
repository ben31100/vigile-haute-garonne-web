
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CityHero from '@/components/cities/CityHero';
import CtaSection from '@/components/cities/CtaSection';
import SpecificitesSection from '@/components/cities/SpecificitesSection';

const PlaisancePage = () => {
  const cityName = "Plaisance-du-Touch";
  const cityDescription = "Plaisance-du-Touch, commune au sud-ouest de Toulouse, bénéficie de notre expertise en sécurité privée pour les entreprises et les particuliers.";
  const postalCode = "31830";
  
  // Spécificités de la ville
  const specificites = [
    "Gardiennage résidentiel personnalisé",
    "Surveillance de zones commerciales",
    "Protection d'entreprises",
    "Sécurité événementielle sur-mesure",
    "Agents formés pour Plaisance-du-Touch"
  ];
  
  // Faits intéressants sur la sécurité dans la ville
  const faits = [
    "Notre équipe couvre tous les quartiers: Centre, Monestié, Saint-Nicolas, La Salvetat",
    "Interventions dans un rayon de 20 km autour de Plaisance-du-Touch",
    "Services disponibles 24h/24 et 7j/7",
    "Agents formés aux spécificités du secteur sud-ouest toulousain"
  ];
  
  const specificitesItems = specificites.map(item => ({
    title: item,
    description: `Service spécialisé pour ${cityName}: ${item.toLowerCase()}`
  }));
  
  const faitsItems = faits.map(item => ({
    title: item,
    description: ""
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Sécurité à {cityName} - Agents qualifiés | LeVigile</title>
        <meta name="description" content={`LeVigile assure votre sécurité à ${cityName}. Gardiennage, surveillance et protection par des agents professionnels disponibles 24h/24.`} />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow">
        <CityHero 
          cityName={cityName} 
          subtitle={`Services de sécurité privée professionnels à ${cityName} (${postalCode})`} 
          backgroundImage="/images/cities/default-hero.jpg"
        />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl font-bold mb-4 text-levigile-blue">
                Agence de sécurité à {cityName}
              </h1>
              <p className="text-lg text-gray-700">
                {cityDescription}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4 text-levigile-blue">
                  Notre expertise à {cityName}
                </h2>
                <p className="text-gray-700 mb-4">
                  LeVigile met à votre disposition des services de sécurité adaptés aux besoins spécifiques de {cityName}. Notre équipe d'agents qualifiés intervient dans toute la commune pour garantir la protection des biens et des personnes.
                </p>
                <p className="text-gray-700">
                  Notre connaissance approfondie du terrain et des enjeux sécuritaires de {cityName} nous permet d'offrir des prestations personnalisées et efficaces.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4 text-levigile-blue">
                  Services disponibles à {cityName}
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-levigile-red mr-2">✓</span>
                    <span>Gardiennage résidentiel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-levigile-red mr-2">✓</span>
                    <span>Surveillance de zones commerciales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-levigile-red mr-2">✓</span>
                    <span>Protection d'entreprises</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-levigile-red mr-2">✓</span>
                    <span>Sécurité événementielle</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-levigile-red mr-2">✓</span>
                    <span>Rondes de sécurité</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <SpecificitesSection 
          items={[...specificitesItems, ...faitsItems]}
          title={`Pourquoi choisir LeVigile à ${cityName} ?`}
          subtitle="Notre équipe locale garantit une sécurité optimale pour tous vos besoins"
        />
        
        <CtaSection 
          title={`Besoin d'un devis pour votre sécurité à ${cityName} ?`}
          subtitle="Nos experts sont à votre écoute pour vous proposer une solution de sécurité adaptée à vos besoins."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default PlaisancePage;
