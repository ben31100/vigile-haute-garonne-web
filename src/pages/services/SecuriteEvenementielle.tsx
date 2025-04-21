
import React from 'react';
import ServicePage from '@/components/ServicePage';

const SecuriteEvenementielle: React.FC = () => {
  return (
    <ServicePage
      title="Sécurité Événementielle"
      heroImage="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Securite%20evenementielle.webp"
      description="Nous assurons la sécurité de tous types d'événements, de la réunion professionnelle aux grands rassemblements, avec des agents formés aux spécificités de la gestion de foule et de la sécurité événementielle."
      serviceDetails={[
        {
          title: "Contrôle d'accès événementiel",
          description: "Filtrage et vérification des entrées, gestion des invitations et accréditations, prévention des intrusions non autorisées."
        },
        {
          title: "Sécurisation de l'espace",
          description: "Surveillance des zones sensibles, protection des équipements et des personnalités, rondes préventives durant l'événement."
        },
        {
          title: "Gestion de foule",
          description: "Orientation et canalisation des flux de visiteurs, prévention des mouvements de foule, intervention en cas d'incident."
        },
        {
          title: "Prévention des risques",
          description: "Identification des menaces potentielles, mise en place de mesures préventives adaptées, coordination avec les services de secours."
        },
        {
          title: "Agents spécialisés",
          description: "Personnel formé aux spécificités de l'événementiel, capables de maintenir une ambiance sereine tout en assurant la sécurité."
        },
        {
          title: "Dispositif sur mesure",
          description: "Adaptation du nombre d'agents et des moyens techniques selon l'ampleur de votre événement et ses particularités."
        }
      ]}
      benefits={[
        {
          title: "Sérénité pour les organisateurs",
          description: "Déléguez la sécurité à des professionnels pour vous concentrer sur l'organisation et le contenu de votre événement."
        },
        {
          title: "Image professionnelle",
          description: "Des agents en tenue, courtois et professionnels, qui valorisent l'image de votre événement tout en assurant la sécurité."
        },
        {
          title: "Gestion des situations délicates",
          description: "Personnel formé à la désescalade des conflits et à la gestion des comportements problématiques sans perturber l'événement."
        },
        {
          title: "Adaptation en temps réel",
          description: "Capacité d'ajuster le dispositif pendant l'événement en fonction de l'évolution de la situation et des besoins."
        },
        {
          title: "Conformité réglementaire",
          description: "Respect des normes légales en matière de sécurité événementielle et d'encadrement des rassemblements publics."
        },
        {
          title: "Coordination avec les autorités",
          description: "Liaison efficace avec les services publics de sécurité et de secours si nécessaire."
        }
      ]}
      cta={{
        title: "Vous organisez un événement ?",
        description: "Contactez-nous pour discuter de vos besoins en sécurité et obtenir une proposition adaptée à la spécificité de votre événement."
      }}
    />
  );
};

export default SecuriteEvenementielle;

