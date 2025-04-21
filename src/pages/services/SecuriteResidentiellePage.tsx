
import React from 'react';
import ServicePage from '@/components/ServicePage';

const SecuriteResidentiellePage: React.FC = () => {
  return (
    <ServicePage
      title="Sécurité Résidentielle"
      heroImage="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Securite%20Residentielle.webp"
      description="Nos solutions de sécurité résidentielle garantissent la tranquillité des habitants et la protection des biens communs dans les immeubles, résidences et lotissements, avec des services adaptés aux besoins spécifiques de chaque communauté."
      serviceDetails={[
        {
          title: "Gardiennage résidentiel",
          description: "Présence d'agents de sécurité assurant le contrôle des accès, la surveillance des parties communes et la prévention des actes malveillants."
        },
        {
          title: "Rondes de surveillance",
          description: "Patrouilles régulières dans l'ensemble de la résidence, vérification des points sensibles et dissuasion des intrusions."
        },
        {
          title: "Contrôle d'accès",
          description: "Gestion des entrées et sorties, vérification des visiteurs, maintien de la sécurité des accès et parkings."
        },
        {
          title: "Médiation résidentielle",
          description: "Intervention en cas de troubles, médiation lors de conflits entre résidents, maintien d'un cadre de vie harmonieux."
        },
        {
          title: "Surveillance temporaire",
          description: "Protection renforcée pendant les périodes sensibles (vacances, travaux) ou suite à des incidents dans le voisinage."
        },
        {
          title: "Conciergerie sécurisée",
          description: "Services combinant accueil, réception de colis, information des résidents et vigilance sécuritaire."
        }
      ]}
      benefits={[
        {
          title: "Tranquillité des résidents",
          description: "Un cadre de vie serein grâce à une présence rassurante et dissuasive qui limite les incidents."
        },
        {
          title: "Valorisation du patrimoine",
          description: "Un niveau de sécurité élevé contribue à maintenir et augmenter la valeur des biens immobiliers dans la résidence."
        },
        {
          title: "Prévention efficace",
          description: "Réduction significative des risques d'intrusion, de vandalisme et d'incivilités grâce à une présence visible."
        },
        {
          title: "Services personnalisés",
          description: "Prestations adaptées aux spécificités de chaque résidence : configuration, population, historique des incidents, etc."
        },
        {
          title: "Réactivité en cas d'incident",
          description: "Intervention rapide en cas de problème, coordination avec les services d'urgence si nécessaire."
        },
        {
          title: "Rapport coût-efficacité",
          description: "Solution mutualisée offrant un niveau de protection professionnel à un coût maîtrisé pour la copropriété."
        }
      ]}
      cta={{
        title: "Sécurisez votre résidence ou copropriété",
        description: "Contactez nos experts pour une évaluation personnalisée des besoins de votre résidence et découvrez nos solutions adaptées aux environnements résidentiels."
      }}
    />
  );
};

export default SecuriteResidentiellePage;

