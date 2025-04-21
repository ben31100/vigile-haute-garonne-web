
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense, useEffect } from 'react';
import { loadDeferredResource } from "./utils/optimizationUtils";

// Chargement paresseux des routes
const AppRoutes = lazy(() => import('./App.routes'));

// Configuration optimisée du client de requête
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      gcTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 1
    }
  }
});

const App = () => {
  // Préchargement des ressources critiques - modifié pour éviter les avertissements
  useEffect(() => {
    // Utilisation de loadDeferredResource au lieu de preload pour les polices non critiques
    loadDeferredResource('font', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
    
    // Assurons-nous que les images préchargées sont effectivement utilisées
    const preloadImage = (src: string) => {
      const img = new Image();
      img.src = src;
    };
    
    // Préchargement de l'image du logo pour qu'elle soit disponible immédiatement
    preloadImage('https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//logo%20levigile%20securite.webp');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Suspense fallback={<div className="w-full h-screen flex items-center justify-center">Chargement...</div>}>
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
              </Helmet>
              <AppRoutes />
            </BrowserRouter>
          </Suspense>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
