
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CityHero from '@/components/cities/CityHero';
import SpecificitesSection, { SpecificiteItem } from '@/components/cities/SpecificitesSection';
import CtaSection from '@/components/cities/CtaSection';
import FaqSection from '@/components/cities/FaqSection';
import { Shield, MapPin, Calendar, Building, Users } from 'lucide-react';

const AriegePage: React.FC = () => {
  const departmentName = "Ariège";
  const postalCode = "09";
  
  // Define the specificités items with proper structure
  const specificitesItems: SpecificiteItem[] = [
    {
      icon: MapPin,
      title: "Protection des zones résidentielles",
      description: "Surveillance des quartiers résidentiels dans tout le département de l'Ariège pour assurer la tranquillité des habitants."
    },
    {
      icon: Building,
      title: "Sécurité des zones commerciales",
      description: "Services adaptés pour les commerces et grandes surfaces en Ariège, avec une présence renforcée."
    },
    {
      icon: Shield,
      title: "Gardiennage de sites industriels",
      description: "Protection des zones d'activités et entreprises implantées en Ariège et ses environs."
    },
    {
      icon: Calendar,
      title: "Sécurité événementielle",
      description: "Dispositifs de sécurité pour les événements culturels, les manifestations sportives et festivités locales du département."
    },
    {
      icon: Users,
      title: "Surveillance des établissements publics",
      description: "Protection des écoles, gymnases et infrastructures municipales dans tout le département."
    }
  ];

  // FAQ items for Ariège
  const faqItems = [
    {
      question: "Quels sont les services de sécurité proposés par LeVigile en Ariège ?",
      answer: `LeVigile propose en Ariège (${postalCode}) des services complets de sécurité privée incluant la protection des zones résidentielles, la sécurité des commerces, le gardiennage de sites industriels, la sécurité événementielle et la surveillance des établissements publics dans tout le département.`
    },
    {
      question: "Comment contacter LeVigile pour un devis de sécurité en Ariège ?",
      answer: "Pour obtenir un devis gratuit et personnalisé pour vos besoins en sécurité en Ariège, contactez-nous au 05 54 54 64 28 ou par email à contact@levigile.fr. Notre équipe locale vous répondra sous 24h avec une proposition adaptée à votre situation."
    },
    {
      question: "LeVigile intervient-il en urgence dans les zones rurales de l'Ariège ?",
      answer: "Oui, LeVigile dispose d'agents répartis stratégiquement sur tout le territoire ariégeois pour garantir des interventions rapides, même dans les zones rurales et montagneuses. Nous maintenons un maillage territorial qui permet d'assurer une présence réactive sur l'ensemble du département."
    },
    {
      question: "Proposez-vous des services adaptés à la saisonnalité touristique en Ariège ?",
      answer: "Absolument, LeVigile adapte ses dispositifs de sécurité en fonction de la saisonnalité touristique en Ariège. Nous renforçons nos équipes pendant les périodes d'affluence et proposons des prestations spécifiques pour les sites touristiques, stations de montagne et événements saisonniers."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Sécurité en Ariège - Protection professionnelle | LeVigile</title>
        <meta 
          name="description" 
          content="Entreprise de sécurité en Ariège (09). Gardiennage, rondes et surveillance 24/7 pour particuliers et professionnels par des agents certifiés."
        />
        <link rel="canonical" href="https://www.levigile.fr/ariege.html" />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow pt-24">
        <CityHero 
          cityName={departmentName}
          subtitle="Des solutions de sécurité sur mesure pour l'ensemble du département"
          backgroundImage="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//gardiennage-hero.jpg"
        />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-levigile-blue">
                Services de sécurité en {departmentName}
              </h2>
              
              <p className="mb-4">
                LeVigile propose une gamme complète de services de sécurité adaptés aux besoins spécifiques de l'{departmentName}, 
                un département riche en patrimoine naturel et culturel. Notre équipe d'agents qualifiés intervient rapidement pour 
                assurer la protection des biens et des personnes dans l'ensemble du département.
              </p>
              
              <p className="mb-8">
                Que vous soyez un particulier, une entreprise, un commerce ou un organisateur d'événement en {departmentName}, 
                nos solutions de sécurité s'adaptent à vos besoins et contraintes avec une excellente connaissance du territoire local.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-levigile-blue">
                Nos zones d'intervention en {departmentName}
              </h3>
              
              <p className="mb-4">
                Notre équipe d'agents de sécurité intervient dans tout le département, notamment à :
              </p>
              
              <ul className="list-disc pl-6 mb-8 space-y-1">
                <li>Foix et ses environs</li>
                <li>Pamiers et l'axe économique</li>
                <li>Saint-Girons et le Couserans</li>
                <li>Tarascon-sur-Ariège et la Haute Ariège</li>
                <li>Ax-les-Thermes et les stations de montagne</li>
              </ul>
              
              <p className="mb-8">
                Nous intervenons également dans les communes limitrophes, assurant ainsi une couverture optimale du territoire.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-levigile-blue">
                Services de sécurité spécifiques à l'{departmentName}
              </h3>
              
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li><strong>Sécurité résidentielle</strong> - Protection des maisons individuelles et résidences</li>
                <li><strong>Surveillance de commerces</strong> - Protection des boutiques et grandes surfaces</li>
                <li><strong>Gardiennage d'entreprises</strong> - Sécurisation des locaux professionnels et zones d'activités</li>
                <li><strong>Sécurité événementielle</strong> - Protection pour les événements culturels et sportifs</li>
                <li><strong>Rondes de surveillance</strong> - Contrôle périodique de vos locaux professionnels et résidentiels</li>
                <li><strong>Sécurité des sites touristiques</strong> - Protection des lieux patrimoniaux et touristiques</li>
              </ul>
            </div>
          </div>
        </section>
        
        <SpecificitesSection items={specificitesItems} />
        
        <FaqSection 
          items={faqItems} 
          title={`Questions fréquentes sur nos services en ${departmentName}`}
        />
        
        <CtaSection 
          title={`Besoin d'un devis pour votre sécurité en ${departmentName} ?`}
          subtitle="Nos experts sont disponibles pour étudier vos besoins spécifiques et vous proposer une solution sur mesure."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default AriegePage;
