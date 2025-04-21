
import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const ToulousePage = lazy(() => import('../pages/cities/ToulousePage'));
const BlagnacPage = lazy(() => import('../pages/cities/BlagnacPage'));
const ColomersPage = lazy(() => import('../pages/cities/ColomersPage'));
const TournefeuilePage = lazy(() => import('../pages/cities/TournefeuilePage'));
const MuretPage = lazy(() => import('../pages/cities/MuretPage'));
const RamonvillePage = lazy(() => import('../pages/cities/RamonvillePage'));
const SaintGaudensPage = lazy(() => import('../pages/cities/SaintGaudensPage'));
const BalmaPage = lazy(() => import('../pages/cities/BalmaPage'));
const CugnauxPage = lazy(() => import('../pages/cities/CugnauxPage'));
const LUnionPage = lazy(() => import('../pages/cities/LUnionPage'));
const SaintOrensPage = lazy(() => import('../pages/cities/SaintOrensPage'));
const PlaisancePage = lazy(() => import('../pages/cities/PlaisancePage'));
const CastanetTolosanPage = lazy(() => import('../pages/cities/CastanetTolosanPage'));
const FonsorbesPage = lazy(() => import('../pages/cities/FonsorbesPage'));
const PortetSurGaronnePage = lazy(() => import('../pages/cities/PortetSurGaronnePage'));
const SaintJeanPage = lazy(() => import('../pages/cities/SaintJeanPage'));
const AucamvillePage = lazy(() => import('../pages/cities/AucamvillePage'));
const LabegePage = lazy(() => import('../pages/cities/LabegePage'));
const VilleneuveTolosanePage = lazy(() => import('../pages/cities/VilleneuveTolosanePage'));
const LeguevingPage = lazy(() => import('../pages/cities/LeguevingPage'));
const LaunaguetPage = lazy(() => import('../pages/cities/LaunaguetPage'));
const EscalquensPage = lazy(() => import('../pages/cities/EscalquensPage'));
const SeyssesPage = lazy(() => import('../pages/cities/SeyssesPage'));
const AussonnePage = lazy(() => import('../pages/cities/AussonnePage'));
const RoquesPage = lazy(() => import('../pages/cities/RoquesPage'));
const CastelginestPage = lazy(() => import('../pages/cities/CastelginestPage'));
const FenouilletPage = lazy(() => import('../pages/cities/FenouilletPage'));
const PibracPage = lazy(() => import('../pages/cities/PibracPage'));
const BruguieresPage = lazy(() => import('../pages/cities/BruguieresPage'));
const FrouzinsPage = lazy(() => import('../pages/cities/FrouzinsPage'));
const MontaubanPage = lazy(() => import('../pages/cities/MontaubanPage'));
const AlbiPage = lazy(() => import('../pages/cities/AlbiPage'));
const MendePage = lazy(() => import('../pages/cities/MendePage'));
const PerpignanPage = lazy(() => import('../pages/cities/PerpignanPage'));
const CahorsPage = lazy(() => import('../pages/cities/CahorsPage'));

export const cityRoutes = (
  <>
    <Route path="/villes" element={<React.Suspense><div /></React.Suspense>} /> {/* Placehold for CitiesList */}
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
    <Route path="/leguevin.html" element={<LeguevingPage />} />
    <Route path="/securite-ville-leguevin" element={<LeguevingPage />} />
    <Route path="/launaguet.html" element={<LaunaguetPage />} />
    <Route path="/securite-ville-launaguet" element={<LaunaguetPage />} />
    <Route path="/escalquens.html" element={<EscalquensPage />} />
    <Route path="/securite-ville-escalquens" element={<EscalquensPage />} />
    <Route path="/seysses.html" element={<SeyssesPage />} />
    <Route path="/securite-ville-seysses" element={<SeyssesPage />} />
    <Route path="/aussonne.html" element={<AussonnePage />} />
    <Route path="/securite-ville-aussonne" element={<AussonnePage />} />
    <Route path="/roques.html" element={<RoquesPage />} />
    <Route path="/securite-ville-roques" element={<RoquesPage />} />
    <Route path="/castelginest.html" element={<CastelginestPage />} />
    <Route path="/securite-ville-castelginest" element={<CastelginestPage />} />
    <Route path="/fenouillet.html" element={<FenouilletPage />} />
    <Route path="/securite-ville-fenouillet" element={<FenouilletPage />} />
    <Route path="/pibrac.html" element={<PibracPage />} />
    <Route path="/securite-ville-pibrac" element={<PibracPage />} />
    <Route path="/bruguieres.html" element={<BruguieresPage />} />
    <Route path="/securite-ville-bruguieres" element={<BruguieresPage />} />
    <Route path="/frouzins.html" element={<FrouzinsPage />} />
    <Route path="/securite-ville-frouzins" element={<FrouzinsPage />} />
    <Route path="/cahors.html" element={<CahorsPage />} />
    <Route path="/securite-ville-cahors" element={<CahorsPage />} />
    <Route path="/perpignan.html" element={<PerpignanPage />} />
    <Route path="/securite-ville-perpignan" element={<PerpignanPage />} />
    <Route path="/perpignan" element={<PerpignanPage />} />
    <Route path="/montauban.html" element={<MontaubanPage />} />
    <Route path="/securite-ville-montauban" element={<MontaubanPage />} />
    <Route path="/albi.html" element={<AlbiPage />} />
    <Route path="/securite-ville-albi" element={<AlbiPage />} />
    <Route path="/mende.html" element={<MendePage />} />
    <Route path="/securite-ville-mende" element={<MendePage />} />
    {/* Extra route for Tarbes */}
    <Route path="/tarbes.html" element={<PerpignanPage />} />
    <Route path="/tarbes" element={<PerpignanPage />} />
    <Route path="/securite-ville-tarbes" element={<PerpignanPage />} />
  </>
);
