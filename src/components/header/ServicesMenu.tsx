
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const ServicesMenu: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger 
        className={cn(
          "text-levigile-dark hover:text-levigile-blue font-medium text-base bg-transparent hover:bg-transparent focus:bg-transparent inline-flex items-center transition-colors",
          location.pathname.includes("/services") && "text-levigile-blue"
        )}
      >
        Nos services <ChevronDown className="ml-1 h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="bg-white w-48 p-1 z-50">
        <DropdownMenuItem asChild>
          <Link 
            to="/services/gardiennage"
            className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Gardiennage
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link 
            to="/services/securite-evenementielle"
            className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Sécurité événementielle
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link 
            to="/services/intervention"
            className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Intervention
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link 
            to="/services/securite-cynophile"
            className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Sécurité cynophile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link 
            to="/services/securite-magasin"
            className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Sécurité magasin
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link 
            to="/services/securite-residentielle"
            className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Sécurité résidentielle
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link 
            to="/services/securite-incendie"
            className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Sécurité incendie
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ServicesMenu;

