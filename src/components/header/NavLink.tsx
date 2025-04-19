
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, className, isActive }) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "text-levigile-dark hover:text-levigile-blue font-medium text-base transition-colors",
        isActive && "text-levigile-blue",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;

