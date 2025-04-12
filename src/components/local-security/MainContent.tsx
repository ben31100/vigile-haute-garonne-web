
import React from 'react';
import { Check } from 'lucide-react';

interface MainContentProps {
  cityName: string;
  neighborhoods: string[];
  nearbyAreas: string[];
  specificServices: string[];
}

const MainContent: React.FC<MainContentProps> = ({ cityName, neighborhoods, nearbyAreas, specificServices }) => {
  return (
    <div className="lg:col-span-2">
      <h2 className="text-2xl font-bold mb-4 text-levigile-blue">
        Services de sécurité privée à {cityName}
      </h2>
      
      <p className="mb-4">
        LeVigile est votre partenaire de confiance pour tous vos besoins en sécurité à {cityName}. 
        Notre équipe d'agents qualifiés intervient dans l'ensemble de la commune et propose une protection 
        adaptée aux spécificités locales.
      </p>
      
      <p className="mb-4">
        Que vous soyez une entreprise, un commerce, un particulier ou un organisateur d'événement 
        à {cityName}, nos services de sécurité vous garantissent tranquillité d'esprit et 
        protection optimale.
      </p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3 text-levigile-blue">
        Notre expertise à {cityName}
      </h3>
      
      <p className="mb-4">
        Implantée localement, notre équipe connaît parfaitement {cityName} et ses enjeux 
        sécuritaires. Nous intervenons dans tous les quartiers, notamment 
        {neighborhoods.map((neighborhood, index) => (
          <span key={index}>
            {index === 0 ? ' ' : index === neighborhoods.length - 1 ? ' et ' : ', '}
            <strong>{neighborhood}</strong>
          </span>
        ))}.
      </p>
      
      <p className="mb-4">
        Notre proximité nous permet d'offrir des temps d'intervention rapides et un service 
        personnalisé selon les besoins spécifiques de votre zone.
      </p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3 text-levigile-blue">
        Services spécifiques à {cityName}
      </h3>
      
      <ul className="mb-6 space-y-2">
        {specificServices.map((service, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-levigile-red mr-2 shrink-0 mt-1" />
            <span>{service}</span>
          </li>
        ))}
      </ul>
      
      <p className="mb-4">
        Nous intervenons également dans les communes voisines de {cityName}, notamment 
        {nearbyAreas.map((area, index) => (
          <span key={index}>
            {index === 0 ? ' ' : index === nearbyAreas.length - 1 ? ' et ' : ', '}
            <strong>{area}</strong>
          </span>
        ))}.
      </p>
      
      <div className="mt-8 p-5 bg-levigile-lightgray rounded-lg">
        <h3 className="text-xl font-semibold mb-3 text-levigile-blue">
          Pourquoi choisir LeVigile à {cityName} ?
        </h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-levigile-red mr-2 shrink-0 mt-1" />
            <span>Agents de sécurité certifiés et formés aux spécificités de {cityName}</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-levigile-red mr-2 shrink-0 mt-1" />
            <span>Intervention rapide dans un rayon de 20 km autour de {cityName}</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-levigile-red mr-2 shrink-0 mt-1" />
            <span>Surveillance 24h/24 et 7j/7, jours fériés inclus</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-levigile-red mr-2 shrink-0 mt-1" />
            <span>Solutions adaptées aux enjeux locaux de {cityName}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainContent;
