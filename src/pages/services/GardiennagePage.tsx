import React from 'react';
import ServicePage from '@/components/ServicePage';

const GardiennagePage: React.FC = () => {
  return (
    <ServicePage
      title="Service de Gardiennage"
      heroImage="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//ronde-hero.jpg"
      description="Notre service de gardiennage professionnel assure la protection de vos locaux, sites industriels et espaces commerciaux 24h/24, 7j/7, avec des agents de sécurité qualifiés et formés pour répondre à tous types de situations."
      serviceDetails={[
        {
          title: "Surveillance statique",
          description: "Présence permanente d'un agent de sécurité sur votre site pour assurer un contrôle continu et dissuader toute tentative d'intrusion."
        },
        {
          title: "Rondes de surveillance",
          description: "Patrouilles régulières à intervalles aléatoires pour vérifier l'intégrité des accès et détecter toute anomalie sur l'ensemble de votre site."
        },
        {
          title: "Contrôle d'accès",
          description: "Gestion des entrées et sorties, vérification des identités et gestion des visiteurs pour un filtrage efficace des accès à vos locaux."
        },
        {
          title: "Télésurveillance",
          description: "Supervision à distance grâce à des systèmes de vidéosurveillance, permettant une intervention rapide en cas d'alerte."
        },
        {
          title: "Interventions sur alarme",
          description: "Équipes d'intervention disponibles 24h/24 pour répondre rapidement à toute alerte déclenchée sur votre site."
        },
        {
          title: "Gardiennage événementiel",
          description: "Protection temporaire lors d'événements spéciaux, inaugurations ou périodes à risque accru."
        }
      ]}
      benefits={[
        {
          title: "Protection continue",
          description: "Une présence dissuasive 24h/24 et 7j/7 qui réduit significativement les risques d'intrusion et de vandalisme."
        },
        {
          title: "Personnel qualifié",
          description: "Nos agents sont tous titulaires de la carte professionnelle et reçoivent des formations continues adaptées à vos besoins spécifiques."
        },
        {
          title: "Solutions sur mesure",
          description: "Nous adaptons nos prestations à vos besoins spécifiques et à la configuration de vos locaux pour une sécurité optimale."
        },
        {
          title: "Réactivité maximale",
          description: "Intervention rapide en cas d'incident grâce à nos équipes mobiles disponibles à tout moment."
        },
        {
          title: "Rapports détaillés",
          description: "Comptes rendus réguliers des activités de surveillance et des incidents éventuels pour un suivi optimal."
        },
        {
          title: "Continuité de service",
          description: "Organisation rigoureuse assurant une présence continue, même en cas d'imprévu (maladie, congés, etc.)."
        }
      ]}
      cta={{
        title: "Besoin d'un service de gardiennage professionnel ?",
        description: "Contactez nos experts dès maintenant pour obtenir un devis personnalisé et découvrir comment nous pouvons sécuriser vos locaux efficacement."
      }}
    />
  );
};

export default GardiennagePage;
