
import React from 'react';
import ServicePage from '@/components/ServicePage';

const SecuriteMagasinPage: React.FC = () => {
  return (
    <ServicePage
      title="Sécurité Magasin"
      heroImage="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Securite%20Magasin.webp"
      description="Nos solutions de sécurité pour commerces et grandes surfaces allient protection des biens, prévention des vols et accueil du public, pour une expérience d'achat sereine et sécurisée pour vos clients et collaborateurs."
      serviceDetails={[
        {
          title: "Agents de sécurité en magasin",
          description: "Présence visible d'agents formés pour dissuader les actes malveillants tout en préservant une ambiance d'achat agréable."
        },
        {
          title: "Surveillance discrète",
          description: "Agents en civil pour la détection des vols à l'étalage et comportements suspects sans perturber l'expérience client."
        },
        {
          title: "Contrôle des accès",
          description: "Gestion des entrées et sorties, filtrage sélectif, surveillance des issues de secours et zones réservées."
        },
        {
          title: "Prévention des vols",
          description: "Stratégies combinant présence humaine et dispositifs techniques pour réduire efficacement la démarque inconnue."
        },
        {
          title: "Gestion de crise",
          description: "Intervention professionnelle en cas d'incident (vol, agression, comportement inapproprié) avec maîtrise des techniques d'interpellation."
        },
        {
          title: "Protection des caisses",
          description: "Sécurisation des zones sensibles comme les caisses et les dépôts d'espèces, accompagnement lors des transferts de fonds."
        }
      ]}
      benefits={[
        {
          title: "Réduction des pertes",
          description: "Diminution significative de la démarque inconnue grâce à une présence dissuasive et des méthodes de détection efficaces."
        },
        {
          title: "Image positive",
          description: "Des agents formés à l'accueil qui renforcent le sentiment de sécurité sans créer d'atmosphère oppressante."
        },
        {
          title: "Protection du personnel",
          description: "Sécurisation des employés face aux risques d'agression ou de situations conflictuelles avec certains clients."
        },
        {
          title: "Gestion professionnelle des incidents",
          description: "Prise en charge rapide et discrète des situations problématiques, limitant leur impact sur l'activité commerciale."
        },
        {
          title: "Flexibilité du dispositif",
          description: "Adaptation de notre présence selon vos horaires, affluence, périodes sensibles (soldes, fêtes) ou besoins spécifiques."
        },
        {
          title: "Agents spécialisés",
          description: "Personnel formé aux spécificités de la sécurité en commerce, alliant vigilance et sens du service client."
        }
      ]}
      cta={{
        title: "Protégez votre commerce et vos clients",
        description: "Contactez nos experts en sécurité commerciale pour une évaluation personnalisée de vos besoins et une proposition adaptée à votre établissement."
      }}
    />
  );
};

export default SecuriteMagasinPage;

