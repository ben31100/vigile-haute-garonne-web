
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CityHero from '../../components/cities/CityHero';
import SpecificitesSection, { SpecificiteItem } from '../../components/cities/SpecificitesSection';
import CtaSection from '../../components/cities/CtaSection';
import { Shield, MapPin, Calendar, Building, Users } from 'lucide-react';

const BalmaPage: React.FC = () => {
  // Define the specificités items with proper structure
  const specificitesItems: SpecificiteItem[] = [
    {
      icon: Building,
      title: "Protection des zones résidentielles",
      description: "Surveillance des quartiers résidentiels haut de gamme et des résidences privées de Balma."
    },
    {
      icon: Shield,
      title: "Sécurité des sites sportifs",
      description: "Dispositifs adaptés pour le complexe sportif et les installations olympiques de la ville."
    },
    {
      icon: MapPin,
      title: "Surveillance des zones commerciales",
      description: "Protection des commerces et centres commerciaux de Balma-Gramont et Vidailhan."
    },
    {
      icon: Calendar,
      title: "Sécurité événementielle",
      description: "Services de sécurité pour les événements culturels et sportifs organisés à l'Odyssée et autres sites."
    },
    {
      icon: Users,
      title: "Gardiennage d'entreprises",
      description: "Solutions de sécurité pour les entreprises et bureaux de la zone économique de Balma."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Sécurité à Balma - Protection professionnelle | LeVigile</title>
        <meta 
          name="description" 
          content="Entreprise de sécurité à Balma. Gardiennage, rondes et surveillance 24/7 pour particuliers et professionnels par des agents certifiés."
        />
        <link rel="canonical" href="https://www.levigile.fr/balma.html" />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow pt-24">
        <CityHero 
          cityName="Balma"
          subtitle="Des solutions de sécurité sur mesure pour cette commune dynamique de l'est toulousain"
          backgroundImage="/images/cities/balma-hero.jpg"
        />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-levigile-blue">
                Services de sécurité à Balma
              </h2>
              
              <p className="mb-4">
                LeVigile propose une gamme complète de services de sécurité adaptés aux besoins spécifiques de Balma, 
                commune dynamique située à l'est de Toulouse. Notre équipe d'agents qualifiés intervient rapidement pour 
                assurer la protection des biens et des personnes dans toute la ville.
              </p>
              
              <p className="mb-8">
                Que vous soyez un particulier, une entreprise, un commerce ou un organisateur d'événement à Balma, 
                nos solutions de sécurité s'adaptent à vos besoins et contraintes avec une excellente connaissance du territoire local.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-levigile-blue">
                Nos zones d'intervention à Balma
              </h3>
              
              <p className="mb-4">
                Notre équipe d'agents de sécurité intervient dans tous les quartiers de Balma, notamment :
              </p>
              
              <ul className="list-disc pl-6 mb-8 space-y-1">
                <li>Vidailhan et le nouveau quartier Cyprié</li>
                <li>Lasbordes et le secteur du golf</li>
                <li>Balma-Gramont et sa zone commerciale</li>
                <li>Le centre-ville historique</li>
                <li>Le secteur de la Plaine et du Birol</li>
              </ul>
              
              <p className="mb-8">
                Nous intervenons également dans les communes limitrophes comme Pin-Balma, Flourens, 
                Quint-Fonsegrives et L'Union, assurant ainsi une couverture optimale de l'est toulousain.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-levigile-blue">
                Services de sécurité spécifiques à Balma
              </h3>
              
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li><strong>Sécurité résidentielle</strong> - Protection des villas et résidences haut de gamme</li>
                <li><strong>Surveillance de commerces</strong> - Protection des boutiques et centres commerciaux</li>
                <li><strong>Gardiennage d'installations sportives</strong> - Sécurisation du complexe sportif et sites olympiques</li>
                <li><strong>Sécurité événementielle</strong> - Protection pour les événements à l'Odyssée et autres sites</li>
                <li><strong>Rondes de surveillance</strong> - Contrôle périodique de vos locaux professionnels et résidentiels</li>
              </ul>
            </div>
          </div>
        </section>
        
        <SpecificitesSection items={specificitesItems} />
        
        <CtaSection 
          title="Besoin d'un devis pour votre sécurité à Balma ?"
          subtitle="Nos experts sont disponibles pour étudier vos besoins spécifiques et vous proposer une solution sur mesure."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default BalmaPage;
