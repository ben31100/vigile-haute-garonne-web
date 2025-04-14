
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Shield, Building, Users, Check, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import citiesData from '@/data/cities.json';
import { Card, CardContent } from '@/components/ui/card';

const CityServicePage: React.FC = () => {
  const { cityId } = useParams<{ cityId: string }>();
  const navigate = useNavigate();
  
  // Find the city data based on the URL parameter
  const cityData = cityId ? citiesData.find(city => city.id === cityId) : null;
  
  useEffect(() => {
    // If city not found, redirect to cities list
    if (!cityId || !cityData) {
      navigate('/villes');
    }
  }, [cityId, cityData, navigate]);

  // Exit early if no city data
  if (!cityData) {
    return null;
  }

  const handlePhoneCall = () => {
    window.location.href = 'tel:+33554546428';
  };

  const handleEmailContact = () => {
    window.location.href = 'mailto:contact@levigile.fr';
  };

  // Generic services list that appears for all cities
  const genericServices = [
    {
      title: "Gardiennage",
      description: `Protection des locaux professionnels, commerces et sites sensibles à ${cityData.name} par des agents de sécurité qualifiés présents 24h/24.`,
      icon: Building
    },
    {
      title: "Sécurité événementielle",
      description: `Organisation et sécurisation de vos événements à ${cityData.name} : contrôle d'accès, gestion des flux, prévention des risques.`,
      icon: Users
    },
    {
      title: "Rondes de surveillance",
      description: `Patrouilles de sécurité régulières sur vos sites à ${cityData.name} et ses environs pour prévenir les intrusions et actes malveillants.`,
      icon: Shield
    },
    {
      title: "Protection incendie",
      description: `Services SSIAP pour la prévention et la sécurité incendie de vos établissements à ${cityData.name}, conformes aux normes en vigueur.`,
      icon: MapPin
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services de sécurité à {cityData.name} | LeVigile</title>
        <meta name="description" content={`Découvrez nos services de sécurité privée à ${cityData.name} (${cityData.postalCode}). Gardiennage, surveillance, rondes et protection adaptés à vos besoins.`} />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow pt-24">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-levigile-blue to-levigile-gray py-16 text-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-col items-center text-center">
                <MapPin className="h-16 w-16 text-levigile-red mb-4" />
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Nos services de sécurité à {cityData.name}
                </h1>
                <p className="text-lg max-w-3xl mb-8">
                  LeVigile assure votre protection dans toute la ville de {cityData.name} ({cityData.postalCode}) 
                  avec des services de sécurité adaptés aux spécificités locales.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-levigile-red hover:bg-red-600 text-white"
                    onClick={handlePhoneCall}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Appeler au 05 54 54 64 28
                  </Button>
                  <Link to={`/${cityData.id}.html`}>
                    <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                      <Shield className="mr-2 h-5 w-5" />
                      Page complète de {cityData.name}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Services Details */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8 text-levigile-blue text-center">
                Services professionnels à {cityData.name}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {genericServices.map((service, index) => (
                  <Card key={index} className="border-l-4 border-l-levigile-blue hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="mr-4 p-3 bg-levigile-blue/10 rounded-full">
                          <service.icon className="h-6 w-6 text-levigile-blue" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-xl mb-2 text-levigile-blue">{service.title}</h3>
                          <p className="text-gray-600">{service.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* City-specific services */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-inner mb-12">
                <h3 className="text-xl font-bold mb-6 text-levigile-blue">
                  Services spécifiques à {cityData.name}
                </h3>
                <ul className="space-y-4">
                  {cityData.specificServices && cityData.specificServices.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-levigile-red mr-3 shrink-0 mt-1" />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Coverage areas */}
              <div className="mb-12">
                <h3 className="text-xl font-bold mb-4 text-levigile-blue">
                  Nos zones d'intervention à {cityData.name}
                </h3>
                <p className="mb-4">
                  Nos agents interviennent dans tous les quartiers de {cityData.name}, notamment :
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                  {cityData.neighborhoods && cityData.neighborhoods.map((neighborhood, index) => (
                    <div key={index} className="bg-levigile-blue/5 p-3 rounded flex items-center">
                      <MapPin className="h-4 w-4 text-levigile-red mr-2" />
                      <span>{neighborhood}</span>
                    </div>
                  ))}
                </div>
                <p>
                  Nous intervenons également dans les communes voisines de {cityData.name} :
                  {cityData.nearbyAreas && cityData.nearbyAreas.map((area, index) => (
                    <span key={index} className="font-medium">
                      {index === 0 ? ' ' : index === cityData.nearbyAreas.length - 1 ? ' et ' : ', '}
                      {area}
                    </span>
                  ))}
                </p>
              </div>
              
              {/* CTA Section */}
              <div className="bg-levigile-blue text-white p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Besoin d'un service de sécurité à {cityData.name} ?
                </h3>
                <p className="mb-6 max-w-2xl mx-auto">
                  Nos équipes sont disponibles 24h/24 et 7j/7 pour répondre à vos besoins spécifiques
                  et vous proposer une solution adaptée à votre situation à {cityData.name}.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-levigile-blue hover:bg-gray-100"
                    onClick={handlePhoneCall}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Appeler au 05 54 54 64 28
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white text-white bg-levigile-red hover:bg-red-600"
                    onClick={handleEmailContact}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Demander un devis
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default CityServicePage;
