
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import citiesData from '../data/cities.json';
import HeroSection from './local-security/HeroSection';
import MainContent from './local-security/MainContent';
import Sidebar from './local-security/Sidebar';
import SeoElements from './local-security/SeoElements';
import CityNotFound from './local-security/CityNotFound';

const LocalSecurityPage: React.FC = () => {
  const { cityId } = useParams<{ cityId: string }>();
  const navigate = useNavigate();
  
  // Debug output to identify issues
  console.log('Current cityId:', cityId);
  console.log('Available cities:', citiesData.map(c => c.id));
  
  // Find the city data based on the URL parameter
  const cityData = cityId ? citiesData.find(city => city.id === cityId) : null;
  
  // If city not found, display a not found message
  if (!cityId || !cityData) {
    console.error(`City not found for ID: ${cityId}`);
    return <CityNotFound />;
  }

  // Default values for missing data properties to ensure components work
  const neighborhoods = cityData.neighborhoods || [];
  const nearbyAreas = cityData.nearbyAreas || ['communes voisines'];
  const specificServices = cityData.specificServices || [
    'Gardiennage de magasins et commerces',
    'Sécurité pour les entreprises et bureaux',
    'Protection des chantiers et sites industriels',
    'Surveillance d\'entrepôts et de zones logistiques',
    'Sécurité événementielle et culturelle'
  ];

  return (
    <>
      <SeoElements 
        cityName={cityData.name}
        cityId={cityData.id}
        postalCode={cityData.postalCode}
        metaTitle={cityData.metaTitle || `Agents de sécurité à ${cityData.name} (${cityData.postalCode}) - LeVigile`}
        metaDescription={cityData.metaDescription || `Services de sécurité privée à ${cityData.name}. Gardiennage, surveillance et protection 24h/24 et 7j/7 dans tout le secteur de ${cityData.name} et ses environs.`}
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow pt-24">
          {/* Hero Section */}
          <HeroSection 
            cityName={cityData.name} 
            postalCode={cityData.postalCode}
          />

          {/* Main Content */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main text content */}
                <MainContent 
                  cityName={cityData.name}
                  neighborhoods={neighborhoods}
                  nearbyAreas={nearbyAreas}
                  specificServices={specificServices}
                />
                
                {/* Sidebar */}
                <Sidebar cityName={cityData.name} />
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default LocalSecurityPage;
