
import React from 'react';
import ServicePage from '@/components/ServicePage';

const GardiennagePage: React.FC = () => {
  return (
    <ServicePage
      title="Services de Gardiennage Professionnel"
      heroImage="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Services%20de%20Gardiennage%20Professionnel%20levigile.webp"
      description="Services de gardiennage professionnels par Levigile. Sécurité et surveillance adaptées à vos besoins. Nos agents qualifiés assurent la protection de vos locaux, de vos biens et de votre personnel, avec des solutions pour chaque secteur d'activité."
      serviceDetails={[
        {
          title: "Gardiennage d'entreprise",
          description: "Protection complète de vos locaux professionnels avec contrôle d'accès, surveillance des zones sensibles et gestion des incidents."
        },
        {
          title: "Gardiennage de chantier",
          description: "Sécurisation de vos chantiers contre le vol, le vandalisme et les intrusions, de jour comme de nuit, y compris les week-ends et jours fériés."
        },
        {
          title: "Gardiennage d'entrepôt",
          description: "Protection de vos stocks et marchandises avec contrôle des entrées/sorties et surveillance permanente de vos espaces de stockage."
        },
        {
          title: "Gardiennage de commerce",
          description: "Sécurisation de vos points de vente contre le vol à l'étalage et les incivilités, avec une présence discrète mais efficace."
        },
        {
          title: "Gardiennage temporaire",
          description: "Solutions ponctuelles pour vos besoins spécifiques : fermetures annuelles, travaux, absences prolongées ou situations exceptionnelles."
        },
        {
          title: "Gardiennage résidentiel",
          description: "Protection de résidences collectives, lotissements ou propriétés privées avec contrôle des accès et surveillance des parties communes."
        }
      ]}
      benefits={[
        {
          title: "Agents qualifiés",
          description: "Personnel formé et certifié, régulièrement évalué et encadré"
        },
        {
          title: "Disponibilité 24/7",
          description: "Service continu, y compris les week-ends et jours fériés"
        },
        {
          title: "Reporting détaillé",
          description: "Comptes rendus réguliers et transparence totale"
        },
        {
          title: "Réactivité",
          description: "Intervention rapide et efficace en cas d'incident"
        }
      ]}
      cta={{
        title: "Besoin d’un service de gardiennage ? Obtenez votre devis",
        description: "Contactez Levigile dès maintenant pour une étude personnalisée de vos besoins en sécurité (entreprise, chantier, entrepôt, commerce, résidence…). Notre équipe vous accompagne et vous conseille avec professionnalisme."
      }}
    />
  );
};

export default GardiennagePage;

