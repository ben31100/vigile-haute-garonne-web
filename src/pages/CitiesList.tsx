import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Search } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import { Input } from '@/components/ui/input';
import citiesData from '../data/cities.json';
import { useState } from 'react';

// Interface pour les départements
interface Department {
  id: string;
  name: string;
  code: string;
}

const CitiesList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Définition des départements
  const departments: Department[] = [{
    id: "ariege",
    name: "Ariège",
    code: "09"
  }, {
    id: "aude",
    name: "Aude",
    code: "11"
  }, {
    id: "aveyron",
    name: "Aveyron",
    code: "12"
  }, {
    id: "gard",
    name: "Gard",
    code: "30"
  }, {
    id: "haute-garonne",
    name: "Haute-Garonne",
    code: "31"
  }, {
    id: "gers",
    name: "Gers",
    code: "32"
  }, {
    id: "herault",
    name: "Hérault",
    code: "34"
  }, {
    id: "lot",
    name: "Lot",
    code: "46"
  }, {
    id: "lozere",
    name: "Lozère",
    code: "48"
  }, {
    id: "hautes-pyrenees",
    name: "Hautes-Pyrénées",
    code: "65"
  }, {
    id: "pyrenees-orientales",
    name: "Pyrénées-Orientales",
    code: "66"
  }, {
    id: "tarn",
    name: "Tarn",
    code: "81"
  }, {
    id: "tarn-et-garonne",
    name: "Tarn-et-Garonne",
    code: "82"
  }];

  // Filter cities based on search term
  const filteredCities = citiesData.filter(city => 
    city.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    city.postalCode.includes(searchTerm)
  );

  // Regrouper les villes par code postal (département)
  const getCitiesByDepartment = (departmentCode: string) => {
    return filteredCities.filter(city => city.postalCode.startsWith(departmentCode));
  };

  // Helper function to determine the correct link for each city
  const getCityLink = (cityId: string) => {
    const htmlPages = ['toulouse', 'blagnac', 'colomiers', 'tournefeuille', 'muret', 'ramonville', 'saint-gaudens', 'balma', 'cugnaux', 'lunion', 'saint-orens', 'plaisance'];
    
    // Special handling for department pages
    if (cityId === 'foix') return '/ariege.html';
    if (cityId === 'carcassonne') return '/aude.html';
    if (cityId === 'rodez') return '/aveyron.html';
    if (cityId === 'nimes') return '/gard.html';
    
    // Regular city pages
    return htmlPages.includes(cityId) ? `/${cityId}.html` : `/securite-ville-${cityId}`;
  };
  
  // Helper function to determine text for department links
  const getLinkText = (department: Department, city: any) => {
    // For specific departments, customize the link text
    if (department.id === 'ariege') {
      return "Découvrir nos services dans l'Ariège →";
    } else if (department.id === 'aude') {
      return "Découvrir nos services dans l'Aude →";
    } else if (department.id === 'aveyron') {
      return "Découvrir nos services dans l'Aveyron →";
    } else if (department.id === 'gard') {
      return "Découvrir nos services dans le Gard →";
    }
    
    // Default text for cities
    return `Découvrir nos services à ${city.name} →`;
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Nos zones d'intervention en Occitanie | LeVigile</title>
        <meta 
          name="description" 
          content="Découvrez les villes où LeVigile intervient pour assurer votre sécurité en Occitanie. Services de gardiennage, surveillance et protection disponibles 24h/24 dans 7 départements." 
        />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow pt-24">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6 text-center text-levigile-blue">
              Nos zones d'intervention en Occitanie
            </h1>
            
            <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
              LeVigile propose ses services de sécurité privée dans plusieurs départements 
              d'Occitanie. Découvrez nos prestations adaptées à votre ville.
            </p>
            
            <div className="max-w-md mx-auto mb-10 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input 
                type="text" 
                placeholder="Rechercher une ville ou un code postal..." 
                value={searchTerm} 
                onChange={e => setSearchTerm(e.target.value)} 
                className="pl-10 bg-white text-gray-800 rounded-xl border border-gray-300" 
              />
            </div>
            
            {departments.map(department => {
              const departmentCities = getCitiesByDepartment(department.code);

              // Ne pas afficher les départements sans villes correspondant à la recherche
              if (departmentCities.length === 0) {
                return null;
              }
              
              return (
                <div key={department.id} className="mb-12">
                  <h2 className="text-2xl font-semibold text-levigile-blue mb-6 border-b pb-2">
                    {department.name} ({department.code})
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {departmentCities.map(city => (
                      <Link 
                        key={city.id} 
                        to={getCityLink(city.id)} 
                        className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-levigile-blue hover:border-levigile-red"
                      >
                        <div className="flex items-start">
                          <MapPin className="h-6 w-6 text-levigile-red shrink-0 mt-1" />
                          <div className="ml-3">
                            <h2 className="text-xl font-bold text-levigile-blue mb-2">
                              Sécurité à {city.name}
                            </h2>
                            <p className="text-gray-600 text-sm mb-2">
                              {city.postalCode} - {department.name}
                            </p>
                            <p className="text-gray-700">
                              {city.description.substring(0, 100)}
                              {city.description.length > 100 ? '...' : ''}
                            </p>
                            <p className="mt-3 text-levigile-blue font-medium text-sm hover:underline">
                              {getLinkText(department, city)}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
            
            {filteredCities.length === 0 && (
              <div className="text-center p-8">
                <p className="text-lg">Aucune ville ne correspond à votre recherche.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CitiesList;
