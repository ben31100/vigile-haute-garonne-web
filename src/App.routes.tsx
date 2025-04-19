import { Espace } from '@/pages/espace';
import { AgentLogin } from '@/pages/agent/login';
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

export const routes = [
  {
    path: "/",
    element: <Espace />,
  },
  {
    path: "/espace",
    element: <Espace />,
  },
  {
    path: "/agent/login",
    element: <AgentLogin />,
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
  }
];
