
import React from 'react';
import ServiceCard from './ServiceCard';
import { Shield, EyeOff, Flame, Users } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const toulouseCities = [
    "Toulouse", "Blagnac", "Colomiers", "Tournefeuille", "Muret", 
    "Saint-Orens", "Ramonville", "Balma", "L'Union", "Castanet-Tolosan"
  ];

  return (
    <section id="services" className="py-16 bg-levigile-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-levigile-blue">Nos services de sécurité</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            LeVigile propose une gamme complète de prestations de sécurité privée, 
            adaptées à vos besoins spécifiques dans tout le département de la Haute-Garonne.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            title="Ronde de sécurité" 
            description="Surveillance itinérante pour dissuader les intrusions et vérifier les accès. Passage régulier selon vos besoins." 
            icon={EyeOff}
            cities={toulouseCities}
          />
          
          <ServiceCard 
            title="Gardiennage" 
            description="Agents de sécurité statiques pour surveiller vos locaux, contrôler les accès et protéger vos biens 24h/24." 
            icon={Shield}
            cities={toulouseCities}
          />
          
          <ServiceCard 
            title="Sécurité incendie" 
            description="Agents SSIAP qualifiés pour la prévention incendie et l'assistance à l'évacuation dans les ERP et IGH." 
            icon={Flame}
            cities={toulouseCities}
          />
          
          <ServiceCard 
            title="Sécurité événementielle" 
            description="Protection pour vos événements professionnels ou privés : contrôle d'accès, gestion de foule, VIP." 
            icon={Users}
            cities={toulouseCities}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
