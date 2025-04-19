
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
import LocalSecurityPage from '@/components/LocalSecurityPage';

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
  // Add support for .html extension for specific cities
  {
    path: "/blagnac.html",
    element: <LocalSecurityPage cityId="blagnac" />
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
    path: "*",
    element: <NotFound />
  }
];

// Corrected AppRoutes function to return routes directly instead of trying to use elements as components
const AppRoutes = () => routes;

export default AppRoutes;
