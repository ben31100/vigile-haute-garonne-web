
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Building, Shield, User } from 'lucide-react';
import AuthLayout from '@/components/auth/AuthLayout';

const AccessPage = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout className="bg-gradient-to-b from-blue-50 to-gray-50">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Espace sécurisé</h1>
        <p className="text-gray-600">Sélectionnez votre espace de connexion</p>
      </div>

      <div className="grid gap-6">
        <Button 
          onClick={() => navigate('/admin/login')}
          variant="outline"
          className="h-auto py-6 flex flex-col items-center gap-2 hover:bg-blue-50"
        >
          <User className="h-8 w-8" />
          <div className="flex flex-col">
            <span className="font-semibold">Espace administrateur</span>
            <span className="text-sm text-gray-500">Accédez à votre tableau de bord administratif</span>
          </div>
        </Button>

        <Button 
          onClick={() => navigate('/agent/login')}
          variant="outline"
          className="h-auto py-6 flex flex-col items-center gap-2 hover:bg-blue-50"
        >
          <Shield className="h-8 w-8" />
          <div className="flex flex-col">
            <span className="font-semibold">Espace agent</span>
            <span className="text-sm text-gray-500">Consultez votre planning et vos missions</span>
          </div>
        </Button>

        <Button 
          onClick={() => navigate('/client/login')}
          variant="outline"
          className="h-auto py-6 flex flex-col items-center gap-2 hover:bg-blue-50"
        >
          <Building className="h-8 w-8" />
          <div className="flex flex-col">
            <span className="font-semibold">Espace client</span>
            <span className="text-sm text-gray-500">Suivez vos prestations et documents</span>
          </div>
        </Button>
      </div>
    </AuthLayout>
  );
};

export default AccessPage;
