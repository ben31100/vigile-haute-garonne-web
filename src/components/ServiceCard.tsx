
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  cities?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, cities }) => {
  return (
    <div className="service-card bg-white p-6 rounded-lg shadow-lg border-t-4 border-levigile-blue hover:border-levigile-red transition-colors duration-300">
      <div className="bg-levigile-lightgray p-3 rounded-full inline-block mb-4">
        <Icon className="h-8 w-8 text-levigile-blue" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-levigile-blue">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      
      {cities && cities.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-levigile-gray mb-2">Zones d'intervention :</h4>
          <p className="text-xs text-gray-600">
            {cities.join(', ')}
          </p>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
