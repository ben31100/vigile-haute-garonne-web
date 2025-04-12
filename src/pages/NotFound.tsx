
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-levigile-blue mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Oops! Page non trouvée</p>
          <p className="mb-8 max-w-md mx-auto text-gray-500">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Button asChild>
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
