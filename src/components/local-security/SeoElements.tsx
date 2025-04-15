
import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SeoElementsProps {
  cityName: string;
  cityId: string;
  postalCode: string;
  metaTitle: string;
  metaDescription: string;
}

export interface FaqItem {
  question: string;
  answer: string;
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
  
  // Génération des questions/réponses fréquentes spécifiques à la ville
  const generateFaqItems = (city: string, postal: string): FaqItem[] => {
    return [
      {
        question: `Quels sont les services de sécurité proposés par LeVigile à ${city} ?`,
        answer: `LeVigile propose à ${city} (${postal}) des services complets de sécurité privée incluant le gardiennage, la surveillance de sites, les rondes de sécurité, la protection d'événements, l'intervention sur alarme et la sécurité incendie. Tous nos agents sont certifiés et formés spécifiquement pour intervenir sur ${city} et ses environs.`
      },
      {
        question: `Comment contacter LeVigile pour un devis de sécurité à ${city} ?`,
        answer: `Pour obtenir un devis gratuit et personnalisé pour vos besoins en sécurité à ${city}, vous pouvez nous contacter au 05 54 54 64 28 ou par email à contact@levigile.fr. Notre équipe locale vous répondra sous 24h avec une proposition adaptée à votre situation spécifique.`
      },
      {
        question: `LeVigile intervient-il en urgence à ${city} ?`,
        answer: `Oui, LeVigile dispose d'une équipe d'intervention rapide disponible 24h/24 et 7j/7 à ${city} et dans toute la région. En cas d'urgence, contactez notre numéro dédié au 07 80 81 79 79 pour une intervention immédiate de nos agents de sécurité.`
      },
      {
        question: `Quels quartiers de ${city} sont couverts par les services de LeVigile ?`,
        answer: `LeVigile couvre l'intégralité des quartiers de ${city} (${postal}) ainsi que les communes environnantes. Nos agents connaissent parfaitement le terrain et sont formés aux spécificités locales pour garantir une sécurité optimale sur l'ensemble du territoire.`
      },
      {
        question: `Quels types d'établissements peuvent bénéficier des services de LeVigile à ${city} ?`,
        answer: `À ${city}, LeVigile sécurise tous types d'établissements : commerces, entreprises, sites industriels, résidences, copropriétés, chantiers, établissements publics et événements. Chaque client bénéficie d'une solution sur mesure adaptée à ses besoins spécifiques et aux particularités de ${city}.`
      }
    ];
  };

  // Génération du FAQ pour cette ville
  const faqItems = generateFaqItems(cityName, postalCode);
  
  // Create the structured data for the city
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `LeVigile - Sécurité privée à ${cityName}`,
    "description": metaDescription,
    "url": `https://levigile.fr/securite-ville-${cityId}`,
    "logo": "https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//logo%20levigile%20securite.png",
    "image": "https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//gardiennage-hero.jpg",
    "telephone": "+33554546428",
    "email": "contact@levigile.fr",
    "areaServed": {
      "@type": "City",
      "name": cityName,
      "postalCode": postalCode
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8 Pl. Roger Salengro",
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
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "€€",
    "slogan": `Protection professionnelle 24h/24 à ${cityName}`,
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 43.6047,
        "longitude": 1.4442
      },
      "geoRadius": "100000"
    }
  };

  // FAQ Schema pour Position 0
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="keywords" content={`sécurité ${cityName}, gardiennage ${cityName}, agent sécurité ${postalCode}, surveillance ${cityName}, protection ${cityName}, rondes de sécurité ${cityName}, sécurité privée ${postalCode}`} />
      <link rel="canonical" href={`https://levigile.fr/securite-ville-${cityId}`} />
      
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={`https://levigile.fr/securite-ville-${cityId}`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="LeVigile Sécurité" />
      <meta property="og:image" content="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//gardiennage-hero.jpg" />
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

export default SeoElements;
