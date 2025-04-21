import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CityHero from '../../components/cities/CityHero';
import SpecificitesSection, { SpecificiteItem } from '../../components/cities/SpecificitesSection';
import CtaSection from '../../components/cities/CtaSection';
import { Shield, MapPin, Calendar, Building, Users } from 'lucide-react';

const CugnauxPage: React.FC = () => {
  // Define the specificités items with proper structure
  const specificitesItems: SpecificiteItem[] = [
    {
      icon: MapPin,
      title: "Protection des zones résidentielles",
      description: "Surveillance des quartiers résidentiels et des lotissements de Cugnaux pour assurer la tranquillité des habitants."
    },
    {
      icon: Building,
      title: "Sécurité des zones commerciales",
      description: "Services adaptés pour les commerces et grandes surfaces du sud-ouest toulousain."
    },
    {
      icon: Shield,
      title: "Gardiennage de sites industriels",
      description: "Protection des zones d'activités et entreprises implantées à Cugnaux et ses environs."
    },
    {
      icon: Calendar,
      title: "Sécurité événementielle",
      description: "Dispositifs de sécurité pour les événements au Quai des Arts, les manifestations sportives et festivités locales."
    },
    {
      icon: Users,
      title: "Surveillance des établissements publics",
      description: "Protection des écoles, gymnases et infrastructures municipales de la commune."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Sécurité à Cugnaux - Protection professionnelle | LeVigile</title>
        <meta 
          name="description" 
          content="Entreprise de sécurité à Cugnaux. Gardiennage, rondes et surveillance 24/7 pour particuliers et professionnels par des agents certifiés."
        />
        <link rel="canonical" href="https://www.levigile.fr/cugnaux.html" />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow pt-24">
        <CityHero 
          cityName="Cugnaux"
          subtitle="Des solutions de sécurité sur mesure pour cette ville du sud-ouest toulousain"
          backgroundImage="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Levigile%20securite.webp"
        />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-levigile-blue">
                Services de sécurité à Cugnaux
              </h2>
              
              <p className="mb-4">
                LeVigile propose une gamme complète de services de sécurité adaptés aux besoins spécifiques de Cugnaux, 
                ville en développement du sud-ouest toulousain. Notre équipe d'agents qualifiés intervient rapidement pour 
                assurer la protection des biens et des personnes dans toute la ville.
              </p>
              
              <p className="mb-8">
                Que vous soyez un particulier, une entreprise, un commerce ou un organisateur d'événement à Cugnaux, 
                nos solutions de sécurité s'adaptent à vos besoins et contraintes avec une excellente connaissance du territoire local.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-levigile-blue">
                Nos zones d'intervention à Cugnaux
              </h3>
              
              <p className="mb-4">
                Notre équipe d'agents de sécurité intervient dans tous les quartiers de Cugnaux, notamment :
              </p>
              
              <ul className="list-disc pl-6 mb-8 space-y-1">
                <li>Centre-ville et quartier de la mairie</li>
                <li>Secteur du Vivier et des Portes de Gascogne</li>
                <li>Zone commerciale de Cugnaux</li>
                <li>Quartier du Lac et des Jaoumettos</li>
                <li>Secteur des Marots et du Casque</li>
              </ul>
              
              <p className="mb-8">
                Nous intervenons également dans les communes limitrophes comme Villeneuve-Tolosane, Frouzins, 
                Plaisance-du-Touch et Tournefeuille, assurant ainsi une couverture optimale du sud-ouest toulousain.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-levigile-blue">
                Services de sécurité spécifiques à Cugnaux
              </h3>
              
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li><strong>Sécurité résidentielle</strong> - Protection des maisons individuelles et résidences</li>
                <li><strong>Surveillance de commerces</strong> - Protection des boutiques et grandes surfaces</li>
                <li><strong>Gardiennage d'entreprises</strong> - Sécurisation des locaux professionnels et zones d'activités</li>
                <li><strong>Sécurité événementielle</strong> - Protection pour les événements culturels et sportifs</li>
                <li><strong>Rondes de surveillance</strong> - Contrôle périodique de vos locaux professionnels et résidentiels</li>
              </ul>
            </div>
          </div>
        </section>
        
        <SpecificitesSection items={specificitesItems} />
        
        <CtaSection 
          title="Besoin d'un devis pour votre sécurité à Cugnaux ?"
          subtitle="Nos experts sont disponibles pour étudier vos besoins spécifiques et vous proposer une solution sur mesure."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default CugnauxPage;
