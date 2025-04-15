
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import MediaManager from './pages/MediaManager';
import CitiesList from './pages/CitiesList';
import BlogPage from './pages/BlogPage';
import BlogCategoryPage from './pages/BlogCategoryPage';

// Pages d'articles de blog
import BlogArticleExample from './pages/BlogArticleExample';
import ProtegerCommerceToulouse from './pages/blog/ProtegerCommerceToulouse';
import SecuriteEvenementielle from './pages/blog/SecuriteEvenementielle';
import DifferenceGardiennageSurveillance from './pages/blog/DifferenceGardiennageSurveillance';
import AgentSecuriteNuitColomiers from './pages/blog/AgentSecuriteNuitColomiers';
import Reglementation2025 from './pages/blog/Reglementation2025';
import SecuriteIncendieObligations from './pages/blog/SecuriteIncendieObligations';
import AgentCynophileMaitreChien from './pages/blog/AgentCynophileMaitreChien';
import SecuriserChantierErreurs from './pages/blog/SecuriserChantierErreurs';
import SurveillanceResidencesCambriolages from './pages/blog/SurveillanceResidencesCambriolages';
import SecuriteGrandeSurfaceDispositifs from './pages/blog/SecuriteGrandeSurfaceDispositifs';

// City pages
import ToulousePage from './pages/cities/ToulousePage';
import BlagnacPage from './pages/cities/BlagnacPage';
import ColomersPage from './pages/cities/ColomersPage';
import TournefeuilePage from './pages/cities/TournefeuilePage';
import MuretPage from './pages/cities/MuretPage';
import RamonvillePage from './pages/cities/RamonvillePage';
import SaintOrensPage from './pages/cities/SaintOrensPage';
import BalmaPage from './pages/cities/BalmaPage';
import CugnauxPage from './pages/cities/CugnauxPage';
import PlaisancePage from './pages/cities/PlaisancePage';
import LUnionPage from './pages/cities/LUnionPage';
import SaintGaudensPage from './pages/cities/SaintGaudensPage';
import AriegePage from './pages/cities/AriegePage';
import AudePage from './pages/cities/AudePage';
import AveyronPage from './pages/cities/AveyronPage';
import GardPage from './pages/cities/GardPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/media-manager" element={<MediaManager />} />
      <Route path="/villes" element={<CitiesList />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/categorie/:categorySlug" element={<BlogCategoryPage />} />
      
      {/* Routes des articles de blog */}
      <Route path="/blog/exemple" element={<BlogArticleExample />} />
      <Route path="/blog/proteger-commerce-toulouse" element={<ProtegerCommerceToulouse />} />
      <Route path="/blog/securite-evenementielle-choisir" element={<SecuriteEvenementielle />} />
      <Route path="/blog/difference-gardiennage-surveillance-mobile" element={<DifferenceGardiennageSurveillance />} />
      <Route path="/blog/agent-securite-nuit-colomiers" element={<AgentSecuriteNuitColomiers />} />
      <Route path="/blog/reglementation-2025-securite-privee" element={<Reglementation2025 />} />
      <Route path="/blog/securite-incendie-obligations-legales" element={<SecuriteIncendieObligations />} />
      <Route path="/blog/agent-cynophile-maitre-chien" element={<AgentCynophileMaitreChien />} />
      <Route path="/blog/securiser-chantier-erreurs-eviter" element={<SecuriserChantierErreurs />} />
      <Route path="/blog/surveillance-residences-cambriolages" element={<SurveillanceResidencesCambriolages />} />
      <Route path="/blog/securite-grande-surface-dispositifs" element={<SecuriteGrandeSurfaceDispositifs />} />
      
      {/* Route générique pour les autres slugs (utilise l'exemple comme fallback) */}
      <Route path="/blog/:slug" element={<BlogArticleExample />} />
      
      {/* Routes des villes */}
      <Route path="/toulouse.html" element={<ToulousePage />} />
      <Route path="/blagnac.html" element={<BlagnacPage />} />
      <Route path="/colomiers.html" element={<ColomersPage />} />
      <Route path="/tournefeuille.html" element={<TournefeuilePage />} />
      <Route path="/muret.html" element={<MuretPage />} />
      <Route path="/ramonville.html" element={<RamonvillePage />} />
      <Route path="/saint-orens.html" element={<SaintOrensPage />} />
      <Route path="/balma.html" element={<BalmaPage />} />
      <Route path="/cugnaux.html" element={<CugnauxPage />} />
      <Route path="/plaisance.html" element={<PlaisancePage />} />
      <Route path="/l-union.html" element={<LUnionPage />} />
      <Route path="/saint-gaudens.html" element={<SaintGaudensPage />} />
      <Route path="/ariege.html" element={<AriegePage />} />
      <Route path="/aude.html" element={<AudePage />} />
      <Route path="/aveyron.html" element={<AveyronPage />} />
      <Route path="/gard.html" element={<GardPage />} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
