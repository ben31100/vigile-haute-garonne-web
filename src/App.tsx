
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CitiesList from "./pages/CitiesList";
import LocalSecurityPage from "./components/LocalSecurityPage";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ToulousePage from "./pages/cities/ToulousePage";
import BlagnacPage from "./pages/cities/BlagnacPage";
import ColomersPage from "./pages/cities/ColomersPage";
import TournefeuilePage from "./pages/cities/TournefeuilePage";
import MuretPage from "./pages/cities/MuretPage";
import RamonvillePage from "./pages/cities/RamonvillePage";
import SaintGaudensPage from "./pages/cities/SaintGaudensPage";
import BalmaPage from "./pages/cities/BalmaPage";
import CugnauxPage from "./pages/cities/CugnauxPage";
import LUnionPage from "./pages/cities/LUnionPage";
import SaintOrensPage from "./pages/cities/SaintOrensPage";
import PlaisancePage from "./pages/cities/PlaisancePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Helmet>
            <title>LeVigile - Sécurité privée en Haute-Garonne</title>
            <meta name="description" content="Entreprise de sécurité privée en Haute-Garonne. Services de gardiennage, surveillance, rondes de sécurité et sécurité événementielle à Toulouse et dans tout le département 31." />
          </Helmet>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/villes" element={<CitiesList />} />
            <Route path="/securite-ville-:cityId" element={<LocalSecurityPage />} />
            
            {/* Routes HTML-like pour les villes */}
            <Route path="/toulouse.html" element={<ToulousePage />} />
            <Route path="/blagnac.html" element={<BlagnacPage />} />
            <Route path="/colomiers.html" element={<ColomersPage />} />
            <Route path="/tournefeuille.html" element={<TournefeuilePage />} />
            <Route path="/muret.html" element={<MuretPage />} />
            <Route path="/ramonville.html" element={<RamonvillePage />} />
            <Route path="/saint-gaudens.html" element={<SaintGaudensPage />} />
            <Route path="/balma.html" element={<BalmaPage />} />
            <Route path="/cugnaux.html" element={<CugnauxPage />} />
            <Route path="/lunion.html" element={<LUnionPage />} />
            <Route path="/saint-orens.html" element={<SaintOrensPage />} />
            <Route path="/plaisance.html" element={<PlaisancePage />} />
            
            {/* Redirection des anciennes routes pour compatibilité */}
            <Route path="/securite-ville-toulouse" element={<Navigate to="/toulouse.html" />} />
            <Route path="/securite-ville-blagnac" element={<Navigate to="/blagnac.html" />} />
            <Route path="/securite-ville-colomiers" element={<Navigate to="/colomiers.html" />} />
            <Route path="/securite-ville-tournefeuille" element={<Navigate to="/tournefeuille.html" />} />
            <Route path="/securite-ville-muret" element={<Navigate to="/muret.html" />} />
            <Route path="/securite-ville-ramonville" element={<Navigate to="/ramonville.html" />} />
            <Route path="/securite-ville-saint-gaudens" element={<Navigate to="/saint-gaudens.html" />} />
            <Route path="/securite-ville-balma" element={<Navigate to="/balma.html" />} />
            <Route path="/securite-ville-cugnaux" element={<Navigate to="/cugnaux.html" />} />
            <Route path="/securite-ville-lunion" element={<Navigate to="/lunion.html" />} />
            <Route path="/securite-ville-saint-orens" element={<Navigate to="/saint-orens.html" />} />
            <Route path="/securite-ville-plaisance" element={<Navigate to="/plaisance.html" />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
