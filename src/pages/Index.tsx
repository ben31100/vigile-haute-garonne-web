
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
    "knowsLanguage": ["fr-FR"]
  };

  const localCities = [
    "Toulouse", "Blagnac", "Colomiers", "Tournefeuille", "Muret", 
    "Ramonville-Saint-Agne", "Saint-Gaudens", "Balma", "Cugnaux", "L'Union", 
    "Saint-Orens-de-Gameville", "Plaisance-du-Touch"
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
        
        {/* Hidden SEO content for local cities */}
        <div className="hidden">
          <h2>Zones d'intervention en Occitanie</h2>
          <p>LeVigile intervient dans toute l'Occitanie, particulièrement dans les départements suivants:</p>
          <ul>
            {["Haute-Garonne (31)", "Ariège (09)", "Aude (11)", "Aveyron (12)", "Gard (30)", 
              "Gers (32)", "Hérault (34)", "Lot (46)", "Lozère (48)", "Hautes-Pyrénées (65)", 
              "Pyrénées-Orientales (66)", "Tarn (81)", "Tarn-et-Garonne (82)"].map((dep, i) => (
              <li key={i}>{dep}</li>
            ))}
          </ul>
          
          <h3>Services de sécurité dans les principales villes</h3>
          <ul>
            {localCities.map((city, i) => (
              <li key={i}>Sécurité privée à {city}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Index;
