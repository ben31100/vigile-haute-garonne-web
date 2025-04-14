
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CityHero from '../../components/cities/CityHero';
import SpecificitesSection from '../../components/cities/SpecificitesSection';
import CtaSection from '../../components/cities/CtaSection';

const RamonvillePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Sécurité à Ramonville-Saint-Agne - Protection professionnelle | LeVigile</title>
        <meta 
          name="description" 
          content="Entreprise de sécurité à Ramonville-Saint-Agne. Gardiennage, rondes et surveillance 24/7 pour particuliers et professionnels par des agents certifiés."
        />
        <link rel="canonical" href="https://www.levigile.fr/ramonville.html" />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow pt-24">
        <CityHero 
          cityName="Ramonville-Saint-Agne"
          postalCode="31520"
          imageUrl="/images/cities/ramonville-hero.jpg"
          defaultImageUrl="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80"
        />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-levigile-blue">
                Services de sécurité à Ramonville-Saint-Agne
              </h2>
              
              <p className="mb-4">
                LeVigile propose une gamme complète de services de sécurité adaptés aux besoins spécifiques de Ramonville-Saint-Agne, 
                commune dynamique située au sud-est de Toulouse. Notre équipe d'agents qualifiés intervient rapidement pour 
                assurer la protection des biens et des personnes dans toute la ville.
              </p>
              
              <p className="mb-8">
                Que vous soyez un particulier, une entreprise, un commerce ou un organisateur d'événement à Ramonville-Saint-Agne, 
                nos solutions de sécurité s'adaptent à vos besoins et contraintes avec une excellente connaissance du territoire local.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-levigile-blue">
                Nos zones d'intervention à Ramonville-Saint-Agne
              </h3>
              
              <p className="mb-4">
                Notre équipe d'agents de sécurité intervient dans tous les quartiers de Ramonville-Saint-Agne, notamment :
              </p>
              
              <ul className="list-disc pl-6 mb-8 space-y-1">
                <li>Port Sud et le secteur du Canal du Midi</li>
                <li>Quartier Métro et zone commerciale</li>
                <li>La Cité Rose et ses environs</li>
                <li>Maragon-Floralies</li>
                <li>Secteur du Parc Technologique du Canal</li>
              </ul>
              
              <p className="mb-8">
                Nous intervenons également dans les communes limitrophes comme Toulouse (quartier Rangueil), 
                Labège, Auzeville-Tolosane et Castanet-Tolosan, assurant ainsi une couverture optimale de la zone.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-levigile-blue">
                Services de sécurité spécifiques à Ramonville-Saint-Agne
              </h3>
              
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li><strong>Sécurité pour entreprises du Parc Technologique</strong> - Gardiennage et protection adaptés aux besoins des entreprises high-tech et startups</li>
                <li><strong>Surveillance de zones commerciales</strong> - Protection des commerces contre le vol et le vandalisme</li>
                <li><strong>Gardiennage résidentiel</strong> - Sécurisation des ensembles résidentiels et copropriétés</li>
                <li><strong>Protection événementielle</strong> - Sécurité pour les manifestations au Bikini, à la salle des fêtes ou lors des événements culturels</li>
                <li><strong>Rondes de surveillance nocturne</strong> - Contrôle périodique de vos locaux pendant la nuit</li>
              </ul>
            </div>
          </div>
        </section>
        
        <SpecificitesSection 
          cityName="Ramonville-Saint-Agne"
          specificites={[
            "Sécurisation du Port de plaisance et des installations nautiques",
            "Protection des établissements scolaires et universitaires",
            "Surveillance des zones commerciales et des grandes surfaces",
            "Sécurité pour les événements culturels et musicaux",
            "Gardiennage des entreprises high-tech du Parc Technologique"
          ]}
          faits={[
            "Ramonville-Saint-Agne abrite le célèbre port de plaisance Port Sud, une zone touristique nécessitant une vigilance particulière",
            "La commune héberge de nombreuses entreprises innovantes dans son Parc Technologique du Canal",
            "La salle de concert Le Bikini, lieu culturel majeur, requiert des dispositifs de sécurité adaptés lors des événements",
            "La proximité du campus universitaire de Rangueil influence les besoins en sécurité de la ville"
          ]}
        />
        
        <CtaSection 
          title="Besoin d'un devis pour votre sécurité à Ramonville-Saint-Agne ?"
          subtitle="Nos experts sont disponibles pour étudier vos besoins spécifiques et vous proposer une solution sur mesure."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default RamonvillePage;
