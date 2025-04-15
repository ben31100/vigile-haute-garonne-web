
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CityHero from '../../components/cities/CityHero';
import SpecificitesSection, { SpecificiteItem } from '../../components/cities/SpecificitesSection';
import CtaSection from '../../components/cities/CtaSection';
import { Shield, MapPin, Calendar, Building, Users } from 'lucide-react';

const SaintGaudensPage: React.FC = () => {
  // Define the specificités items with proper structure
  const specificitesItems: SpecificiteItem[] = [
    {
      icon: Shield,
      title: "Sécurisation des sites administratifs",
      description: "Protection des bâtiments de la sous-préfecture et des services publics de Saint-Gaudens."
    },
    {
      icon: Building,
      title: "Gardiennage des commerces",
      description: "Services adaptés pour les commerces et boutiques du centre-ville et des zones commerciales périphériques."
    },
    {
      icon: MapPin,
      title: "Surveillance des zones industrielles",
      description: "Protection des zones d'activités et sites industriels dans la région de Saint-Gaudens."
    },
    {
      icon: Calendar,
      title: "Sécurité événementielle",
      description: "Dispositifs de sécurité pour les festivals, foires et événements culturels organisés dans la ville."
    },
    {
      icon: Users,
      title: "Protection des établissements de santé",
      description: "Services spécialisés pour l'hôpital de Saint-Gaudens et les cliniques environnantes."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Sécurité à Saint-Gaudens - Protection professionnelle | LeVigile</title>
        <meta 
          name="description" 
          content="Entreprise de sécurité à Saint-Gaudens. Gardiennage, rondes et surveillance 24/7 pour particuliers et professionnels par des agents certifiés."
        />
        <link rel="canonical" href="https://www.levigile.fr/saint-gaudens.html" />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow pt-24">
        <CityHero 
          cityName="Saint-Gaudens"
          subtitle="Des solutions de sécurité sur mesure dans la sous-préfecture de Haute-Garonne"
          backgroundImage="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//incendie-hero.jpg"
        />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-levigile-blue">
                Services de sécurité à Saint-Gaudens
              </h2>
              
              <p className="mb-4">
                LeVigile propose une gamme complète de services de sécurité adaptés aux besoins spécifiques de Saint-Gaudens, 
                sous-préfecture dynamique de la Haute-Garonne. Notre équipe d'agents qualifiés intervient rapidement pour 
                assurer la protection des biens et des personnes dans toute la ville.
              </p>
              
              <p className="mb-8">
                Que vous soyez un particulier, une entreprise, un commerce ou un organisateur d'événement à Saint-Gaudens, 
                nos solutions de sécurité s'adaptent à vos besoins et contraintes avec une excellente connaissance du territoire local.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-levigile-blue">
                Nos zones d'intervention à Saint-Gaudens
              </h3>
              
              <p className="mb-4">
                Notre équipe d'agents de sécurité intervient dans tous les quartiers de Saint-Gaudens, notamment :
              </p>
              
              <ul className="list-disc pl-6 mb-8 space-y-1">
                <li>Centre-ville historique</li>
                <li>Quartier de la gare</li>
                <li>Secteur du Pouech</li>
                <li>Zone commerciale Ouest</li>
                <li>Quartier de l'hôpital</li>
              </ul>
              
              <p className="mb-8">
                Nous intervenons également dans les communes limitrophes comme Montréjeau, Valentine, 
                Miramont-de-Comminges et Estancarbon, assurant ainsi une couverture optimale de la région.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-levigile-blue">
                Services de sécurité spécifiques à Saint-Gaudens
              </h3>
              
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li><strong>Sécurité pour les sites administratifs</strong> - Protection adaptée pour la sous-préfecture et services publics</li>
                <li><strong>Surveillance de commerces</strong> - Protection des boutiques et magasins contre le vol et les intrusions</li>
                <li><strong>Gardiennage industriel</strong> - Sécurisation des zones d'activités et sites de production</li>
                <li><strong>Sécurité événementielle</strong> - Protection pour les foires, festivals et manifestations locales</li>
                <li><strong>Rondes de surveillance nocturne</strong> - Contrôle périodique de vos locaux pendant la nuit</li>
              </ul>
            </div>
          </div>
        </section>
        
        <SpecificitesSection items={specificitesItems} />
        
        <CtaSection 
          title="Besoin d'un devis pour votre sécurité à Saint-Gaudens ?"
          subtitle="Nos experts sont disponibles pour étudier vos besoins spécifiques et vous proposer une solution sur mesure."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default SaintGaudensPage;
