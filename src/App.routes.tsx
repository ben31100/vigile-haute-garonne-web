
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import MediaManager from './pages/MediaManager';
import CitiesList from './pages/CitiesList';
import BlogIndex from './pages/blog/BlogIndex';
import BlogArticle from './pages/blog/BlogArticle';

// Service pages
import GardiennagePage from './pages/services/GardiennagePage';
import SecuriteEvenementielle from './pages/services/SecuriteEvenementielle';
import InterventionPage from './pages/services/InterventionPage';
import SecuriteCynophilePage from './pages/services/SecuriteCynophilePage';
import SecuriteMagasinPage from './pages/services/SecuriteMagasinPage';
import SecuriteResidentiellePage from './pages/services/SecuriteResidentiellePage';
import SecuriteIncendiePage from './pages/services/SecuriteIncendiePage';

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
import ContactPage from './pages/ContactPage';
import LeguevingPage from './pages/cities/LeguevingPage';
import LaunaguetPage from './pages/cities/LaunaguetPage';
import EscalquensPage from './pages/cities/EscalquensPage';
import SeyssesPage from './pages/cities/SeyssesPage';

// Career pages
import WhyJoinUs from './pages/career/WhyJoinUs';
import OurJobs from './pages/career/OurJobs';
import JobOffers from './pages/career/JobOffers';
import PartnerPage from './pages/PartnerPage';
import PartnerRegistrationPage from './pages/PartnerRegistrationPage';
import LocalSecurityPage from './components/LocalSecurityPage';
import CastanetTolosanPage from './pages/cities/CastanetTolosanPage';
import FonsorbesPage from './pages/cities/FonsorbesPage';
import PortetSurGaronnePage from './pages/cities/PortetSurGaronnePage';
import SaintJeanPage from './pages/cities/SaintJeanPage';
import AucamvillePage from './pages/cities/AucamvillePage';
import LabegePage from './pages/cities/LabegePage';
import VilleneuveTolosanePage from './pages/cities/VilleneuveTolosanePage';

import AussonnePage from './pages/cities/AussonnePage';
import RoquesPage from './pages/cities/RoquesPage';
import CastelginestPage from './pages/cities/CastelginestPage';
import FenouilletPage from './pages/cities/FenouilletPage';

// Import new city pages
import PibracPage from './pages/cities/PibracPage';
import BruguieresPage from './pages/cities/BruguieresPage';
import FrouzinsPage from './pages/cities/FrouzinsPage';
import LotPage from './pages/cities/LotPage';
import LozerePage from './pages/cities/LozerePage';
import HautesPyreneesPage from './pages/cities/HautesPyreneesPage';
import PyreneesOrientalesPage from './pages/cities/PyreneesOrientalesPage';
import TarnPage from './pages/cities/TarnPage';
import TarnEtGaronnePage from './pages/cities/TarnEtGaronnePage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Keep existing routes */}
      <Route path="/" element={<Index />} />
      <Route path="/villes/:cityId" element={<LocalSecurityPage />} />
      
      <Route path="/contact" element={<ContactPage />} />
      
      {/* Routes du blog */}
      <Route path="/blog" element={<BlogIndex />} />
      <Route path="/blog/:slug" element={<BlogArticle />} />
      
      {/* Routes des services */}
      <Route path="/services/gardiennage" element={<GardiennagePage />} />
      <Route path="/services/securite-evenementielle" element={<SecuriteEvenementielle />} />
      <Route path="/services/intervention" element={<InterventionPage />} />
      <Route path="/services/securite-cynophile" element={<SecuriteCynophilePage />} />
      <Route path="/services/securite-magasin" element={<SecuriteMagasinPage />} />
      <Route path="/services/securite-residentielle" element={<SecuriteResidentiellePage />} />
      <Route path="/services/securite-incendie" element={<SecuriteIncendiePage />} />

      {/* City pages */}
      <Route path="/villes" element={<CitiesList />} />
      <Route path="/toulouse.html" element={<ToulousePage />} />
      <Route path="/blagnac.html" element={<BlagnacPage />} />
      <Route path="/colomiers.html" element={<ColomersPage />} />
      <Route path="/tournefeuille.html" element={<TournefeuilePage />} />
      <Route path="/muret.html" element={<MuretPage />} />
      <Route path="/ramonville.html" element={<RamonvillePage />} />
      <Route path="/saint-gaudens.html" element={<SaintGaudensPage />} />
      <Route path="/balma.html" element={<BalmaPage />} />
      <Route path="/cugnaux.html" element={<CugnauxPage />} />
      <Route path="/l-union.html" element={<LUnionPage />} />
      <Route path="/securite-ville-union" element={<LUnionPage />} />
      <Route path="/saint-orens.html" element={<SaintOrensPage />} />
      <Route path="/plaisance.html" element={<PlaisancePage />} />
      <Route path="/castanet-tolosan.html" element={<CastanetTolosanPage />} />
      <Route path="/securite-ville-castanet" element={<CastanetTolosanPage />} />
      <Route path="/fonsorbes.html" element={<FonsorbesPage />} />
      <Route path="/securite-ville-fonsorbes" element={<FonsorbesPage />} />
      <Route path="/portet-sur-garonne.html" element={<PortetSurGaronnePage />} />
      <Route path="/securite-ville-portet" element={<PortetSurGaronnePage />} />
      <Route path="/saint-jean.html" element={<SaintJeanPage />} />
      <Route path="/securite-ville-saint-jean" element={<SaintJeanPage />} />
      <Route path="/aucamville.html" element={<AucamvillePage />} />
      <Route path="/securite-ville-aucamville" element={<AucamvillePage />} />
      <Route path="/labege.html" element={<LabegePage />} />
      <Route path="/securite-ville-labege" element={<LabegePage />} />
      <Route path="/villeneuve-tolosane.html" element={<VilleneuveTolosanePage />} />
      <Route path="/securite-ville-villeneuve-tolosane" element={<VilleneuveTolosanePage />} />
      
      {/* New city routes */}
      <Route path="/leguevin.html" element={<LeguevingPage />} />
      <Route path="/securite-ville-leguevin" element={<LeguevingPage />} />
      
      <Route path="/launaguet.html" element={<LaunaguetPage />} />
      <Route path="/securite-ville-launaguet" element={<LaunaguetPage />} />
      
      <Route path="/escalquens.html" element={<EscalquensPage />} />
      <Route path="/securite-ville-escalquens" element={<EscalquensPage />} />
      
      <Route path="/seysses.html" element={<SeyssesPage />} />
      <Route path="/securite-ville-seysses" element={<SeyssesPage />} />

      {/* Departments pages */}
      <Route path="/ariege.html" element={<AriegePage />} />
      <Route path="/aude.html" element={<AudePage />} />
      <Route path="/aveyron.html" element={<AveyronPage />} />
      <Route path="/gard.html" element={<GardPage />} />
      
      <Route path="/aussonne.html" element={<AussonnePage />} />
      <Route path="/securite-ville-aussonne" element={<AussonnePage />} />
      
      <Route path="/roques.html" element={<RoquesPage />} />
      <Route path="/securite-ville-roques" element={<RoquesPage />} />
      
      <Route path="/castelginest.html" element={<CastelginestPage />} />
      <Route path="/securite-ville-castelginest" element={<CastelginestPage />} />
      
      <Route path="/fenouillet.html" element={<FenouilletPage />} />
      <Route path="/securite-ville-fenouillet" element={<FenouilletPage />} />
      
      {/* New city routes */}
      <Route path="/pibrac.html" element={<PibracPage />} />
      <Route path="/securite-ville-pibrac" element={<PibracPage />} />
      
      <Route path="/bruguieres.html" element={<BruguieresPage />} />
      <Route path="/securite-ville-bruguieres" element={<BruguieresPage />} />
      
      <Route path="/frouzins.html" element={<FrouzinsPage />} />
      <Route path="/securite-ville-frouzins" element={<FrouzinsPage />} />
      
      {/* Department routes - Corrected URLs */}
      <Route path="/lot.html" element={<LotPage />} />
      <Route path="/lot" element={<LotPage />} />
      <Route path="/securite-departement-lot" element={<LotPage />} />
      
      <Route path="/lozere.html" element={<LozerePage />} />
      <Route path="/lozere" element={<LozerePage />} />
      <Route path="/securite-departement-lozere" element={<LozerePage />} />
      
      <Route path="/hautes-pyrenees.html" element={<HautesPyreneesPage />} />
      <Route path="/hautes-pyrenees" element={<HautesPyreneesPage />} />
      <Route path="/securite-departement-hautes-pyrenees" element={<HautesPyreneesPage />} />
      
      <Route path="/pyrenees-orientales.html" element={<PyreneesOrientalesPage />} />
      <Route path="/pyrenees-orientales" element={<PyreneesOrientalesPage />} />
      <Route path="/securite-departement-pyrenees-orientales" element={<PyreneesOrientalesPage />} />
      
      <Route path="/tarn.html" element={<TarnPage />} />
      <Route path="/tarn" element={<TarnPage />} />
      <Route path="/securite-departement-tarn" element={<TarnPage />} />
      
      <Route path="/tarn-et-garonne.html" element={<TarnEtGaronnePage />} />
      <Route path="/tarn-et-garonne" element={<TarnEtGaronnePage />} />
      <Route path="/securite-departement-tarn-et-garonne" element={<TarnEtGaronnePage />} />
      
      {/* Keep existing 404 route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
