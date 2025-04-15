
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaSection from '../components/cities/CtaSection';

const Index: React.FC = () => {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "LeVigile - Sécurité privée en Haute-Garonne et Occitanie",
    "description": "Entreprise de sécurité privée en Haute-Garonne et Occitanie. Services de gardiennage, surveillance, rondes de sécurité et sécurité événementielle à Toulouse et dans toute la région Occitanie.",
    "url": "https://levigile.fr",
    "logo": "https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//logo%20levigile%20securite.png",
    "image": "https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//gardiennage-hero.jpg",
    "telephone": "+33554546428",
    "email": "contact@levigile.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8 Pl. Roger Salengro.",
      "addressLocality": "Toulouse",
      "postalCode": "31000",
      "addressRegion": "Haute-Garonne",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.6047,
      "longitude": 1.4442
    },
    "areaServed": [
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 43.6047,
          "longitude": 1.4442
        },
        "geoRadius": "50000"
      },
      {
        "@type": "State",
        "name": "Occitanie"
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+33780817979",
        "contactType": "Urgence",
        "availableLanguage": ["Français"]
      },
      {
        "@type": "ContactPoint",
        "email": "levigile31@gmail.com",
        "contactType": "Recrutement",
        "availableLanguage": ["Français"]
      }
    ],
    "sameAs": [
      "https://x.com/levigile31/",
      "https://www.facebook.com/LevigileToulousain?locale=fr_FR"
    ],
    "priceRange": "€€",
    "knowsLanguage": ["fr-FR"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de sécurité privée",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gardiennage",
            "description": "Service de gardiennage pour entreprises et particuliers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sécurité événementielle",
            "description": "Service de sécurité pour événements privés et professionnels"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Surveillance",
            "description": "Surveillance de sites et rondes de sécurité"
          }
        }
      ]
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.8",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Client Entreprise"
      },
      "reviewBody": "Service de qualité avec des agents professionnels et réactifs."
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "53",
      "bestRating": "5"
    }
  };

  const localCities = [
    "Toulouse", "Blagnac", "Colomiers", "Tournefeuille", "Muret", 
    "Ramonville-Saint-Agne", "Saint-Gaudens", "Balma", "Cugnaux", "L'Union", 
    "Saint-Orens-de-Gameville", "Plaisance-du-Touch"
  ];

  // Liste complète des départements d'Occitanie pour SEO
  const occitanieDepartments = [
    { name: "Haute-Garonne", code: "31" },
    { name: "Ariège", code: "09" },
    { name: "Aude", code: "11" },
    { name: "Aveyron", code: "12" },
    { name: "Gard", code: "30" },
    { name: "Gers", code: "32" },
    { name: "Hérault", code: "34" },
    { name: "Lot", code: "46" },
    { name: "Lozère", code: "48" },
    { name: "Hautes-Pyrénées", code: "65" },
    { name: "Pyrénées-Orientales", code: "66" },
    { name: "Tarn", code: "81" },
    { name: "Tarn-et-Garonne", code: "82" }
  ];

  return (
    <>
      <Helmet>
        <title>LeVigile - Sécurité privée en Haute-Garonne et Occitanie | Gardiennage, Surveillance</title>
        <meta name="description" content="Entreprise de sécurité privée en Haute-Garonne et Occitanie. Services professionnels de gardiennage, surveillance, rondes de sécurité et sécurité événementielle 24h/24 et 7j/7." />
        <meta name="keywords" content="sécurité privée, gardiennage, surveillance, agent de sécurité, Toulouse, Haute-Garonne, Occitanie, protection, SSIAP, événementiel" />
        <meta property="og:title" content="LeVigile - Sécurité privée en Haute-Garonne et Occitanie" />
        <meta property="og:description" content="Services professionnels de gardiennage, surveillance et sécurité en Occitanie. Protection 24h/24 et 7j/7." />
        <meta property="og:url" content="https://levigile.fr" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//logo%20levigile%20securite.png" />
        <link rel="canonical" href="https://levigile.fr" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <TestimonialsSection />
          <CtaSection 
            title="Votre sécurité est notre priorité" 
            subtitle="Contactez-nous dès aujourd'hui pour discuter de vos besoins en matière de sécurité et recevoir un devis personnalisé."
          />
        </main>
        <Footer />
        
        {/* Hidden SEO content for local cities and departments */}
        <div className="hidden">
          <h2>Zones d'intervention en Occitanie</h2>
          <p>LeVigile intervient dans toute l'Occitanie, particulièrement dans les départements suivants:</p>
          <ul>
            {occitanieDepartments.map((dep, i) => (
              <li key={i}>{dep.name} ({dep.code})</li>
            ))}
          </ul>
          
          <h3>Services de sécurité dans les principales villes</h3>
          <div className="city-grid">
            {localCities.map((city, i) => (
              <div key={i} className="city-item">
                <h4>Services de sécurité à {city}</h4>
                <ul>
                  <li>Gardiennage à {city}</li>
                  <li>Surveillance à {city}</li>
                  <li>Rondes de sécurité à {city}</li>
                  <li>Sécurité événementielle à {city}</li>
                  <li>Agents SSIAP à {city}</li>
                </ul>
              </div>
            ))}
          </div>
          
          <section className="departments-list">
            <h3>Nos services par département en Occitanie</h3>
            {occitanieDepartments.map((dep, i) => (
              <div key={i} className="department-item">
                <h4>Sécurité privée en {dep.name} ({dep.code})</h4>
                <p>LeVigile propose des services de sécurité privée professionnels dans tout le département du {dep.name}. Nos agents qualifiés interviennent 24h/24 et 7j/7 pour assurer la protection de vos biens et de vos personnes.</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Index;
