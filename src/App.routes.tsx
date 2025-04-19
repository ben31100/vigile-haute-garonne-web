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

const AppRoutes: React.FC = () => {
  return (
    <Routes>
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
      
      {/* Routes des villes */}
      <Route path="/villes" element={<CitiesList />} />
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
      
      {/* Career routes */}
      <Route path="/carriere/pourquoi-nous-rejoindre" element={<WhyJoinUs />} />
      <Route path="/carriere/nos-metiers" element={<OurJobs />} />
      <Route path="/carriere/nos-offres" element={<JobOffers />} />
      <Route path="/devenir-partenaire" element={<PartnerPage />} />
      <Route path="/devenir-partenaire/inscription" element={<PartnerRegistrationPage />} />
      <Route path="/castanet-tolosan.html" element={<CastanetTolosanPage />} />
      <Route path="/fonsorbes.html" element={<FonsorbesPage />} />
      <Route path="/portet-sur-garonne.html" element={<PortetSurGaronnePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
