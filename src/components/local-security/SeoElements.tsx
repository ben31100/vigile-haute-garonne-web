
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoElementsProps {
  cityName: string;
  cityId: string;
  postalCode: string;
  metaTitle: string;
  metaDescription: string;
}

const SeoElements: React.FC<SeoElementsProps> = ({ 
  cityName, 
  cityId, 
  postalCode, 
  metaTitle, 
  metaDescription 
}) => {
  // Create the structured data for the city
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "LeVigile - Sécurité à " + cityName,
    "description": `Services de sécurité privée professionnels à ${cityName}. Gardiennage, surveillance, rondes de sécurité et protection 24h/24 et 7j/7.`,
    "url": `https://www.levigile.fr/securite-ville-${cityId}`,
    "logo": "https://www.levigile.fr/logo.png",
    "image": "https://www.levigile.fr/security-company.jpg",
    "telephone": "+33554546428",
    "email": "contact@levigile.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "15 Rue de la Sécurité",
      "addressLocality": cityName,
      "postalCode": postalCode,
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
    "priceRange": "€€"
  };

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      {/* SEO Content (Hidden) */}
      <div style={{ display: 'none' }}>
        <h2>Agence de sécurité à {cityName}</h2>
        <p>Service de sécurité événementielle à {cityName}</p>
        <p>Agent SSIAP à {cityName}</p>
        <p>Entreprise de gardiennage {cityName}</p>
        <p>Société de surveillance à {cityName}</p>
        <p>Protection et sécurité à {cityName}</p>
        <p>Ronde de sécurité {cityName}</p>
        <p>Agent de sécurité qualifié {cityName}</p>
        <p>Gardien d'immeuble à {cityName}</p>
        <p>Service de sécurité incendie {cityName}</p>
        <p>Surveillance de chantier {cityName} {postalCode}</p>
        <p>Protection de biens et de personnes {cityName}</p>
      </div>
      
      {/* HTML Comments for SEO */}
      {/* 
        Entreprise de sécurité privée à {cityName}
        Meilleure agence de gardiennage à {cityName}
        Agent de sécurité événementiel à {cityName}
        Service de surveillance 24/7 à {cityName}
        Protection de commerces et entreprises à {cityName}
        Société de sécurité certifiée à {cityName}
      */}
    </>
  );
};

export default SeoElements;
