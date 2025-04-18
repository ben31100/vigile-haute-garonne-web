
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface CitiesMenuProps {
  isVillesDropdownOpen: boolean;
  setIsVillesDropdownOpen: (value: boolean) => void;
  navigateAndScrollTop: (path: string) => void;
  isActive: boolean;
}

const CitiesMenu: React.FC<CitiesMenuProps> = ({ 
  isVillesDropdownOpen, 
  setIsVillesDropdownOpen, 
  navigateAndScrollTop,
  isActive
}) => {
  return (
    <DropdownMenu open={isVillesDropdownOpen} onOpenChange={setIsVillesDropdownOpen}>
      <DropdownMenuTrigger 
        className={cn(
          "text-levigile-dark hover:text-levigile-blue font-medium text-base bg-transparent hover:bg-transparent focus:bg-transparent inline-flex items-center transition-colors",
          isActive && "text-levigile-blue"
        )}
      >
        Villes <ChevronDown className="ml-1 h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="bg-white w-48 p-1 z-50">
        <CityMenuItem path="/toulouse.html" label="Toulouse" onClick={navigateAndScrollTop} />
        <CityMenuItem path="/blagnac.html" label="Blagnac" onClick={navigateAndScrollTop} />
        <CityMenuItem path="/colomiers.html" label="Colomiers" onClick={navigateAndScrollTop} />
        <CityMenuItem path="/tournefeuille.html" label="Tournefeuille" onClick={navigateAndScrollTop} />
        <CityMenuItem path="/muret.html" label="Muret" onClick={navigateAndScrollTop} />
        <div className="border-t border-gray-100 my-1"></div>
        <CityMenuItem 
          path="/villes" 
          label="Toutes les villes" 
          onClick={navigateAndScrollTop}
          className="font-medium text-levigile-blue hover:text-levigile-dark"
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

interface CityMenuItemProps {
  path: string;
  label: string;
  onClick: (path: string) => void;
  className?: string;
}

const CityMenuItem: React.FC<CityMenuItemProps> = ({ path, label, onClick, className }) => {
  return (
    <DropdownMenuItem asChild>
      <a 
        href="#" 
        onClick={(e) => {
          e.preventDefault();
          onClick(path);
        }} 
        className={cn(
          "cursor-pointer w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md",
          className
        )}
      >
        {label}
      </a>
    </DropdownMenuItem>
  );
};

export default CitiesMenu;
