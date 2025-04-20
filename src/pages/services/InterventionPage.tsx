
import React from 'react';
import ServicePage from '@/components/ServicePage';

const InterventionPage: React.FC = () => {
  return (
    <ServicePage
      title="Service d'Intervention"
      heroImage="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Securite%20evenementielle.webp"
      description="Notre service d'intervention rapide assure une réponse immédiate en cas d'alerte ou d'incident sur vos sites. Nos équipes mobiles sont prêtes à intervenir 24h/24 pour sécuriser vos locaux et gérer les situations d'urgence."
      serviceDetails={[
        {
          title: "Intervention sur alarme",
          description: "Réponse rapide suite au déclenchement d'alarmes de sécurité, avec vérification sur place et sécurisation des lieux."
        },
        {
          title: "Rondes mobiles",
          description: "Patrouilles régulières de vérification sur plusieurs sites, avec itinéraires et horaires variables pour une efficacité maximale."
        },
        {
          title: "Levée de doute",
          description: "Vérification physique suite à une alerte technique ou de sécurité pour confirmer ou infirmer un incident."
        },
        {
          title: "Gestion des incidents",
          description: "Prise en charge professionnelle des situations problématiques : intrusion, dégradation, sinistre, etc."
        },
        {
          title: "Rapport détaillé",
          description: "Compte-rendu complet après chaque intervention, documentant les constatations et les actions entreprises."
        },
        {
          title: "Coordination avec les autorités",
          description: "Liaison avec les forces de l'ordre et services d'urgence si nécessaire, facilitation de leur intervention."
        }
      ]}
      benefits={[
        {
          title: "Réactivité maximale",
          description: "Équipes disponibles 24h/24 et 7j/7, prêtes à intervenir rapidement sur l'ensemble de la région toulousaine."
        },
        {
          title: "Limitation des dommages",
          description: "Une intervention rapide permet de réduire l'impact d'incidents tels qu'intrusions ou sinistres sur votre activité."
        },
        {
          title: "Personnel qualifié",
          description: "Agents expérimentés et formés à la gestion de crise, capables d'évaluer les situations et de prendre les décisions appropriées."
        },
        {
          title: "Solution économique",
          description: "Alternative plus abordable qu'un gardiennage permanent, tout en assurant une protection efficace de vos biens."
        },
        {
          title: "Suivi et traçabilité",
          description: "Documentation rigoureuse de chaque intervention, permettant un suivi précis et des ajustements préventifs si nécessaire."
        },
        {
          title: "Tranquillité d'esprit",
          description: "La certitude qu'en cas d'incident, des professionnels prennent en charge la situation sans délai."
        }
      ]}
      cta={{
        title: "Besoin d'un service d'intervention fiable ?",
        description: "Contactez-nous dès maintenant pour discuter de vos besoins en intervention et rondes mobiles. Nous vous proposerons une solution adaptée à votre situation."
      }}
    />
  );
};

export default InterventionPage;
