
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CityHero from '@/components/cities/CityHero';
import SpecificitesSection, { SpecificiteItem } from '@/components/cities/SpecificitesSection';
import CtaSection from '@/components/cities/CtaSection';
import FaqSection from '@/components/cities/FaqSection';
import { Shield, MapPin, Calendar, Building, Users } from 'lucide-react';

const AudePage: React.FC = () => {
  const departmentName = "Aude";
  const postalCode = "11";
  
  // Define the specificités items with proper structure
  const specificitesItems: SpecificiteItem[] = [
    {
      icon: MapPin,
      title: "Protection des zones résidentielles",
      description: "Surveillance des quartiers résidentiels dans tout le département de l'Aude pour assurer la tranquillité des habitants."
    },
    {
      icon: Building,
      title: "Sécurité des zones commerciales",
      description: "Services adaptés pour les commerces et grandes surfaces dans l'Aude, avec une présence renforcée dans les zones touristiques."
    },
    {
      icon: Shield,
      title: "Gardiennage de sites viticoles",
      description: "Protection spécialisée pour les domaines viticoles, caves et espaces de production du département."
    },
    {
      icon: Calendar,
      title: "Sécurité événementielle",
      description: "Dispositifs de sécurité pour les festivals, foires viticoles et manifestations culturelles dans toute l'Aude."
    },
    {
      icon: Users,
      title: "Surveillance des sites touristiques",
      description: "Protection des sites patrimoniaux, notamment à Carcassonne, Narbonne et sur le littoral méditerranéen."
    }
  ];

  // FAQ items for Aude
  const faqItems = [
    {
      question: `Quels sont les services de sécurité proposés par LeVigile dans l'Aude ?`,
      answer: `LeVigile propose dans l'Aude (${postalCode}) des services complets de sécurité privée incluant la protection des zones résidentielles, la sécurité des zones commerciales, le gardiennage de sites viticoles, la sécurité événementielle et la surveillance des sites touristiques comme la Cité de Carcassonne.`
    },
    {
      question: `Comment contacter LeVigile pour un devis de sécurité dans l'Aude ?`,
      answer: `Pour obtenir un devis gratuit et personnalisé pour vos besoins en sécurité dans l'Aude, contactez-nous au 05 54 54 64 28 ou par email à contact@levigile.fr. Notre équipe locale vous répondra sous 24h avec une proposition adaptée à votre situation.`
    },
    {
      question: `Proposez-vous des services spécifiques pour les domaines viticoles de l'Aude ?`,
      answer: `Oui, LeVigile a développé une expertise particulière pour la sécurité des domaines viticoles audois. Nos services comprennent la surveillance des vignobles, la protection des chais et caves, la sécurisation des stocks et la prévention des vols pendant les périodes de vendanges et de production.`
    },
    {
      question: `Comment assurez-vous la sécurité des sites touristiques comme la Cité de Carcassonne ?`,
      answer: `Pour les sites touristiques majeurs comme la Cité de Carcassonne, LeVigile déploie des dispositifs de sécurité adaptés à l'affluence touristique. Nos agents assurent la gestion des flux de visiteurs, la protection des commerces, la prévention des incivilités et la coordination avec les autorités locales pour garantir une expérience sereine aux visiteurs.`
    },
    {
      question: `Intervenez-vous sur le littoral audois en été ?`,
      answer: `Absolument, LeVigile renforce ses équipes sur le littoral audois pendant la saison estivale. Nous proposons des services adaptés aux résidences secondaires, aux campings, aux établissements de plage et aux commerces saisonniers, avec des rondes de surveillance régulières et des interventions rapides en cas d'incident.`
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Sécurité dans l'Aude - Protection professionnelle | LeVigile</title>
        <meta 
          name="description" 
          content="Entreprise de sécurité dans l'Aude (11). Gardiennage, rondes et surveillance 24/7 pour particuliers et professionnels par des agents certifiés."
        />
        <link rel="canonical" href="https://www.levigile.fr/aude.html" />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow pt-24">
        <CityHero 
          cityName={departmentName}
          subtitle="Des solutions de sécurité sur mesure pour l'ensemble du département"
          backgroundImage="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//incendie-hero.jpg"
        />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-levigile-blue">
                Services de sécurité dans l'{departmentName}
              </h2>
              
              <p className="mb-4">
                LeVigile propose une gamme complète de services de sécurité adaptés aux besoins spécifiques de l'{departmentName}, 
                entre Méditerranée et Pyrénées. Notre équipe d'agents qualifiés intervient rapidement pour 
                assurer la protection des biens et des personnes dans l'ensemble du département.
              </p>
              
              <p className="mb-8">
                Que vous soyez un particulier, une entreprise viticole, un commerce ou un organisateur d'événement dans l'{departmentName}, 
                nos solutions de sécurité s'adaptent à vos besoins et contraintes avec une excellente connaissance du territoire local.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-levigile-blue">
                Nos zones d'intervention dans l'{departmentName}
              </h3>
              
              <p className="mb-4">
                Notre équipe d'agents de sécurité intervient dans tout le département, notamment à :
              </p>
              
              <ul className="list-disc pl-6 mb-8 space-y-1">
                <li>Carcassonne et son agglomération</li>
                <li>Narbonne et le littoral</li>
                <li>Limoux et la région viticole</li>
                <li>Castelnaudary et le Lauragais</li>
                <li>Lézignan-Corbières et les Corbières</li>
              </ul>
              
              <p className="mb-8">
                Nous intervenons également dans les communes limitrophes, assurant ainsi une couverture optimale du territoire audois.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-levigile-blue">
                Services de sécurité spécifiques à l'{departmentName}
              </h3>
              
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li><strong>Sécurité résidentielle</strong> - Protection des maisons individuelles et résidences secondaires</li>
                <li><strong>Surveillance de commerces</strong> - Protection des boutiques en centre-ville et zones commerciales</li>
                <li><strong>Gardiennage viticole</strong> - Sécurisation des domaines, caves et installations viticoles</li>
                <li><strong>Sécurité touristique</strong> - Protection des sites touristiques majeurs comme la Cité de Carcassonne</li>
                <li><strong>Sécurité événementielle</strong> - Protection pour les festivals et événements culturels</li>
                <li><strong>Rondes de surveillance</strong> - Contrôle périodique de vos locaux professionnels et résidentiels</li>
              </ul>
            </div>
          </div>
        </section>
        
        <SpecificitesSection items={specificitesItems} />
        
        <FaqSection 
          items={faqItems} 
          title={`Questions fréquentes sur nos services dans l'${departmentName}`}
        />
        
        <CtaSection 
          title={`Besoin d'un devis pour votre sécurité dans l'${departmentName} ?`}
          subtitle="Nos experts sont disponibles pour étudier vos besoins spécifiques et vous proposer une solution sur mesure."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default AudePage;
