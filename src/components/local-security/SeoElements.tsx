
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
  // Date actuelle formatée pour lastmod dans Schema.org
  const today = new Date().toISOString().split('T')[0];
  
  // Create the structured data for the city
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "LeVigile - Sécurité à " + cityName,
    "description": `Services de sécurité privée professionnels à ${cityName}. Gardiennage, surveillance, rondes de sécurité et protection 24h/24 et 7j/7.`,
    "url": `https://levigile.fr/securite-ville-${cityId}`,
    "logo": "https://levigile.fr/logo.png",
    "image": "https://levigile.fr/security-company.jpg",
    "telephone": "+33554546428",
    "email": "contact@levigile.fr",
    "foundingDate": "2020-01-01",
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
    "priceRange": "€€",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Services de sécurité à ${cityName}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Gardiennage à ${cityName}`,
            "description": `Service de gardiennage professionnel à ${cityName}`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Surveillance à ${cityName}`,
            "description": `Service de surveillance 24h/24 à ${cityName}`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Sécurité événementielle à ${cityName}`,
            "description": `Protection d'événements à ${cityName}`
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
        "name": `Client à ${cityName}`
      },
      "reviewBody": `Excellente prestation de sécurité à ${cityName}, agents professionnels et ponctuels.`
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "38",
      "bestRating": "5"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "lastReviewed": today,
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", ".speakable"]
      }
    }
  };

  // Services spécifiques à la ville
  const citySpecificServices = [
    `Service de sécurité événementielle à ${cityName}`,
    `Agent SSIAP à ${cityName}`,
    `Entreprise de gardiennage ${cityName}`,
    `Société de surveillance à ${cityName}`,
    `Protection et sécurité à ${cityName}`,
    `Ronde de sécurité ${cityName}`,
    `Agent de sécurité qualifié ${cityName}`,
    `Gardien d'immeuble à ${cityName}`,
    `Service de sécurité incendie ${cityName}`,
    `Surveillance de chantier ${cityName} ${postalCode}`,
    `Protection de biens et de personnes ${cityName}`,
    `Télésurveillance à ${cityName}`,
    `Vidéosurveillance ${cityName}`,
    `Contrôle d'accès ${cityName}`,
    `Sécurité industrielle ${cityName}`
  ];

  // Créer un array de FAQ schema pour le référencement local
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Quels sont les services de sécurité proposés à ${cityName} ?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `LeVigile propose une gamme complète de services de sécurité à ${cityName} incluant le gardiennage, la surveillance, les rondes de sécurité, la sécurité événementielle, et la protection incendie (SSIAP).`
        }
      },
      {
        "@type": "Question",
        "name": `Comment contacter LeVigile pour un service de sécurité à ${cityName} ?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Vous pouvez contacter LeVigile au 05 54 54 64 28 pour discuter de vos besoins en sécurité à ${cityName} ou demander un devis gratuit via notre formulaire en ligne.`
        }
      },
      {
        "@type": "Question",
        "name": `Quel est le délai d'intervention de LeVigile à ${cityName} ?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `LeVigile garantit une intervention rapide dans tout ${cityName}, généralement en moins de 30 minutes selon votre localisation. Nos équipes sont disponibles 24h/24 et 7j/7.`
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`sécurité ${cityName}, gardiennage ${cityName}, surveillance ${cityName}, agent de sécurité ${cityName}, protection ${postalCode}, SSIAP ${cityName}`} />
        <link rel="canonical" href={`https://levigile.fr/securite-ville-${cityId}`} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={`https://levigile.fr/securite-ville-${cityId}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://levigile.fr/logo.png" />
        <meta property="og:locale" content="fr_FR" />
        
        {/* Balises de géolocalisation pour le SEO local */}
        <meta name="geo.region" content="FR-31" />
        <meta name="geo.placename" content={cityName} />
        
        {/* Schema.org LD+JSON pour cette ville */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        
        {/* FAQs Schema pour cette ville */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      {/* SEO Content (Hidden) */}
      <div style={{ display: 'none' }}>
        <h2 className="speakable">Agence de sécurité à {cityName}</h2>
        <p>Bienvenue chez LeVigile, votre partenaire de confiance pour tous vos besoins en sécurité à {cityName}.</p>
        
        <div className="services-grid">
          {citySpecificServices.map((service, index) => (
            <div key={index} className="service-item">
              <h3>{service}</h3>
              <p>LeVigile propose des services de {service.toLowerCase()} adaptés aux besoins spécifiques des entreprises et particuliers.</p>
            </div>
          ))}
        </div>
        
        <section className="local-expertise">
          <h3>Notre expertise locale à {cityName}</h3>
          <p>Avec une connaissance approfondie de {cityName} et de ses quartiers, nos agents de sécurité offrent une protection adaptée aux spécificités locales. Notre équipe d'intervention peut vous assister rapidement grâce à notre présence permanente à {cityName} et ses environs.</p>
          
          <h4>Zones d'intervention à {cityName} {postalCode}</h4>
          <p>Nous intervenons dans tous les quartiers de {cityName}, ainsi que dans les communes limitrophes pour vous garantir une protection optimale.</p>
        </section>
      </div>
      
      {/* HTML Comments for SEO */}
      {/* 
        Entreprise de sécurité privée à {cityName}
        Meilleure agence de gardiennage à {cityName}
        Agent de sécurité événementiel à {cityName}
        Service de surveillance 24/7 à {cityName}
        Protection de commerces et entreprises à {cityName}
        Société de sécurité certifiée à {cityName}
        Intervention d'urgence à {cityName}
        Sécurité avec agents qualifiés à {cityName}
        Gardiennage professionnel {postalCode}
        LeVigile - Protection sur mesure à {cityName}
      */}
    </>
  );
};

export default SeoElements;
