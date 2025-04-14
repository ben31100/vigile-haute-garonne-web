
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Search } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import { Input } from '@/components/ui/input';

import citiesData from '../data/cities.json';
import { useState } from 'react';

const CitiesList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter cities based on search term
  const filteredCities = citiesData.filter(city => 
    city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    city.postalCode.includes(searchTerm)
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Nos zones d'intervention en Haute-Garonne | LeVigile</title>
        <meta name="description" content="Découvrez les villes où LeVigile intervient pour assurer votre sécurité en Haute-Garonne. Services de gardiennage, surveillance et protection disponibles 24h/24." />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow pt-24">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6 text-center text-levigile-blue">
              Nos zones d'intervention en Haute-Garonne
            </h1>
            
            <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
              LeVigile propose ses services de sécurité privée dans l'ensemble du département 
              de la Haute-Garonne (31). Découvrez nos prestations adaptées à votre ville.
            </p>
            
            <div className="max-w-md mx-auto mb-10 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Rechercher une ville ou un code postal..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCities.length > 0 ? (
                filteredCities.map((city) => (
                  <Link
                    key={city.id}
                    to={`/securite-ville-${city.id}`}
                    className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-levigile-blue hover:border-levigile-red"
                  >
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-levigile-red shrink-0 mt-1" />
                      <div className="ml-3">
                        <h2 className="text-xl font-bold text-levigile-blue mb-2">
                          Sécurité à {city.name}
                        </h2>
                        <p className="text-gray-600 text-sm mb-2">
                          {city.postalCode} - Haute-Garonne
                        </p>
                        <p className="text-gray-700">
                          {city.description.substring(0, 100)}
                          {city.description.length > 100 ? '...' : ''}
                        </p>
                        <p className="mt-3 text-levigile-blue font-medium text-sm hover:underline">
                          Découvrir nos services à {city.name} →
                        </p>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="col-span-full text-center p-8">
                  <p className="text-lg">Aucune ville ne correspond à votre recherche.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CitiesList;
