
import React from 'react';
import { Link } from 'react-router-dom';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';
import { cn } from "@/lib/utils";

const CareerMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger 
        className={cn(
          "text-levigile-dark hover:text-levigile-blue font-medium text-base bg-transparent hover:bg-transparent focus:bg-transparent inline-flex items-center transition-colors",
          location.pathname.includes("/carriere") && "text-levigile-blue"
        )}
      >
        Carrière <ChevronDown className="ml-1 h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="bg-white w-48 p-1">
        <DropdownMenuItem asChild>
          <Link 
            to="/carriere/pourquoi-nous-rejoindre"
            className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Pourquoi nous rejoindre
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link 
            to="/carriere/nos-metiers"
            className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Nos métiers
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link 
            to="/carriere/nos-offres"
            className="cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Nos offres d'emploi
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CareerMenu;
