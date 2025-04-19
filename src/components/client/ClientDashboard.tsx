
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';

const ClientDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/espace');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-bold">Espace Client</h1>
            <Button variant="ghost" onClick={handleLogout}>
              Déconnexion
            </Button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Mon Tableau de Bord</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="font-semibold mb-2">Mes Sites</h3>
              <p className="text-gray-600">Voir mes sites sécurisés</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="font-semibold mb-2">Messages</h3>
              <p className="text-gray-600">Contacter l'administration</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClientDashboard;
