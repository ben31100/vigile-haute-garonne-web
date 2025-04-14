
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CityHero from '../../components/cities/CityHero';
import SpecificitesSection, { SpecificiteItem } from '../../components/cities/SpecificitesSection';
import CtaSection from '../../components/cities/CtaSection';
import { Shield, MapPin, Calendar, Building, Users } from 'lucide-react';

const LUnionPage: React.FC = () => {
  // Define the specificités items with proper structure
  const specificitesItems: SpecificiteItem[] = [
    {
      icon: Building,
      title: "Protection des zones commerciales",
      description: "Surveillance des centres commerciaux et zones d'activités, notamment le secteur de Saint-Caprais et Grande Halle."
    },
    {
      icon: MapPin,
      title: "Sécurité résidentielle",
      description: "Services adaptés pour les quartiers résidentiels et lotissements haut de gamme de L'Union."
    },
    {
      icon: Shield,
      title: "Gardiennage d'entreprises",
      description: "Protection des bureaux et locaux professionnels installés dans la commune."
    },
    {
      icon: Calendar,
      title: "Sécurité événementielle",
      description: "Dispositifs pour les événements à la Grande Halle de L'Union, la salle des fêtes et autres lieux de manifestations."
    },
    {
      icon: Users,
      title: "Surveillance des établissements de santé",
      description: "Protection spécialisée pour les cliniques et établissements médicaux de la ville."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Sécurité à L'Union - Protection professionnelle | LeVigile</title>
        <meta 
          name="description" 
          content="Entreprise de sécurité à L'Union. Gardiennage, rondes et surveillance 24/7 pour particuliers et professionnels par des agents certifiés."
        />
        <link rel="canonical" href="https://www.levigile.fr/lunion.html" />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow pt-24">
        <CityHero 
          cityName="L'Union"
          subtitle="Des solutions de sécurité sur mesure pour cette commune du nord-est toulousain"
          backgroundImage="/images/cities/lunion-hero.jpg"
        />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-levigile-blue">
                Services de sécurité à L'Union
              </h2>
              
              <p className="mb-4">
                LeVigile propose une gamme complète de services de sécurité adaptés aux besoins spécifiques de L'Union, 
                commune dynamique du nord-est toulousain. Notre équipe d'agents qualifiés intervient rapidement pour 
                assurer la protection des biens et des personnes dans toute la ville.
              </p>
              
              <p className="mb-8">
                Que vous soyez un particulier, une entreprise, un commerce ou un organisateur d'événement à L'Union, 
                nos solutions de sécurité s'adaptent à vos besoins et contraintes avec une excellente connaissance du territoire local.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-levigile-blue">
                Nos zones d'intervention à L'Union
              </h3>
              
              <p className="mb-4">
                Notre équipe d'agents de sécurité intervient dans tous les quartiers de L'Union, notamment :
              </p>
              
              <ul className="list-disc pl-6 mb-8 space-y-1">
                <li>Centre-ville et quartier de la mairie</li>
                <li>Zone commerciale de Saint-Caprais</li>
                <li>Secteur de la Grande Halle</li>
                <li>Quartier Belbèze</li>
                <li>Zone résidentielle du Chemin des Vignes</li>
              </ul>
              
              <p className="mb-8">
                Nous intervenons également dans les communes limitrophes comme Saint-Jean, Montrabé, 
                Toulouse-Borderouge et Launaguet, assurant ainsi une couverture optimale du nord-est toulousain.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-levigile-blue">
                Services de sécurité spécifiques à L'Union
              </h3>
              
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li><strong>Sécurité commerciale</strong> - Protection des centres commerciaux et boutiques</li>
                <li><strong>Gardiennage résidentiel</strong> - Surveillance des quartiers et lotissements haut de gamme</li>
                <li><strong>Protection d'entreprises</strong> - Sécurisation des bureaux et locaux professionnels</li>
                <li><strong>Sécurité événementielle</strong> - Dispositifs pour les manifestations à la Grande Halle</li>
                <li><strong>Rondes de surveillance</strong> - Contrôle périodique de vos locaux pendant la nuit</li>
              </ul>
            </div>
          </div>
        </section>
        
        <SpecificitesSection items={specificitesItems} />
        
        <CtaSection 
          title="Besoin d'un devis pour votre sécurité à L'Union ?"
          subtitle="Nos experts sont disponibles pour étudier vos besoins spécifiques et vous proposer une solution sur mesure."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default LUnionPage;
