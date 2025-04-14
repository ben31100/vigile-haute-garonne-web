
import React from 'react';
import { Shield, PhoneCall, Clock, MapPin, Calendar, Star, AlertCircle, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface SidebarProps {
  cityName: string;
}

const Sidebar: React.FC<SidebarProps> = ({ cityName }) => {
  return (
    <div className="lg:col-span-1">
      <div className="bg-white p-6 rounded-lg shadow-md sticky top-24 space-y-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold mb-4 text-levigile-blue">
            Besoin d'un agent à {cityName} ?
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            Recevez un devis personnalisé sous 24h
          </p>
          <Button className="w-full bg-levigile-red hover:bg-red-600 text-white py-6 flex items-center justify-center gap-2 text-lg transform transition hover:scale-105">
            <PhoneCall className="h-5 w-5" />
            Demander un devis gratuit
          </Button>
          
          <div className="mt-4 text-xs text-gray-500 flex items-center justify-center">
            <BadgeCheck className="h-4 w-4 mr-1 text-green-600" /> 
            <span>Réponse garantie sous 2h ouvrées</span>
          </div>
        </div>
        
        {/* Service cards with enhanced styling */}
        <div className="space-y-4 mb-6">
          <div className="p-4 bg-gradient-to-r from-levigile-lightgray to-white rounded-lg hover:shadow-md transition-shadow">
            <h4 className="font-semibold flex items-center text-levigile-blue mb-2">
              <Shield className="h-5 w-5 mr-2 text-levigile-red" />
              Gardiennage à {cityName}
            </h4>
            <p className="text-sm text-gray-600">Protection statique de vos locaux et contrôle d'accès 24h/24.</p>
          </div>
          
          <div className="p-4 bg-gradient-to-r from-levigile-lightgray to-white rounded-lg hover:shadow-md transition-shadow">
            <h4 className="font-semibold flex items-center text-levigile-blue mb-2">
              <Clock className="h-5 w-5 mr-2 text-levigile-red" />
              Rondes de sécurité à {cityName}
            </h4>
            <p className="text-sm text-gray-600">Surveillance mobile et vérification périodique de vos sites.</p>
          </div>
          
          <div className="p-4 bg-gradient-to-r from-levigile-lightgray to-white rounded-lg hover:shadow-md transition-shadow">
            <h4 className="font-semibold flex items-center text-levigile-blue mb-2">
              <Calendar className="h-5 w-5 mr-2 text-levigile-red" />
              Sécurité événementielle à {cityName}
            </h4>
            <p className="text-sm text-gray-600">Protection pour vos événements professionnels ou privés.</p>
          </div>
        </div>
        
        {/* Reviews / Testimonial section (new) */}
        <div className="mb-6 pb-6 border-b border-gray-200">
          <h4 className="text-center font-semibold text-sm uppercase tracking-wider text-levigile-blue mb-4">
            Ce que nos clients disent
          </h4>
          <div className="bg-gray-50 p-4 rounded-lg italic text-gray-600 text-sm">
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
              <span className="ml-2 text-xs font-medium text-gray-500">5.0</span>
            </div>
            <p className="mb-2">"Service de sécurité exceptionnel à {cityName}. Agents professionnels et réactifs."</p>
            <div className="text-right text-xs font-medium">— Entreprise locale</div>
          </div>
        </div>
        
        <Card className="border-t-4 border-t-levigile-blue">
          <CardContent className="p-4">
            <h4 className="text-center font-semibold text-sm uppercase tracking-wider text-levigile-blue mb-3">
              Pourquoi nous choisir ?
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center text-gray-700">
                <div className="h-2 w-2 rounded-full bg-levigile-red mr-2"></div>
                <span>Intervention en moins de 30 minutes</span>
              </li>
              <li className="flex items-center text-gray-700">
                <div className="h-2 w-2 rounded-full bg-levigile-red mr-2"></div>
                <span>Agents certifiés et expérimentés</span>
              </li>
              <li className="flex items-center text-gray-700">
                <div className="h-2 w-2 rounded-full bg-levigile-red mr-2"></div>
                <span>Disponible 24h/24 et 7j/7</span>
              </li>
              <li className="flex items-center text-gray-700">
                <div className="h-2 w-2 rounded-full bg-levigile-red mr-2"></div>
                <span>Devis gratuit sans engagement</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Emergency contact section (new) */}
        <div className="bg-red-50 border border-red-100 rounded-lg p-4">
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-levigile-red mr-2 mt-0.5" />
            <div>
              <h4 className="font-medium text-levigile-blue mb-1">Urgence à {cityName} ?</h4>
              <p className="text-sm text-gray-600 mb-2">
                Contactez notre service d'urgence disponible 24h/24
              </p>
              <a href="tel:+33780817979" className="inline-flex items-center text-levigile-red hover:text-red-700 font-medium">
                <PhoneCall className="h-4 w-4 mr-1" />
                07 80 81 79 79
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-center text-sm font-medium text-levigile-blue mb-4">
            <MapPin className="h-4 w-4 mr-2 text-levigile-red" />
            <span>Notre zone d'intervention à {cityName}</span>
          </div>
          <p className="text-xs text-center text-gray-600">
            Nous intervenons dans toute la ville de {cityName} et ses alentours dans un rayon de 20km.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
