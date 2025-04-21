
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CityHero from '@/components/cities/CityHero';
import CtaSection from '@/components/cities/CtaSection';
import SpecificitesSection from '@/components/cities/SpecificitesSection';
import { Building, MapPin, Calendar, Users, Shield, Clock, Activity } from 'lucide-react';

const SaintOrensPage = () => {
  const cityName = "Saint-Orens-de-Gameville";
  const cityDescription = "Saint-Orens-de-Gameville, ville attractive au sud-est de Toulouse, est desservie par nos agents de sécurité pour tous types de prestations.";
  const postalCode = "31650";
  
  // Spécificités de la ville
  const specificites = [
    {
      icon: Building,
      title: "Gardiennage commercial renforcé",
      description: `Service spécialisé pour ${cityName}: gardiennage commercial renforcé`
    },
    {
      icon: Calendar,
      title: "Surveillance événementielle",
      description: `Service spécialisé pour ${cityName}: surveillance événementielle`
    },
    {
      icon: MapPin,
      title: "Protection de zones résidentielles",
      description: `Service spécialisé pour ${cityName}: protection de zones résidentielles`
    },
    {
      icon: Users,
      title: "Sécurité pour entreprises et bureaux",
      description: `Service spécialisé pour ${cityName}: sécurité pour entreprises et bureaux`
    },
    {
      icon: Shield,
      title: "Agents dédiés à Saint-Orens",
      description: `Service spécialisé pour ${cityName}: agents dédiés à Saint-Orens`
    }
  ];
  
  // Faits intéressants sur la sécurité dans la ville
  const faits = [
    {
      icon: MapPin,
      title: "Notre équipe intervient dans tous les quartiers: Centre, Catala, Cayras, Labouilhe",
      description: ""
    },
    {
      icon: Clock,
      title: "Service disponible 24h/24 et 7j/7",
      description: ""
    },
    {
      icon: Building,
      title: "Partenariats avec les commerces locaux",
      description: ""
    },
    {
      icon: Activity,
      title: "Agents formés aux spécificités du secteur sud-est toulousain",
      description: ""
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Sécurité à {cityName} - Services adaptés | LeVigile</title>
        <meta name="description" content={`Services de sécurité privée à ${cityName}. Gardiennage, rondes et protection par des agents certifiés pour particuliers et professionnels.`} />
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
                  LeVigile propose des services de sécurité privée adaptés aux besoins spécifiques de {cityName}. Notre équipe d'agents qualifiés intervient dans l'ensemble de la commune pour assurer la protection des biens et des personnes.
                </p>
                <p className="text-gray-700">
                  Notre connaissance approfondie du terrain et des enjeux sécuritaires à {cityName} nous permet d'offrir des prestations sur-mesure et efficaces.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4 text-levigile-blue">
                  Services disponibles à {cityName}
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-levigile-red mr-2">✓</span>
                    <span>Gardiennage de zones commerciales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-levigile-red mr-2">✓</span>
                    <span>Surveillance de résidences et copropriétés</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-levigile-red mr-2">✓</span>
                    <span>Sécurité des entreprises et bureaux</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-levigile-red mr-2">✓</span>
                    <span>Protection événementielle</span>
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
          items={[...specificites, ...faits]}
          title={`Pourquoi choisir LeVigile à ${cityName} ?`}
          subtitle="Notre expertise locale garantit une sécurité optimale pour vos biens et personnes"
        />
        
        <CtaSection 
          title={`Besoin d'un devis pour votre sécurité à ${cityName} ?`}
          subtitle="Nos conseillers sont à votre disposition pour étudier vos besoins et vous proposer une solution adaptée."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default SaintOrensPage;
