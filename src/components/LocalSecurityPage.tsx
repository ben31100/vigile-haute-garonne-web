
import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Shield, MapPin, Clock, Check } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import ServiceCard from './ServiceCard';
import { Button } from '@/components/ui/button';

import citiesData from '../data/cities.json';

const LocalSecurityPage: React.FC = () => {
  const { cityId } = useParams<{ cityId: string }>();
  
  // Find the city data based on the URL parameter
  const cityData = citiesData.find(city => city.id === cityId);
  
  // If city not found, display a not found message
  if (!cityData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Ville non trouvée</h1>
        <p>Désolé, nous n'avons pas trouvé d'informations pour cette ville.</p>
        <Button className="mt-4" onClick={() => window.history.back()}>Retour</Button>
      </div>
    );
  }

  // Create the structured data for the city
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "LeVigile - Sécurité à " + cityData.name,
    "description": `Services de sécurité privée professionnels à ${cityData.name}. Gardiennage, surveillance, rondes de sécurité et protection 24h/24 et 7j/7.`,
    "url": `https://www.levigile.fr/securite-ville-${cityData.id}`,
    "logo": "https://www.levigile.fr/logo.png",
    "image": "https://www.levigile.fr/security-company.jpg",
    "telephone": "+33561123456",
    "email": "contact@levigile.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "15 Rue de la Sécurité",
      "addressLocality": cityData.name,
      "postalCode": cityData.postalCode,
      "addressRegion": "Haute-Garonne",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.6047,
      "longitude": 1.4442
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 43.6047,
        "longitude": 1.4442
      },
      "geoRadius": "50000"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/levigile",
      "https://www.linkedin.com/company/levigile",
      "https://twitter.com/levigile"
    ],
    "priceRange": "€€"
  };

  return (
    <>
      <Helmet>
        <title>{cityData.metaTitle}</title>
        <meta name="description" content={cityData.metaDescription} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow pt-24">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-levigile-blue to-levigile-gray py-16 text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                  Agent de sécurité à {cityData.name}
                </h1>
                <p className="text-lg mb-8 opacity-90">
                  Protection professionnelle pour particuliers et entreprises
                  dans toute la commune de {cityData.name} et ses environs. Services disponibles 24h/24.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <Button className="bg-levigile-red hover:bg-red-600 text-white flex gap-2 items-center">
                    <MapPin className="h-4 w-4" />
                    <span>Devis gratuit à {cityData.name}</span>
                  </Button>
                  <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Intervention rapide</span>
                  </Button>
                </div>
                <div className="flex items-center justify-center text-sm bg-white/10 p-3 rounded-lg">
                  <Shield className="h-5 w-5 text-levigile-red mr-2" />
                  <span>Autorisation CNAPS: AUT-031-2115-01-01-20220123456</span>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main text content */}
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold mb-4 text-levigile-blue">
                    Services de sécurité privée à {cityData.name}
                  </h2>
                  
                  <p className="mb-4">
                    LeVigile est votre partenaire de confiance pour tous vos besoins en sécurité à {cityData.name}. 
                    Notre équipe d'agents qualifiés intervient dans l'ensemble de la commune et propose une protection 
                    adaptée aux spécificités locales.
                  </p>
                  
                  <p className="mb-4">
                    Que vous soyez une entreprise, un commerce, un particulier ou un organisateur d'événement 
                    à {cityData.name}, nos services de sécurité vous garantissent tranquillité d'esprit et 
                    protection optimale.
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3 text-levigile-blue">
                    Notre expertise à {cityData.name}
                  </h3>
                  
                  <p className="mb-4">
                    Implantée localement, notre équipe connaît parfaitement {cityData.name} et ses enjeux 
                    sécuritaires. Nous intervenons dans tous les quartiers, notamment 
                    {cityData.neighborhoods.map((neighborhood, index) => (
                      <span key={index}>
                        {index === 0 ? ' ' : index === cityData.neighborhoods.length - 1 ? ' et ' : ', '}
                        <strong>{neighborhood}</strong>
                      </span>
                    ))}.
                  </p>
                  
                  <p className="mb-4">
                    Notre proximité nous permet d'offrir des temps d'intervention rapides et un service 
                    personnalisé selon les besoins spécifiques de votre zone.
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3 text-levigile-blue">
                    Services spécifiques à {cityData.name}
                  </h3>
                  
                  <ul className="mb-6 space-y-2">
                    {cityData.specificServices.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-levigile-red mr-2 shrink-0 mt-1" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="mb-4">
                    Nous intervenons également dans les communes voisines de {cityData.name}, notamment 
                    {cityData.nearbyAreas.map((area, index) => (
                      <span key={index}>
                        {index === 0 ? ' ' : index === cityData.nearbyAreas.length - 1 ? ' et ' : ', '}
                        <strong>{area}</strong>
                      </span>
                    ))}.
                  </p>
                  
                  <div className="mt-8 p-5 bg-levigile-lightgray rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-levigile-blue">
                      Pourquoi choisir LeVigile à {cityData.name} ?
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-levigile-red mr-2 shrink-0 mt-1" />
                        <span>Agents de sécurité certifiés et formés aux spécificités de {cityData.name}</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-levigile-red mr-2 shrink-0 mt-1" />
                        <span>Intervention rapide dans un rayon de 20 km autour de {cityData.name}</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-levigile-red mr-2 shrink-0 mt-1" />
                        <span>Surveillance 24h/24 et 7j/7, jours fériés inclus</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-levigile-red mr-2 shrink-0 mt-1" />
                        <span>Solutions adaptées aux enjeux locaux de {cityData.name}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="bg-levigile-lightgray p-6 rounded-lg shadow-md sticky top-24">
                    <h3 className="text-xl font-bold mb-4 text-levigile-blue">
                      Nos services à {cityData.name}
                    </h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="p-4 bg-white rounded shadow-sm">
                        <h4 className="font-semibold flex items-center text-levigile-blue">
                          <Shield className="h-4 w-4 mr-2 text-levigile-red" />
                          Gardiennage à {cityData.name}
                        </h4>
                        <p className="text-sm mt-2">Protection statique de vos locaux et contrôle d'accès 24h/24.</p>
                      </div>
                      
                      <div className="p-4 bg-white rounded shadow-sm">
                        <h4 className="font-semibold flex items-center text-levigile-blue">
                          <Shield className="h-4 w-4 mr-2 text-levigile-red" />
                          Rondes de sécurité à {cityData.name}
                        </h4>
                        <p className="text-sm mt-2">Surveillance mobile et vérification périodique de vos sites.</p>
                      </div>
                      
                      <div className="p-4 bg-white rounded shadow-sm">
                        <h4 className="font-semibold flex items-center text-levigile-blue">
                          <Shield className="h-4 w-4 mr-2 text-levigile-red" />
                          Sécurité événementielle à {cityData.name}
                        </h4>
                        <p className="text-sm mt-2">Protection pour vos événements professionnels ou privés.</p>
                      </div>
                      
                      <div className="p-4 bg-white rounded shadow-sm">
                        <h4 className="font-semibold flex items-center text-levigile-blue">
                          <Shield className="h-4 w-4 mr-2 text-levigile-red" />
                          Agents SSIAP à {cityData.name}
                        </h4>
                        <p className="text-sm mt-2">Prévention incendie et sécurité dans les ERP de {cityData.name}.</p>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-levigile-red hover:bg-red-600">
                      Contacter notre agence de {cityData.name}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* SEO Content (Hidden) */}
          <div style={{ display: 'none' }}>
            <h2>Agence de sécurité à {cityData.name}</h2>
            <p>Service de sécurité événementielle à {cityData.name}</p>
            <p>Agent SSIAP à {cityData.name}</p>
            <p>Entreprise de gardiennage {cityData.name}</p>
            <p>Société de surveillance à {cityData.name}</p>
            <p>Protection et sécurité à {cityData.name}</p>
            <p>Ronde de sécurité {cityData.name}</p>
            <p>Agent de sécurité qualifié {cityData.name}</p>
            <p>Gardien d'immeuble à {cityData.name}</p>
            <p>Service de sécurité incendie {cityData.name}</p>
            <p>Surveillance de chantier {cityData.name} {cityData.postalCode}</p>
            <p>Protection de biens et de personnes {cityData.name}</p>
          </div>
          
          {/* HTML Comments for SEO */}
          {/* 
            Entreprise de sécurité privée à {cityData.name}
            Meilleure agence de gardiennage à {cityData.name}
            Agent de sécurité événementiel à {cityData.name}
            Service de surveillance 24/7 à {cityData.name}
            Protection de commerces et entreprises à {cityData.name}
            Société de sécurité certifiée à {cityData.name}
          */}
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default LocalSecurityPage;
