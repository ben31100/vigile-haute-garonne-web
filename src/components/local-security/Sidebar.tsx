
import React from 'react';
import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  cityName: string;
}

const Sidebar: React.FC<SidebarProps> = ({ cityName }) => {
  return (
    <div className="lg:col-span-1">
      <div className="bg-levigile-lightgray p-6 rounded-lg shadow-md sticky top-24">
        <h3 className="text-xl font-bold mb-4 text-levigile-blue">
          Nos services à {cityName}
        </h3>
        
        <div className="space-y-4 mb-6">
          <div className="p-4 bg-white rounded shadow-sm">
            <h4 className="font-semibold flex items-center text-levigile-blue">
              <Shield className="h-4 w-4 mr-2 text-levigile-red" />
              Gardiennage à {cityName}
            </h4>
            <p className="text-sm mt-2">Protection statique de vos locaux et contrôle d'accès 24h/24.</p>
          </div>
          
          <div className="p-4 bg-white rounded shadow-sm">
            <h4 className="font-semibold flex items-center text-levigile-blue">
              <Shield className="h-4 w-4 mr-2 text-levigile-red" />
              Rondes de sécurité à {cityName}
            </h4>
            <p className="text-sm mt-2">Surveillance mobile et vérification périodique de vos sites.</p>
          </div>
          
          <div className="p-4 bg-white rounded shadow-sm">
            <h4 className="font-semibold flex items-center text-levigile-blue">
              <Shield className="h-4 w-4 mr-2 text-levigile-red" />
              Sécurité événementielle à {cityName}
            </h4>
            <p className="text-sm mt-2">Protection pour vos événements professionnels ou privés.</p>
          </div>
          
          <div className="p-4 bg-white rounded shadow-sm">
            <h4 className="font-semibold flex items-center text-levigile-blue">
              <Shield className="h-4 w-4 mr-2 text-levigile-red" />
              Agents SSIAP à {cityName}
            </h4>
            <p className="text-sm mt-2">Prévention incendie et sécurité dans les ERP de {cityName}.</p>
          </div>
        </div>
        
        <Button className="w-full bg-levigile-red hover:bg-red-600">
          Contacter notre agence de {cityName}
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
