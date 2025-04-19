
import AccessPage from '@/pages/espace';
import AgentLoginPage from '@/pages/agent/login';
import AgentDashboardPage from '@/pages/agent/dashboard';
import AdminLogin from '@/pages/admin/login';
import AdminDashboard from '@/pages/admin/dashboard';
import AgentsPage from '@/pages/admin/agents';
import ClientsPage from '@/pages/admin/clients';
import SitesPage from '@/pages/admin/sites';
import PlanningPage from '@/pages/admin/planning';
import MessagesPage from '@/pages/admin/messages';
import ReportsPage from '@/pages/admin/reports';
import SettingsPage from '@/pages/admin/settings';
import ContactPage from '@/pages/ContactPage';
import NotFound from '@/pages/NotFound';
import Index from '@/pages/Index';

// Import blog pages
import BlogIndex from '@/pages/blog/BlogIndex';
import BlogArticle from '@/pages/blog/BlogArticle';

// Import service pages
import GardiennagePage from '@/pages/services/GardiennagePage';
import SecuriteEvenementielle from '@/pages/services/SecuriteEvenementielle';
import InterventionPage from '@/pages/services/InterventionPage';
import SecuriteCynophilePage from '@/pages/services/SecuriteCynophilePage';
import SecuriteMagasinPage from '@/pages/services/SecuriteMagasinPage';
import SecuriteResidentiellePage from '@/pages/services/SecuriteResidentiellePage';
import SecuriteIncendiePage from '@/pages/services/SecuriteIncendiePage';

// Import city pages
import ToulousePage from '@/pages/cities/ToulousePage';
import BlagnacPage from '@/pages/cities/BlagnacPage';
import LocalSecurityPage from '@/components/LocalSecurityPage';
import CitiesList from '@/pages/CitiesList';

// Import department pages
import AriegePage from '@/pages/cities/AriegePage';
import AudePage from '@/pages/cities/AudePage';
import AveyronPage from '@/pages/cities/AveyronPage';
import GardPage from '@/pages/cities/GardPage';
import HautesPyreneesPage from '@/pages/cities/HautesPyreneesPage';
import LotPage from '@/pages/cities/LotPage';
import LozerePage from '@/pages/cities/LozerePage';
import TarnPage from '@/pages/cities/TarnPage';
import TarnEtGaronnePage from '@/pages/cities/TarnEtGaronnePage';
import PyreneesOrientalesPage from '@/pages/cities/PyreneesOrientalesPage';
import PerpignanPage from '@/pages/cities/PerpignanPage';
import CahorsPage from '@/pages/cities/CahorsPage';

// Import additional city pages
import AucamvillePage from '@/pages/cities/AucamvillePage';
import AussonnePage from '@/pages/cities/AussonnePage';
import BruguieresPage from '@/pages/cities/BruguieresPage';
import CastelginestPage from '@/pages/cities/CastelginestPage';
import CastanetTolosanPage from '@/pages/cities/CastanetTolosanPage';
import PibracPage from '@/pages/cities/PibracPage';
import PortetSurGaronnePage from '@/pages/cities/PortetSurGaronnePage';
import RoquesPage from '@/pages/cities/RoquesPage';
import SaintJeanPage from '@/pages/cities/SaintJeanPage';
import SeyssesPage from '@/pages/cities/SeyssesPage';

export const routes = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/espace",
    element: <AccessPage />,
  },
  {
    path: "/agent/login",
    element: <AgentLoginPage />,
  },
  {
    path: "/agent/dashboard",
    element: <AgentDashboardPage />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/admin/agents",
    element: <AgentsPage />
  },
  {
    path: "/admin/clients",
    element: <ClientsPage />
  },
  {
    path: "/admin/sites",
    element: <SitesPage />
  },
  {
    path: "/admin/planning",
    element: <PlanningPage />
  },
  {
    path: "/admin/messages",
    element: <MessagesPage />
  },
  {
    path: "/admin/reports",
    element: <ReportsPage />
  },
  {
    path: "/admin/settings",
    element: <SettingsPage />
  },
  {
    path: "/contact",
    element: <ContactPage />
  },
  // Blog routes
  {
    path: "/blog",
    element: <BlogIndex />
  },
  {
    path: "/blog/:slug",
    element: <BlogArticle />
  },
  // Service routes
  {
    path: "/services/gardiennage",
    element: <GardiennagePage />
  },
  {
    path: "/services/securite-evenementielle",
    element: <SecuriteEvenementielle />
  },
  {
    path: "/services/intervention",
    element: <InterventionPage />
  },
  {
    path: "/services/securite-cynophile",
    element: <SecuriteCynophilePage />
  },
  {
    path: "/services/securite-magasin",
    element: <SecuriteMagasinPage />
  },
  {
    path: "/services/securite-residentielle",
    element: <SecuriteResidentiellePage />
  },
  {
    path: "/services/securite-incendie",
    element: <SecuriteIncendiePage />
  },
  // City routes
  {
    path: "/toulouse",
    element: <ToulousePage />
  },
  // Add support for .html extension
  {
    path: "/toulouse.html",
    element: <ToulousePage />
  },
  {
    path: "/villes/:cityId",
    element: <LocalSecurityPage />
  },
  // Add support for .html extension for specific cities with dedicated pages
  {
    path: "/blagnac.html",
    element: <BlagnacPage />
  },
  {
    path: "/colomiers.html",
    element: <LocalSecurityPage cityId="colomiers" />
  },
  {
    path: "/tournefeuille.html",
    element: <LocalSecurityPage cityId="tournefeuille" />
  },
  {
    path: "/muret.html",
    element: <LocalSecurityPage cityId="muret" />
  },
  {
    path: "/villes",
    element: <CitiesList />
  },
  // Department pages routes
  {
    path: "/ariege.html",
    element: <AriegePage />
  },
  {
    path: "/aude.html",
    element: <AudePage />
  },
  {
    path: "/aveyron.html",
    element: <AveyronPage />
  },
  {
    path: "/gard.html",
    element: <GardPage />
  },
  {
    path: "/hautes-pyrenees.html",
    element: <HautesPyreneesPage />
  },
  {
    path: "/lot.html",
    element: <LotPage />
  },
  {
    path: "/lozere.html",
    element: <LozerePage />
  },
  {
    path: "/tarn.html",
    element: <TarnPage />
  },
  {
    path: "/tarn-et-garonne.html", 
    element: <TarnEtGaronnePage />
  },
  {
    path: "/pyrenees-orientales.html",
    element: <PyreneesOrientalesPage />
  },
  {
    path: "/perpignan.html",
    element: <PerpignanPage />
  },
  {
    path: "/cahors.html",
    element: <CahorsPage />
  },
  // Additional city pages
  {
    path: "/aucamville.html",
    element: <AucamvillePage />
  },
  {
    path: "/aussonne.html",
    element: <AussonnePage />
  },
  {
    path: "/bruguieres.html",
    element: <BruguieresPage />
  },
  {
    path: "/castelginest.html",
    element: <CastelginestPage />
  },
  {
    path: "/castanet-tolosan.html",
    element: <CastanetTolosanPage />
  },
  {
    path: "/pibrac.html",
    element: <PibracPage />
  },
  {
    path: "/portet-sur-garonne.html",
    element: <PortetSurGaronnePage />
  },
  {
    path: "/roques.html",
    element: <RoquesPage />
  },
  {
    path: "/saint-jean.html",
    element: <SaintJeanPage />
  },
  {
    path: "/seysses.html",
    element: <SeyssesPage />
  },
  {
    path: "*",
    element: <NotFound />
  }
];

// Corrected AppRoutes function to return routes directly instead of trying to use elements as components
const AppRoutes = () => routes;

export default AppRoutes;
