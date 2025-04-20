
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AppRoutes from './App.routes';
import { useEffect } from "react";
import { preloadImages, loadDeferredResource } from "./utils/optimizationUtils";

// Configuration optimisée du client de requête pour améliorer les performances
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      gcTime: 5 * 60 * 1000, // 5 minutes (remplace cacheTime)
      refetchOnWindowFocus: false,
      retry: 1
    }
  }
});

const App = () => {
  // Préchargement des ressources critiques au démarrage de l'application
  useEffect(() => {
    // Images critiques pour la page d'accueil
    preloadImages([
      "https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//logo%20levigile%20securite.png"
    ], true);
    
    // Chargement différé des polices
    loadDeferredResource('font', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Helmet>
              <title>LeVigile - Sécurité privée en Haute-Garonne</title>
              <meta name="description" content="Entreprise de sécurité privée en Haute-Garonne. Services de gardiennage, surveillance, rondes de sécurité et sécurité événementielle à Toulouse et dans tout le département 31." />
              {/* Directives de cache */}
              <meta httpEquiv="Cache-Control" content="max-age=86400" />
              {/* Préconnexion aux domaines tiers */}
              <link rel="preconnect" href="https://dwugopridureefyyiyss.supabase.co" crossOrigin="anonymous" />
              <link rel="dns-prefetch" href="https://dwugopridureefyyiyss.supabase.co" />
              {/* Optimisation des polices */}
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </Helmet>
            <AppRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
