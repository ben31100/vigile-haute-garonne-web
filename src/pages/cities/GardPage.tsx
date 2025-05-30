
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CityHero from '@/components/cities/CityHero';
import SpecificitesSection, { SpecificiteItem } from '@/components/cities/SpecificitesSection';
import CtaSection from '@/components/cities/CtaSection';
import FaqSection from '@/components/cities/FaqSection';
import { Shield, MapPin, Calendar, Building, Users } from 'lucide-react';

const GardPage: React.FC = () => {
  const departmentName = "Gard";
  const postalCode = "30";
  
  // Define the specificités items with proper structure
  const specificitesItems: SpecificiteItem[] = [
    {
      icon: MapPin,
      title: "Protection des zones résidentielles",
      description: "Surveillance des quartiers résidentiels dans tout le Gard pour assurer la tranquillité des habitants."
    },
    {
      icon: Building,
      title: "Sécurité des zones commerciales",
      description: "Services adaptés pour les commerces et grandes surfaces dans les agglomérations de Nîmes, Alès et Bagnols-sur-Cèze."
    },
    {
      icon: Shield,
      title: "Gardiennage de sites viticoles",
      description: "Protection spécialisée pour les domaines viticoles, caves et espaces de production du département."
    },
    {
      icon: Calendar,
      title: "Sécurité événementielle",
      description: "Dispositifs de sécurité pour les ferias, festivals et manifestations culturelles si nombreuses dans le Gard."
    },
    {
      icon: Users,
      title: "Protection du patrimoine",
      description: "Surveillance des sites historiques et touristiques comme le Pont du Gard, les arènes de Nîmes et autres monuments."
    }
  ];

  // FAQ items for Gard
  const faqItems = [
    {
      question: "Quels sont les services de sécurité proposés par LeVigile dans le Gard ?",
      answer: `LeVigile propose dans le Gard (${postalCode}) des services complets de sécurité privée incluant la protection des zones résidentielles, la sécurité des zones commerciales, le gardiennage de sites viticoles, la sécurité événementielle pour les ferias et festivals, et la protection du patrimoine historique.`
    },
    {
      question: "Comment contacter LeVigile pour un devis de sécurité dans le Gard ?",
      answer: "Pour obtenir un devis gratuit et personnalisé pour vos besoins en sécurité dans le Gard, contactez-nous au 05 54 54 64 28 ou par email à contact@levigile.fr. Notre équipe locale vous répondra sous 24h avec une proposition adaptée à votre situation."
    },
    {
      question: "LeVigile propose-t-il des services spécifiques pour les ferias et événements taurins du Gard ?",
      answer: "Oui, LeVigile a développé une expertise particulière pour la sécurité des ferias et événements taurins si caractéristiques du Gard. Nos agents sont formés aux spécificités de ces manifestations, à la gestion des foules festives et à la coordination avec les autorités locales pour assurer le bon déroulement de ces événements traditionnels."
    },
    {
      question: "Comment assurez-vous la sécurité des sites touristiques comme le Pont du Gard ?",
      answer: "Pour les sites patrimoniaux majeurs comme le Pont du Gard, LeVigile déploie des dispositifs de sécurité discrets mais efficaces, respectueux de la qualité du site. Nos agents assurent la régulation des flux de visiteurs, la prévention des actes de vandalisme et la protection générale du site en coordination avec les gestionnaires du monument."
    },
    {
      question: "Proposez-vous des services adaptés aux domaines viticoles gardois ?",
      answer: "Absolument, LeVigile offre des services sur mesure pour les domaines viticoles du Gard, comprenant la surveillance des vignobles, la protection des chais, la sécurisation des stocks et équipements, et des dispositifs renforcés pendant les vendanges et événements œnotouristiques. Nos agents connaissent parfaitement les enjeux spécifiques de la filière viticole gardoise."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Sécurité dans le Gard - Protection professionnelle | LeVigile</title>
        <meta 
          name="description" 
          content="Entreprise de sécurité dans le Gard (30). Gardiennage, rondes et surveillance 24/7 pour particuliers et professionnels par des agents certifiés."
        />
        <link rel="canonical" href="https://www.levigile.fr/gard.html" />
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
                Services de sécurité dans le {departmentName}
              </h2>
              
              <p className="mb-4">
                LeVigile propose une gamme complète de services de sécurité adaptés aux besoins spécifiques du {departmentName}, 
                territoire méditerranéen à l'identité forte. Notre équipe d'agents qualifiés intervient rapidement pour 
                assurer la protection des biens et des personnes dans l'ensemble du département.
              </p>
              
              <p className="mb-8">
                Que vous soyez un particulier, une entreprise viticole, un commerce ou un organisateur d'événement dans le {departmentName}, 
                nos solutions de sécurité s'adaptent à vos besoins et contraintes avec une excellente connaissance du territoire local.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-levigile-blue">
                Nos zones d'intervention dans le {departmentName}
              </h3>
              
              <p className="mb-4">
                Notre équipe d'agents de sécurité intervient dans tout le département, notamment à :
              </p>
              
              <ul className="list-disc pl-6 mb-8 space-y-1">
                <li>Nîmes et son agglomération</li>
                <li>Alès et le bassin alésien</li>
                <li>Bagnols-sur-Cèze et la vallée du Rhône</li>
                <li>Le Grau-du-Roi et le littoral</li>
                <li>Uzès et le Pont du Gard</li>
              </ul>
              
              <p className="mb-8">
                Nous intervenons également dans les communes rurales et touristiques, assurant ainsi une couverture optimale de l'ensemble du territoire gardois.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-levigile-blue">
                Services de sécurité spécifiques au {departmentName}
              </h3>
              
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li><strong>Sécurité résidentielle</strong> - Protection des maisons individuelles et résidences secondaires</li>
                <li><strong>Surveillance de commerces</strong> - Protection des boutiques en centre-ville et zones commerciales</li>
                <li><strong>Gardiennage viticole</strong> - Sécurisation des domaines et caves viticoles</li>
                <li><strong>Sécurité touristique</strong> - Protection des sites touristiques majeurs</li>
                <li><strong>Sécurité événementielle</strong> - Protection pour les ferias, festivals et événements culturels</li>
                <li><strong>Rondes de surveillance</strong> - Contrôle périodique de vos locaux professionnels et résidentiels</li>
              </ul>
            </div>
          </div>
        </section>
        
        <SpecificitesSection items={specificitesItems} />
        
        <FaqSection 
          items={faqItems} 
          title={`Questions fréquentes sur nos services dans le ${departmentName}`}
        />
        
        <CtaSection 
          title={`Besoin d'un devis pour votre sécurité dans le ${departmentName} ?`}
          subtitle="Nos experts sont disponibles pour étudier vos besoins spécifiques et vous proposer une solution sur mesure."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default GardPage;
