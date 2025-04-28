
import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const AriegePage = lazy(() => import('../pages/cities/AriegePage'));
const AudePage = lazy(() => import('../pages/cities/AudePage'));
const AveyronPage = lazy(() => import('../pages/cities/AveyronPage'));
const GardPage = lazy(() => import('../pages/cities/GardPage'));
const LotPage = lazy(() => import('../pages/cities/LotPage'));
const LozerePage = lazy(() => import('../pages/cities/LozerePage'));
const HautesPyreneesPage = lazy(() => import('../pages/cities/HautesPyreneesPage'));
const PyreneesOrientalesPage = lazy(() => import('../pages/cities/PyreneesOrientalesPage'));
const TarnPage = lazy(() => import('../pages/cities/TarnPage'));
const TarnEtGaronnePage = lazy(() => import('../pages/cities/TarnEtGaronnePage'));

export const departmentRoutes = (
  <>
    <Route path="/ariege.html" element={<AriegePage />} />
    <Route path="/aude.html" element={<AudePage />} />
    <Route path="/aveyron.html" element={<AveyronPage />} />
    <Route path="/gard.html" element={<GardPage />} />
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
  </>
);
