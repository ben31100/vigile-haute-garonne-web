
import React from 'react';
import { cn } from "@/lib/utils";

interface AuthLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const AuthLayout = ({ children, className }: AuthLayoutProps) => {
  return (
    <div className={cn(
      "min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50",
      className
    )}>
      <div className="w-full max-w-md space-y-8 bg-white p-6 rounded-lg shadow-md">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
