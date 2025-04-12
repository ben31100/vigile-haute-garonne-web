
import React from 'react';
import { Button } from '@/components/ui/button';

const CityNotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Ville non trouvée</h1>
      <p>Désolé, nous n'avons pas trouvé d'informations pour cette ville.</p>
      <Button className="mt-4" onClick={() => window.history.back()}>Retour</Button>
    </div>
  );
};

export default CityNotFound;
