
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import MediaManager from './pages/MediaManager';
import CitiesList from './pages/CitiesList';

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

// Blog example
import BlogArticleExample from './pages/BlogArticleExample';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/media-manager" element={<MediaManager />} />
      <Route path="/villes" element={<CitiesList />} />
      
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
      
      {/* Route pour l'exemple d'article de blog */}
      <Route path="/blog/exemple" element={<BlogArticleExample />} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
