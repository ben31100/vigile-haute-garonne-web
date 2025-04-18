
import React from 'react';
import ServicePage from '@/components/ServicePage';

const SecuriteCynophilePage: React.FC = () => {
  return (
    <ServicePage
      title="Sécurité Cynophile"
      heroImage="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Agent%20cynophile%20levigile.png"
      description="Notre service de sécurité cynophile combine l'expertise de maîtres-chiens qualifiés et des chiens spécialement dressés pour offrir une solution de sécurité dissuasive et efficace pour la protection de vos sites et événements."
      serviceDetails={[
        {
          title: "Gardiennage avec chien",
          description: "Surveillance renforcée de sites sensibles grâce à la présence dissuasive d'équipes cynophiles expérimentées."
        },
        {
          title: "Rondes cynophiles",
          description: "Patrouilles régulières avec chien pour une détection optimale des intrusions et une couverture efficace des zones étendues."
        },
        {
          title: "Sécurité événementielle",
          description: "Protection renforcée pour vos événements, avec des équipes cynophiles adaptées aux rassemblements de personnes."
        },
        {
          title: "Intervention sur alarme",
          description: "Réponse rapide et sécurisée en cas d'alerte, avec la capacité dissuasive supplémentaire du chien."
        },
        {
          title: "Protection de sites isolés",
          description: "Solution particulièrement adaptée aux sites étendus, isolés ou difficiles à sécuriser par des moyens conventionnels."
        },
        {
          title: "Détection spécialisée",
          description: "Selon les besoins, possibilité de détection d'objets ou substances spécifiques grâce au flair des chiens entraînés."
        }
      ]}
      benefits={[
        {
          title: "Effet dissuasif puissant",
          description: "La présence visible d'une équipe cynophile constitue un des moyens de dissuasion les plus efficaces contre les intrusions."
        },
        {
          title: "Détection supérieure",
          description: "Les capacités sensorielles du chien permettent de repérer des intrus ou des anomalies qu'un agent seul pourrait manquer."
        },
        {
          title: "Couverture étendue",
          description: "Une équipe cynophile peut surveiller efficacement des zones plus vastes qu'un agent de sécurité traditionnel."
        },
        {
          title: "Adaptabilité",
          description: "Solution flexible qui s'adapte à de nombreux contextes : sites industriels, chantiers, entrepôts, événements, etc."
        },
        {
          title: "Équipes spécialement formées",
          description: "Nos maîtres-chiens sont certifiés et régulièrement évalués, et nos chiens sont sélectionnés et entraînés pour la sécurité."
        },
        {
          title: "Aspect légal encadré",
          description: "Service répondant à toutes les exigences légales en matière de sécurité cynophile, avec des équipes régulièrement formées."
        }
      ]}
      cta={{
        title: "Votre site nécessite une protection renforcée ?",
        description: "Contactez nos experts en sécurité cynophile pour évaluer vos besoins et découvrir comment nos équipes peuvent renforcer efficacement la sécurité de vos installations."
      }}
    />
  );
};

export default SecuriteCynophilePage;
