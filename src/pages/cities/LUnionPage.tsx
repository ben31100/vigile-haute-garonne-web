
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CityHero from '@/components/cities/CityHero';
import CtaSection from '@/components/cities/CtaSection';
import SpecificitesSection from '@/components/cities/SpecificitesSection';
import { Building, MapPin, Users, Shield, Clock, Activity, Star } from 'lucide-react';

const LUnionPage = () => {
  const cityName = "L'Union";
  const cityDescription = "L'Union, commune au nord-est de Toulouse, bénéficie de nos services de sécurité adaptés aux besoins locaux.";
  const postalCode = "31240";
  
  // Spécificités de la ville
  const specificites = [
    {
      icon: Building,
      title: "Gardiennage d'entreprises 24/7",
      description: `Service spécialisé pour ${cityName}: gardiennage d'entreprises 24/7`
    },
    {
      icon: Shield,
      title: "Rondes de surveillance adaptées",
      description: `Service spécialisé pour ${cityName}: rondes de surveillance adaptées`
    },
    {
      icon: MapPin,
      title: "Protection de zones résidentielles",
      description: `Service spécialisé pour ${cityName}: protection de zones résidentielles`
    },
    {
      icon: Users,
      title: "Sécurité pour commerces et bureaux",
      description: `Service spécialisé pour ${cityName}: sécurité pour commerces et bureaux`
    },
    {
      icon: Star,
      title: "Agents certifiés connaissant L'Union",
      description: `Service spécialisé pour ${cityName}: agents certifiés connaissant L'Union`
    }
  ];
  
  // Faits intéressants sur la sécurité dans la ville
  const faits = [
    {
      icon: MapPin,
      title: "Notre agence couvre tous les quartiers: Centre, Somabé, Belbèze, Cornaudric",
      description: ""
    },
    {
      icon: Activity,
      title: "Interventions dans un rayon de 20 km autour de L'Union",
      description: ""
    },
    {
      icon: Building,
      title: "Partenariats avec les entreprises locales",
      description: ""
    },
    {
      icon: Clock,
      title: "Agents formés aux spécificités du secteur nord-est toulousain",
      description: ""
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Sécurité à {cityName} - Protection professionnelle | LeVigile</title>
        <meta name="description" content={`LeVigile, votre partenaire sécurité à ${cityName}. Agents qualifiés pour la surveillance, le gardiennage et la protection de vos biens 24h/24.`} />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow">
        <CityHero 
          cityName={cityName} 
          subtitle={`Services de sécurité privée professionnels à ${cityName} (${postalCode})`} 
          backgroundImage="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Levigile%20securite.webp"
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
                  LeVigile propose des services de sécurité adaptés aux besoins spécifiques de {cityName}. Notre équipe d'agents qualifiés intervient dans toute la commune pour assurer la protection des biens et des personnes.
                </p>
                <p className="text-gray-700">
                  Nous connaissons parfaitement le terrain et les enjeux sécuritaires de {cityName}, ce qui nous permet d'offrir des prestations sur-mesure et efficaces.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4 text-levigile-blue">
                  Services disponibles à {cityName}
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-levigile-red mr-2">✓</span>
                    <span>Gardiennage de sites industriels et commerciaux</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-levigile-red mr-2">✓</span>
                    <span>Surveillance d'immeubles résidentiels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-levigile-red mr-2">✓</span>
                    <span>Rondes de sécurité</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-levigile-red mr-2">✓</span>
                    <span>Protection événementielle</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-levigile-red mr-2">✓</span>
                    <span>Intervention sur alarme</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <SpecificitesSection 
          items={[...specificites, ...faits]}
          title={`Pourquoi choisir LeVigile à ${cityName} ?`}
          subtitle="Nous garantissons une sécurité optimale grâce à notre expertise locale"
        />
        
        <CtaSection 
          title={`Besoin d'un devis pour votre sécurité à ${cityName} ?`}
          subtitle="Nos conseillers sont disponibles pour étudier vos besoins et vous proposer une solution adaptée."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default LUnionPage;
