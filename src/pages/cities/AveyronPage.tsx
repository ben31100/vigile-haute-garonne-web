
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CityHero from '@/components/cities/CityHero';
import SpecificitesSection, { SpecificiteItem } from '@/components/cities/SpecificitesSection';
import CtaSection from '@/components/cities/CtaSection';
import { Shield, MapPin, Calendar, Building, Users } from 'lucide-react';

const AveyronPage: React.FC = () => {
  const departmentName = "Aveyron";
  const postalCode = "12";
  
  // Define the specificités items with proper structure
  const specificitesItems: SpecificiteItem[] = [
    {
      icon: MapPin,
      title: "Protection des zones résidentielles",
      description: "Surveillance des quartiers résidentiels dans tout l'Aveyron pour assurer la tranquillité des habitants."
    },
    {
      icon: Building,
      title: "Sécurité des zones commerciales",
      description: "Services adaptés pour les commerces, boutiques artisanales et grandes surfaces dans tout le département."
    },
    {
      icon: Shield,
      title: "Gardiennage de sites industriels",
      description: "Protection des zones d'activités industrielles et agricoles de l'Aveyron."
    },
    {
      icon: Calendar,
      title: "Sécurité événementielle",
      description: "Dispositifs de sécurité pour les festivals, foires et manifestations culturelles aveyronnaises."
    },
    {
      icon: Users,
      title: "Protection du patrimoine",
      description: "Surveillance des sites historiques et touristiques du département, notamment à Rodez, Conques et Millau."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Sécurité en Aveyron - Protection professionnelle | LeVigile</title>
        <meta 
          name="description" 
          content="Entreprise de sécurité en Aveyron (12). Gardiennage, rondes et surveillance 24/7 pour particuliers et professionnels par des agents certifiés."
        />
        <link rel="canonical" href="https://www.levigile.fr/aveyron.html" />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow pt-24">
        <CityHero 
          cityName={departmentName}
          subtitle="Des solutions de sécurité sur mesure pour l'ensemble du département"
          backgroundImage="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//ronde-hero.jpg"
        />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-levigile-blue">
                Services de sécurité en {departmentName}
              </h2>
              
              <p className="mb-4">
                LeVigile propose une gamme complète de services de sécurité adaptés aux besoins spécifiques de l'{departmentName}, 
                un territoire riche en patrimoine et en diversité. Notre équipe d'agents qualifiés intervient rapidement pour 
                assurer la protection des biens et des personnes dans l'ensemble du département.
              </p>
              
              <p className="mb-8">
                Que vous soyez un particulier, une entreprise agricole, un commerce ou un organisateur d'événement en {departmentName}, 
                nos solutions de sécurité s'adaptent à vos besoins et contraintes avec une excellente connaissance du territoire local.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-levigile-blue">
                Nos zones d'intervention en {departmentName}
              </h3>
              
              <p className="mb-4">
                Notre équipe d'agents de sécurité intervient dans tout le département, notamment à :
              </p>
              
              <ul className="list-disc pl-6 mb-8 space-y-1">
                <li>Rodez et son agglomération</li>
                <li>Millau et les grands causses</li>
                <li>Villefranche-de-Rouergue et l'ouest aveyronnais</li>
                <li>Decazeville et le bassin industriel</li>
                <li>Espalion et le nord Aveyron</li>
              </ul>
              
              <p className="mb-8">
                Nous intervenons également dans les communes rurales et touristiques, assurant ainsi une couverture optimale de l'ensemble du territoire aveyronnais.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-levigile-blue">
                Services de sécurité spécifiques à l'{departmentName}
              </h3>
              
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li><strong>Sécurité résidentielle</strong> - Protection des maisons individuelles et résidences secondaires</li>
                <li><strong>Surveillance de commerces</strong> - Protection des boutiques et enseignes aveyronnaises</li>
                <li><strong>Gardiennage agricole</strong> - Sécurisation des exploitations agricoles et fromagères</li>
                <li><strong>Sécurité touristique</strong> - Protection des sites touristiques majeurs</li>
                <li><strong>Sécurité événementielle</strong> - Protection pour les festivals et événements culturels</li>
                <li><strong>Rondes de surveillance</strong> - Contrôle périodique de vos locaux professionnels et résidentiels</li>
              </ul>
            </div>
          </div>
        </section>
        
        <SpecificitesSection items={specificitesItems} />
        
        <CtaSection 
          title={`Besoin d'un devis pour votre sécurité en ${departmentName} ?`}
          subtitle="Nos experts sont disponibles pour étudier vos besoins spécifiques et vous proposer une solution sur mesure."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default AveyronPage;
