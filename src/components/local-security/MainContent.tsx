
import React from 'react';
import { Check, Shield, Building, Users, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CityData {
  id: string;
  name: string;
  postalCode: string;
  description: string;
  neighborhoods: string[];
  nearbyAreas: string[];
  specificServices: string[];
  metaTitle?: string;
  metaDescription?: string;
}

interface MainContentProps {
  cityName: string;
  neighborhoods: string[];
  nearbyAreas: string[];
  specificServices: string[];
}

const MainContent: React.FC<MainContentProps> = ({ cityName, neighborhoods, nearbyAreas, specificServices }) => {
  return (
    <div className="lg:col-span-2">
      <h2 className="text-2xl font-bold mb-6 text-levigile-blue border-b pb-3 border-gray-200">
        Services de sécurité privée à {cityName}
      </h2>
      
      <div className="prose prose-slate max-w-none mb-8">
        <p className="text-lg leading-relaxed">
          LeVigile est votre partenaire de confiance pour tous vos besoins en sécurité à {cityName}. 
          Notre équipe d'agents qualifiés intervient dans l'ensemble de la commune et propose une protection 
          adaptée aux spécificités locales.
        </p>
        
        <p className="mb-6">
          Que vous soyez une entreprise, un commerce, un particulier ou un organisateur d'événement 
          à {cityName}, nos services de sécurité vous garantissent tranquillité d'esprit et 
          protection optimale.
        </p>
      </div>
      
      {/* Featured services cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Card className="overflow-hidden border-l-4 border-l-levigile-blue shadow-md">
          <CardContent className="p-6">
            <div className="flex items-start">
              <div className="mr-4 p-3 bg-levigile-blue/10 rounded-md">
                <Building className="h-6 w-6 text-levigile-blue" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-levigile-blue">Gardiennage à {cityName}</h3>
                <p className="text-gray-600">Protection 24/7 de vos locaux professionnels avec des agents formés et certifiés.</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-l-4 border-l-levigile-red shadow-md">
          <CardContent className="p-6">
            <div className="flex items-start">
              <div className="mr-4 p-3 bg-levigile-red/10 rounded-md">
                <Users className="h-6 w-6 text-levigile-red" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-levigile-blue">Événementiel à {cityName}</h3>
                <p className="text-gray-600">Sécurisation de vos événements privés et professionnels dans toute la région de {cityName}.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <h3 className="text-xl font-semibold mt-8 mb-4 text-levigile-blue flex items-center">
        <MapPin className="h-5 w-5 mr-2 text-levigile-red" />
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
      
      <p className="mb-6">
        Notre proximité nous permet d'offrir des temps d'intervention rapides et un service 
        personnalisé selon les besoins spécifiques de votre zone à {cityName}.
      </p>
      
      <h3 className="text-xl font-semibold mt-8 mb-4 text-levigile-blue flex items-center">
        <Clock className="h-5 w-5 mr-2 text-levigile-red" />
        Services spécifiques à {cityName}
      </h3>
      
      <ul className="mb-8 space-y-3">
        {specificServices.map((service, index) => (
          <li key={index} className="flex items-start bg-gray-50 p-3 rounded-md">
            <Check className="h-5 w-5 text-levigile-red mr-3 shrink-0 mt-0.5" />
            <span>{service}</span>
          </li>
        ))}
      </ul>
      
      <p className="mb-6">
        Nous intervenons également dans les communes voisines de {cityName}, notamment 
        {nearbyAreas.map((area, index) => (
          <span key={index}>
            {index === 0 ? ' ' : index === nearbyAreas.length - 1 ? ' et ' : ', '}
            <strong>{area}</strong>
          </span>
        ))}.
      </p>
      
      <div className="mt-10 p-6 bg-levigile-lightgray rounded-lg shadow-inner">
        <h3 className="text-xl font-semibold mb-4 text-levigile-blue">
          Pourquoi choisir LeVigile à {cityName} ?
        </h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-levigile-red mr-3 shrink-0 mt-0.5" />
            <span>Agents de sécurité certifiés et formés aux spécificités de {cityName}</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-levigile-red mr-3 shrink-0 mt-0.5" />
            <span>Intervention rapide dans un rayon de 20 km autour de {cityName}</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-levigile-red mr-3 shrink-0 mt-0.5" />
            <span>Surveillance 24h/24 et 7j/7, jours fériés inclus</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-levigile-red mr-3 shrink-0 mt-0.5" />
            <span>Solutions adaptées aux enjeux locaux de {cityName}</span>
          </li>
        </ul>
        
        <div className="mt-6 text-center">
          <Button className="bg-levigile-red hover:bg-red-600 text-white text-lg py-6 w-full sm:w-auto sm:px-8">
            Contacter notre agence de {cityName}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
