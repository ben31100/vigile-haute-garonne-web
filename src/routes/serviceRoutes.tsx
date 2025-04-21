
import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const GardiennagePage = lazy(() => import('../pages/services/GardiennagePage'));
const SecuriteEvenementielle = lazy(() => import('../pages/services/SecuriteEvenementielle'));
const InterventionPage = lazy(() => import('../pages/services/InterventionPage'));
const SecuriteCynophilePage = lazy(() => import('../pages/services/SecuriteCynophilePage'));
const SecuriteMagasinPage = lazy(() => import('../pages/services/SecuriteMagasinPage'));
const SecuriteResidentiellePage = lazy(() => import('../pages/services/SecuriteResidentiellePage'));
const SecuriteIncendiePage = lazy(() => import('../pages/services/SecuriteIncendiePage'));

const ServiceRoutes = () => (
  <>
    <Route path="/services/gardiennage" element={<GardiennagePage />} />
    <Route path="/services/securite-evenementielle" element={<SecuriteEvenementielle />} />
    <Route path="/services/intervention" element={<InterventionPage />} />
    <Route path="/services/securite-cynophile" element={<SecuriteCynophilePage />} />
    <Route path="/services/securite-magasin" element={<SecuriteMagasinPage />} />
    <Route path="/services/securite-residentielle" element={<SecuriteResidentiellePage />} />
    <Route path="/services/securite-incendie" element={<SecuriteIncendiePage />} />
  </>
);

export default ServiceRoutes;
