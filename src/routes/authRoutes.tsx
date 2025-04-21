
import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const AdminLoginPage = lazy(() => import('../pages/auth/AdminLoginPage'));
const ClientLoginPage = lazy(() => import('../pages/auth/ClientLoginPage'));
const AgentLoginPage = lazy(() => import('../pages/auth/AgentLoginPage'));

const AuthRoutes = () => (
  <>
    <Route path="/espace-administrateur" element={<AdminLoginPage />} />
    <Route path="/espace-client" element={<ClientLoginPage />} />
    <Route path="/espace-agent" element={<AgentLoginPage />} />
  </>
);

export default AuthRoutes;
