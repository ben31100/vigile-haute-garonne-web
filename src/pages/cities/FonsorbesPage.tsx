import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CityHero from '@/components/cities/CityHero';
import CtaSection from '@/components/cities/CtaSection';
import SpecificitesSection from '@/components/cities/SpecificitesSection';
import { Building, MapPin, Users, Shield, Clock, Activity, Star } from 'lucide-react';

const FonsorbesPage = () => {
  const cityName = "Fonsorbes";
  const cityDescription = "Fonsorbes, ville dynamique de l'ouest toulousain, bénéficie de nos services de sécurité adaptés aux besoins locaux.";
  const postalCode = "31470";
  
  const specificites = [
    {
      icon: Building,
      title: "Protection commerciale",
      description: `Sécurisation des commerces et entreprises de ${cityName}`
    },
    {
      icon: Shield,
      title: "Surveillance de quartiers",
      description: `Protection des zones résidentielles de ${cityName}`
    },
    {
      icon: Users,
      title: "Sécurité événementielle",
      description: `Événements sécurisés à ${cityName}`
    },
    {
      icon: MapPin,
      title: "Intervention sur alarme",
      description: `Réponse rapide aux alarmes à ${cityName}`
    }
  ];
  
  const faits = [
    {
      icon: MapPin,
      title: "Couverture totale: Centre-ville, La Béouzo, Bidot",
      description: ""
    },
    {
      icon: Activity,
      title: "Intervention dans un rayon de 20 km",
      description: ""
    },
    {
      icon: Building,
      title: "Protection des zones d'activités",
      description: ""
    },
    {
      icon: Clock,
      title: "Service 24h/24 et 7j/7",
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
          </div>
        </section>
        
        <SpecificitesSection 
          items={[...specificites, ...faits]}
          title={`Pourquoi choisir LeVigile à ${cityName} ?`}
          subtitle="Une protection adaptée à vos besoins spécifiques"
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

export default FonsorbesPage;
