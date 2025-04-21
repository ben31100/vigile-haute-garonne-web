
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// Pages principales avec chargement immédiat (priorité haute)
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Services pages (lazy loaded)
const GardiennagePage = lazy(() => import('./pages/services/GardiennagePage'));
const SecuriteEvenementielle = lazy(() => import('./pages/services/SecuriteEvenementielle'));
const InterventionPage = lazy(() => import('./pages/services/InterventionPage'));
const SecuriteCynophilePage = lazy(() => import('./pages/services/SecuriteCynophilePage'));
const SecuriteMagasinPage = lazy(() => import('./pages/services/SecuriteMagasinPage'));
const SecuriteResidentiellePage = lazy(() => import('./pages/services/SecuriteResidentiellePage'));
const SecuriteIncendiePage = lazy(() => import('./pages/services/SecuriteIncendiePage'));

// Autres pages importantes
const MediaManager = lazy(() => import('./pages/MediaManager'));
const CitiesList = lazy(() => import('./pages/CitiesList'));
const BlogIndex = lazy(() => import('./pages/blog/BlogIndex'));
const BlogArticle = lazy(() => import('./pages/blog/BlogArticle'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const LocalSecurityPage = lazy(() => import('./components/LocalSecurityPage'));

// Career pages
const WhyJoinUs = lazy(() => import('./pages/career/WhyJoinUs'));
const OurJobs = lazy(() => import('./pages/career/OurJobs'));
const JobOffers = lazy(() => import('./pages/career/JobOffers'));
const PartnerPage = lazy(() => import('./pages/PartnerPage'));
const PartnerRegistrationPage = lazy(() => import('./pages/PartnerRegistrationPage'));

// City pages
const ToulousePage = lazy(() => import('./pages/cities/ToulousePage'));
const BlagnacPage = lazy(() => import('./pages/cities/BlagnacPage'));
const ColomersPage = lazy(() => import('./pages/cities/ColomersPage'));
const TournefeuilePage = lazy(() => import('./pages/cities/TournefeuilePage'));
const MuretPage = lazy(() => import('./pages/cities/MuretPage'));
const RamonvillePage = lazy(() => import('./pages/cities/RamonvillePage'));
const SaintGaudensPage = lazy(() => import('./pages/cities/SaintGaudensPage'));
const SaintOrensPage = lazy(() => import('./pages/cities/SaintOrensPage'));
const BalmaPage = lazy(() => import('./pages/cities/BalmaPage'));
const CugnauxPage = lazy(() => import('./pages/cities/CugnauxPage'));
const PlaisancePage = lazy(() => import('./pages/cities/PlaisancePage'));
const LUnionPage = lazy(() => import('./pages/cities/LUnionPage'));
const AriegePage = lazy(() => import('./pages/cities/AriegePage'));
const AudePage = lazy(() => import('./pages/cities/AudePage'));
const AveyronPage = lazy(() => import('./pages/cities/AveyronPage'));
const GardPage = lazy(() => import('./pages/cities/GardPage'));
const LeguevingPage = lazy(() => import('./pages/cities/LeguevingPage'));
const LaunaguetPage = lazy(() => import('./pages/cities/LaunaguetPage'));
const EscalquensPage = lazy(() => import('./pages/cities/EscalquensPage'));
const SeyssesPage = lazy(() => import('./pages/cities/SeyssesPage'));
const CastanetTolosanPage = lazy(() => import('./pages/cities/CastanetTolosanPage'));
const FonsorbesPage = lazy(() => import('./pages/cities/FonsorbesPage'));
const PortetSurGaronnePage = lazy(() => import('./pages/cities/PortetSurGaronnePage'));
const SaintJeanPage = lazy(() => import('./pages/cities/SaintJeanPage'));
const AucamvillePage = lazy(() => import('./pages/cities/AucamvillePage'));
const LabegePage = lazy(() => import('./pages/cities/LabegePage'));
const VilleneuveTolosanePage = lazy(() => import('./pages/cities/VilleneuveTolosanePage'));
const AussonnePage = lazy(() => import('./pages/cities/AussonnePage'));
const RoquesPage = lazy(() => import('./pages/cities/RoquesPage'));
const CastelginestPage = lazy(() => import('./pages/cities/CastelginestPage'));
const FenouilletPage = lazy(() => import('./pages/cities/FenouilletPage'));
const CahorsPage = lazy(() => import('./pages/cities/CahorsPage'));
const PerpignanPage = lazy(() => import('./pages/cities/PerpignanPage'));
const PibracPage = lazy(() => import('./pages/cities/PibracPage'));
const BruguieresPage = lazy(() => import('./pages/cities/BruguieresPage'));
const FrouzinsPage = lazy(() => import('./pages/cities/FrouzinsPage'));
const LotPage = lazy(() => import('./pages/cities/LotPage'));
const LozerePage = lazy(() => import('./pages/cities/LozerePage'));
const HautesPyreneesPage = lazy(() => import('./pages/cities/HautesPyreneesPage'));
const PyreneesOrientalesPage = lazy(() => import('./pages/cities/PyreneesOrientalesPage'));
const TarnPage = lazy(() => import('./pages/cities/TarnPage'));
const TarnEtGaronnePage = lazy(() => import('./pages/cities/TarnEtGaronnePage'));
const MontaubanPage = lazy(() => import('./pages/cities/MontaubanPage'));
const AlbiPage = lazy(() => import('./pages/cities/AlbiPage'));
const MendePage = lazy(() => import('./pages/cities/MendePage'));
const AdminLoginPage = lazy(() => import('./pages/auth/AdminLoginPage'));
const ClientLoginPage = lazy(() => import('./pages/auth/ClientLoginPage'));
const AgentLoginPage = lazy(() => import('./pages/auth/AgentLoginPage'));

// Composant de chargement pendant le lazy loading
const LoadingFallback = () => (
  <div className="w-full h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-levigile-blue mx-auto mb-4"></div>
      <p className="text-levigile-blue">Chargement...</p>
    </div>
  </div>
);

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
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

        {/* Career pages */}
        <Route path="/carriere/pourquoi-nous-rejoindre" element={<WhyJoinUs />} />
        <Route path="/carriere/nos-metiers" element={<OurJobs />} />
        <Route path="/carriere/nos-offres" element={<JobOffers />} />
        
        {/* Partner pages */}
        <Route path="/devenir-partenaire" element={<PartnerPage />} />
        <Route path="/devenir-partenaire/inscription" element={<PartnerRegistrationPage />} />

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
        
        {/* Cahors routes */}
        <Route path="/cahors.html" element={<CahorsPage />} />
        <Route path="/securite-ville-cahors" element={<CahorsPage />} />
        
        {/* Perpignan routes */}
        <Route path="/perpignan.html" element={<PerpignanPage />} />
        <Route path="/securite-ville-perpignan" element={<PerpignanPage />} />
        <Route path="/perpignan" element={<PerpignanPage />} />
        
        {/* Department routes */}
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
        
        {/* Extra route for Tarbes */}
        <Route path="/tarbes.html" element={<HautesPyreneesPage />} />
        <Route path="/tarbes" element={<HautesPyreneesPage />} />
        <Route path="/securite-ville-tarbes" element={<HautesPyreneesPage />} />
        
        <Route path="/montauban.html" element={<MontaubanPage />} />
        <Route path="/securite-ville-montauban" element={<MontaubanPage />} />
        
        {/* Albi routes */}
        <Route path="/albi.html" element={<AlbiPage />} />
        <Route path="/securite-ville-albi" element={<AlbiPage />} />
        
        {/* Mende routes */}
        <Route path="/mende.html" element={<MendePage />} />
        <Route path="/securite-ville-mende" element={<MendePage />} />
        
        {/* Espaces de connexion */}
        <Route path="/espace-administrateur" element={<AdminLoginPage />} />
        <Route path="/espace-client" element={<ClientLoginPage />} />
        <Route path="/espace-agent" element={<AgentLoginPage />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
