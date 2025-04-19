
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CityHero from '@/components/cities/CityHero';
import CtaSection from '@/components/cities/CtaSection';
import SpecificitesSection from '@/components/cities/SpecificitesSection';
import { Building, MapPin, Users, Shield, Clock, Activity, Star } from 'lucide-react';

const CastanetTolosanPage = () => {
  const cityName = "Castanet-Tolosan";
  const cityDescription = "Castanet-Tolosan, commune dynamique au sud-est de Toulouse, bénéficie de nos services de sécurité personnalisés.";
  const postalCode = "31320";
  
  const specificites = [
    {
      icon: Building,
      title: "Protection des zones commerciales",
      description: `Sécurisation des centres commerciaux et zones d'activité de ${cityName}`
    },
    {
      icon: Shield,
      title: "Surveillance résidentielle",
      description: `Protection des quartiers résidentiels de ${cityName}`
    },
    {
      icon: Users,
      title: "Sécurité événementielle",
      description: `Organisation d'événements sécurisés à ${cityName}`
    },
    {
      icon: MapPin,
      title: "Intervention rapide",
      description: `Équipes disponibles 24/7 à ${cityName}`
    }
  ];
  
  const faits = [
    {
      icon: MapPin,
      title: "Couverture complète: Centre-ville, Plaine, Coteaux",
      description: ""
    },
    {
      icon: Activity,
      title: "Intervention dans un rayon de 20 km",
      description: ""
    },
    {
      icon: Building,
      title: "Protection des zones commerciales et industrielles",
      description: ""
    },
    {
      icon: Clock,
      title: "Agents disponibles 24h/24",
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
          backgroundImage="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//offres%20emploi%20Levigile.png"
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
          </div>
        </section>
        
        <SpecificitesSection 
          items={[...specificites, ...faits]}
          title={`Pourquoi choisir LeVigile à ${cityName} ?`}
          subtitle="Notre expertise locale au service de votre sécurité"
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

export default CastanetTolosanPage;
