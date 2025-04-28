
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { serviceRoutes } from './routes/serviceRoutes';
import { cityRoutes } from './routes/cityRoutes';
import { departmentRoutes } from './routes/departmentRoutes';
import { authRoutes } from './routes/authRoutes';

// Pages principales (chargement immédiat)
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const MediaManager = lazy(() => import('./pages/MediaManager'));
const CitiesList = lazy(() => import('./pages/CitiesList'));
const BlogIndex = lazy(() => import('./pages/blog/BlogIndex'));
const BlogArticle = lazy(() => import('./pages/blog/BlogArticle'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const LocalSecurityPage = lazy(() => import('./components/LocalSecurityPage'));
const WhyJoinUs = lazy(() => import('./pages/career/WhyJoinUs'));
const OurJobs = lazy(() => import('./pages/career/OurJobs'));
const JobOffers = lazy(() => import('./pages/career/JobOffers'));
const PartnerPage = lazy(() => import('./pages/PartnerPage'));
const PartnerRegistrationPage = lazy(() => import('./pages/PartnerRegistrationPage'));

// Loading fallback
const LoadingFallback = () => (
  <div className="w-full h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-levigile-blue mx-auto mb-4"></div>
      <p className="text-levigile-blue">Chargement...</p>
    </div>
  </div>
);

// Séparation des routes en composants spécialisés
const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/villes/:cityId" element={<LocalSecurityPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Blog */}
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
        {/* Carrière / Partenaires */}
        <Route path="/carriere/pourquoi-nous-rejoindre" element={<WhyJoinUs />} />
        <Route path="/carriere/nos-metiers" element={<OurJobs />} />
        <Route path="/carriere/nos-offres" element={<JobOffers />} />
        <Route path="/devenir-partenaire" element={<PartnerPage />} />
        <Route path="/devenir-partenaire/inscription" element={<PartnerRegistrationPage />} />
        
        {/* Service Routes */}
        {serviceRoutes}
        
        {/* City Routes */}
        {cityRoutes}
        
        {/* Department Routes */}
        {departmentRoutes}
        
        {/* Auth (Espace) Routes */}
        {authRoutes}
        
        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
