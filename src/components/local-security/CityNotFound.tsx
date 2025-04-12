
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Home, List } from 'lucide-react';

const CityNotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Ville non trouvée</h1>
      <p className="text-center mb-6">Désolé, nous n'avons pas trouvé d'informations pour cette ville.</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button className="flex items-center gap-2" onClick={() => window.history.back()}>Retour</Button>
        <Button variant="outline" className="flex items-center gap-2" asChild>
          <Link to="/">
            <Home className="h-4 w-4" />
            Accueil
          </Link>
        </Button>
        <Button variant="secondary" className="flex items-center gap-2" asChild>
          <Link to="/villes">
            <List className="h-4 w-4" />
            Voir toutes les villes
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CityNotFound;
