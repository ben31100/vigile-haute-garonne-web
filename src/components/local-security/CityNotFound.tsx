
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { Home, List, MapPin, AlertTriangle } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import { useToast } from '@/components/ui/use-toast';

const CityNotFound: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Afficher un toast pour informer l'utilisateur
  React.useEffect(() => {
    toast({
      title: "Ville non trouvée",
      description: "La ville que vous recherchez n'existe pas dans notre base de données.",
      variant: "destructive",
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
              <AlertTriangle className="h-8 w-8 text-levigile-red" />
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-levigile-blue">Ville non trouvée</h1>
            
            <p className="text-gray-600 mb-8">
              Désolé, nous n'avons pas trouvé d'informations pour cette ville. Veuillez vérifier l'URL ou consulter notre liste de villes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="flex items-center gap-2 py-5" onClick={() => navigate(-1)}>
                Retour
              </Button>
              
              <Button variant="outline" className="flex items-center gap-2 py-5 border-levigile-blue text-levigile-blue" asChild>
                <Link to="/">
                  <Home className="h-4 w-4" />
                  Accueil
                </Link>
              </Button>
              
              <Button variant="secondary" className="flex items-center gap-2 py-5 bg-levigile-lightgray text-levigile-blue" asChild>
                <Link to="/villes">
                  <MapPin className="h-4 w-4" />
                  Voir toutes les villes
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CityNotFound;
