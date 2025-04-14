
import React from 'react';
import { Check, Shield, Building, Users, MapPin, Clock, Star, Briefcase, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
      
      {/* Featured services cards - Enhanced layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Card className="overflow-hidden border-l-4 border-l-levigile-blue shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <CardContent className="p-6">
            <div className="flex items-start">
              <div className="mr-4 p-3 bg-levigile-blue/10 rounded-full">
                <Building className="h-6 w-6 text-levigile-blue" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-levigile-blue">Gardiennage à {cityName}</h3>
                <p className="text-gray-600">Protection 24/7 de vos locaux professionnels avec des agents formés et certifiés.</p>
                <ul className="mt-3 space-y-1">
                  <li className="flex items-center text-sm text-gray-500">
                    <CheckCircle2 className="h-4 w-4 text-levigile-red mr-2" />
                    <span>Contrôle d'accès</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <CheckCircle2 className="h-4 w-4 text-levigile-red mr-2" />
                    <span>Surveillance statique</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-l-4 border-l-levigile-red shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <CardContent className="p-6">
            <div className="flex items-start">
              <div className="mr-4 p-3 bg-levigile-red/10 rounded-full">
                <Users className="h-6 w-6 text-levigile-red" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-levigile-blue">Événementiel à {cityName}</h3>
                <p className="text-gray-600">Sécurisation de vos événements privés et professionnels dans toute la région de {cityName}.</p>
                <ul className="mt-3 space-y-1">
                  <li className="flex items-center text-sm text-gray-500">
                    <CheckCircle2 className="h-4 w-4 text-levigile-red mr-2" />
                    <span>Gestion des foules</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <CheckCircle2 className="h-4 w-4 text-levigile-red mr-2" />
                    <span>Contrôle des accès</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-l-4 border-l-levigile-blue shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 md:col-span-2">
          <CardContent className="p-6">
            <div className="flex items-start">
              <div className="mr-4 p-3 bg-blue-100 rounded-full">
                <Shield className="h-6 w-6 text-levigile-blue" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-levigile-blue">Services de sécurité sur mesure à {cityName}</h3>
                <p className="text-gray-600">Solutions personnalisées pour répondre à vos besoins spécifiques à {cityName}.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="h-4 w-4 text-levigile-red mr-2" />
                    <span>Rondes mobiles</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="h-4 w-4 text-levigile-red mr-2" />
                    <span>Intervention sur alarme</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="h-4 w-4 text-levigile-red mr-2" />
                    <span>Sécurité chantier</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="h-4 w-4 text-levigile-red mr-2" />
                    <span>Protection de personnes</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <h3 className="text-xl font-semibold mt-8 mb-4 text-levigile-blue flex items-center">
        <MapPin className="h-5 w-5 mr-2 text-levigile-red" />
        Notre expertise à {cityName}
      </h3>
      
      <div className="bg-gray-50 p-5 rounded-lg mb-6">
        <p className="mb-4">
          Implantée localement, notre équipe connaît parfaitement {cityName} et ses enjeux 
          sécuritaires. Nous intervenons dans tous les quartiers, notamment 
          {neighborhoods.map((neighborhood, index) => (
            <span key={index}>
              {index === 0 ? ' ' : index === neighborhoods.length - 1 ? ' et ' : ', '}
              <strong className="text-levigile-blue">{neighborhood}</strong>
            </span>
          ))}.
        </p>
        
        <p className="mb-2">
          Notre proximité nous permet d'offrir des temps d'intervention rapides et un service 
          personnalisé selon les besoins spécifiques de votre zone à {cityName}.
        </p>
      </div>
      
      <h3 className="text-xl font-semibold mt-8 mb-4 text-levigile-blue flex items-center">
        <Briefcase className="h-5 w-5 mr-2 text-levigile-red" />
        Services spécifiques à {cityName}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
        {specificServices.map((service, index) => (
          <div key={index} className="flex items-start bg-gray-50 p-4 rounded-md hover:bg-gray-100 transition-colors">
            <Check className="h-5 w-5 text-levigile-red mr-3 shrink-0 mt-0.5" />
            <span className="text-gray-700">{service}</span>
          </div>
        ))}
      </div>
      
      <div className="p-5 border border-gray-200 rounded-lg mb-8">
        <h4 className="font-medium flex items-center text-levigile-blue mb-3">
          <MapPin className="h-4 w-4 mr-2 text-levigile-red" />
          Communes voisines où nous intervenons également
        </h4>
        <div className="flex flex-wrap gap-2">
          {nearbyAreas.map((area, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              {area}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mt-10 p-6 bg-gradient-to-br from-levigile-lightgray to-white rounded-lg shadow-inner">
        <h3 className="text-xl font-semibold mb-6 text-levigile-blue text-center">
          Pourquoi choisir LeVigile à {cityName} ?
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="bg-levigile-red/10 p-2 rounded-full mr-3">
                <Check className="h-5 w-5 text-levigile-red" />
              </div>
              <div>
                <h4 className="font-medium text-levigile-blue mb-1">Agents qualifiés</h4>
                <p className="text-sm text-gray-600">Formés aux spécificités de {cityName}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="bg-levigile-red/10 p-2 rounded-full mr-3">
                <Check className="h-5 w-5 text-levigile-red" />
              </div>
              <div>
                <h4 className="font-medium text-levigile-blue mb-1">Intervention rapide</h4>
                <p className="text-sm text-gray-600">Dans un rayon de 20 km autour de {cityName}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="bg-levigile-red/10 p-2 rounded-full mr-3">
                <Check className="h-5 w-5 text-levigile-red" />
              </div>
              <div>
                <h4 className="font-medium text-levigile-blue mb-1">Surveillance 24h/24</h4>
                <p className="text-sm text-gray-600">7j/7, jours fériés inclus</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="bg-levigile-red/10 p-2 rounded-full mr-3">
                <Check className="h-5 w-5 text-levigile-red" />
              </div>
              <div>
                <h4 className="font-medium text-levigile-blue mb-1">Solutions adaptées</h4>
                <p className="text-sm text-gray-600">Aux enjeux locaux de {cityName}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Button className="bg-levigile-red hover:bg-red-700 text-white text-lg py-6 px-8 rounded-lg transform transition hover:scale-105">
            Contacter notre agence de {cityName}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
