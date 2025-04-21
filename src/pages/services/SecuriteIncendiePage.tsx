
import React from 'react';
import ServicePage from '@/components/ServicePage';

const SecuriteIncendiePage: React.FC = () => {
  return (
    <ServicePage
      title="Sécurité Incendie"
      heroImage="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//securite%20incendie%20levigile.webp"
      description="Nos services de sécurité incendie associent prévention, surveillance et intervention rapide pour protéger efficacement les personnes et les biens contre les risques d'incendie dans tous types d'établissements."
      serviceDetails={[
        {
          title: "Agents SSIAP",
          description: "Présence d'agents qualifiés en Sécurité Incendie et Assistance à Personnes, formés pour surveiller et intervenir en cas de départ de feu."
        },
        {
          title: "Prévention des risques",
          description: "Inspection régulière des équipements, détection des dangers potentiels, vérification de l'accessibilité des issues de secours."
        },
        {
          title: "Intervention première urgence",
          description: "Capacité d'intervention immédiate en cas de départ de feu, avec utilisation des moyens d'extinction appropriés."
        },
        {
          title: "Évacuation",
          description: "Organisation et gestion des procédures d'évacuation, guidage des occupants vers les issues de secours en toute sécurité."
        },
        {
          title: "Formation du personnel",
          description: "Sensibilisation et formation de vos équipes aux gestes de première intervention et aux procédures d'évacuation."
        },
        {
          title: "Coordination avec les secours",
          description: "Accueil et orientation des sapeurs-pompiers, transmission des informations essentielles pour faciliter leur intervention."
        }
      ]}
      benefits={[
        {
          title: "Conformité réglementaire",
          description: "Respect des obligations légales en matière de sécurité incendie dans les ERP et autres établissements soumis à réglementation."
        },
        {
          title: "Réduction des risques",
          description: "Détection précoce des dangers potentiels et mise en place de mesures préventives adaptées."
        },
        {
          title: "Intervention rapide",
          description: "En cas d'incident, une réaction immédiate qui peut faire toute la différence avant l'arrivée des pompiers."
        },
        {
          title: "Personnel spécialisé",
          description: "Agents titulaires des diplômes SSIAP 1, 2 ou 3 selon les besoins, avec formations continues et recyclages réguliers."
        },
        {
          title: "Protection des personnes",
          description: "Priorité absolue à la sécurité des occupants, avec des procédures éprouvées pour les situations d'urgence."
        },
        {
          title: "Solution intégrée",
          description: "Possibilité de combiner sécurité incendie et sûreté classique pour une protection complète de votre établissement."
        }
      ]}
      cta={{
        title: "Protégez votre établissement contre les risques d'incendie",
        description: "Contactez nos spécialistes en sécurité incendie pour une évaluation complète de vos besoins et une solution conforme aux réglementations en vigueur."
      }}
    />
  );
};

export default SecuriteIncendiePage;

