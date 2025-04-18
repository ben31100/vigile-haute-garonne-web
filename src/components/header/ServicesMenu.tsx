
import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface ServicesMenuProps {
  scrollToSection: (sectionId: string) => void;
  isActive: boolean;
}

const ServicesMenu: React.FC<ServicesMenuProps> = ({ scrollToSection, isActive }) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger 
        className={cn(
          "text-levigile-dark hover:text-levigile-blue font-medium text-base bg-transparent hover:bg-transparent focus:bg-transparent transition-colors",
          isActive && "text-levigile-blue"
        )}
        onClick={() => scrollToSection('services')}
      >
        Nos services
      </NavigationMenuTrigger>
      <NavigationMenuContent className="bg-white p-4 rounded-lg shadow-lg w-[800px] z-50">
        <ScrollArea className="max-h-[600px]">
          <div className="grid grid-cols-2 gap-6">
            <ServiceMenuItem
              to="/services/gardiennage"
              image="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//ronde-hero.jpg"
              title="Gardiennage"
              description="Surveillance et protection de vos locaux"
            />
            <ServiceMenuItem
              to="/services/securite-evenementielle"
              image="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Securite%20evenementielle%20levigile.png"
              title="Sécurité événementielle"
              description="Protection lors de vos événements"
            />
            <ServiceMenuItem
              to="/services/intervention"
              image="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Securiser%20un%20chantier%20par%20Levigile.png"
              title="Intervention"
              description="Réponse rapide en cas d'incidents"
            />
            <ServiceMenuItem
              to="/services/securite-cynophile"
              image="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Agent%20cynophile%20levigile.png"
              title="Sécurité cynophile"
              description="Protection avec maîtres-chiens"
            />
            <ServiceMenuItem
              to="/services/securite-magasin"
              image="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Securite%20en%20grande%20surface%20Levigile.png"
              title="Sécurité magasin"
              description="Protection des commerces et boutiques"
            />
            <ServiceMenuItem
              to="/services/securite-residentielle"
              image="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Surveillance%20de%20residences%20Levigile.png"
              title="Sécurité résidentielle"
              description="Protection de résidences et immeubles"
            />
            <ServiceMenuItem
              to="/services/securite-incendie"
              image="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Securite%20incendie%20levigile.jpg"
              title="Sécurité incendie"
              description="Prévention et gestion des risques incendie"
            />
          </div>
        </ScrollArea>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

interface ServiceMenuItemProps {
  to: string;
  image: string;
  title: string;
  description: string;
}

const ServiceMenuItem: React.FC<ServiceMenuItemProps> = ({ to, image, title, description }) => {
  return (
    <Link to={to} className="group flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-levigile-dark group-hover:text-levigile-blue mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default ServicesMenu;
