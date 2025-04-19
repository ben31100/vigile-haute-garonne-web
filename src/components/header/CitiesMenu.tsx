import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const CitiesMenu: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger 
        className={cn(
          "text-levigile-dark hover:text-levigile-blue font-medium text-base bg-transparent hover:bg-transparent focus:bg-transparent inline-flex items-center transition-colors",
          (location.pathname.includes("/villes") || 
           location.pathname.includes("/toulouse") || 
           location.pathname.includes("/blagnac") ||
           location.pathname.includes("/colomiers") ||
           location.pathname.includes("/tournefeuille") ||
           location.pathname.includes("/muret")) && "text-levigile-blue"
        )}
      >
        Villes <ChevronDown className="ml-1 h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="bg-white w-48 p-1 z-50">
        <DropdownMenuItem asChild>
          <Link 
            to="/toulouse.html" 
            className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Toulouse
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link 
            to="/blagnac.html" 
            className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Blagnac
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link 
            to="/colomiers.html" 
            className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Colomiers
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link 
            to="/tournefeuille.html" 
            className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Tournefeuille
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link 
            to="/muret.html" 
            className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Muret
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link 
            to="/villes" 
            className="cursor-pointer w-full px-4 py-2 text-sm font-medium text-levigile-blue hover:bg-gray-100 rounded-md"
          >
            Toutes les villes
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CitiesMenu;
