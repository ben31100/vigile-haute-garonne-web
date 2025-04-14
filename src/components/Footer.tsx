
import React from 'react';
import { MapPin, Phone, Mail, PhoneCall, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import citiesData from '../data/cities.json';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  // Featured cities to display in the footer
  const featuredCities = ["toulouse", "blagnac", "colomiers", "tournefeuille", "muret", "saint-gaudens", "ramonville"];

  return (
    <footer id="contact" className="bg-levigile-blue text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-levigile-red" />
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-levigile-red" />
                <span>8 Pl. Roger Salengro<br />31000 Toulouse</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 shrink-0 text-levigile-red" />
                <a href="tel:+33554546428" className="hover:underline transition-colors hover:text-levigile-red">05 54 54 64 28</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 shrink-0 text-levigile-red" />
                <a href="mailto:contact@levigile.fr" className="hover:underline transition-colors hover:text-levigile-red">contact@levigile.fr</a>
              </li>
              <li className="flex items-center">
                <PhoneCall className="mr-2 h-5 w-5 shrink-0 text-levigile-red" />
                <a href="tel:+33780817979" className="hover:underline transition-colors hover:text-levigile-red">Urgence: 07 80 81 79 79</a>
              </li>
            </ul>
          </div>

          {/* Nos services */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Shield className="mr-2 h-5 w-5 text-levigile-red" />
              Nos services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#services" className="hover:text-levigile-red transition-colors flex items-center">
                  <div className="w-1.5 h-1.5 bg-levigile-red rounded-full mr-2"></div>
                  Gardiennage d'entreprise
                </Link>
              </li>
              <li>
                <Link to="/#services" className="hover:text-levigile-red transition-colors flex items-center">
                  <div className="w-1.5 h-1.5 bg-levigile-red rounded-full mr-2"></div>
                  Sécurité événementielle
                </Link>
              </li>
              <li>
                <Link to="/#services" className="hover:text-levigile-red transition-colors flex items-center">
                  <div className="w-1.5 h-1.5 bg-levigile-red rounded-full mr-2"></div>
                  Rondes de sécurité
                </Link>
              </li>
              <li>
                <Link to="/#services" className="hover:text-levigile-red transition-colors flex items-center">
                  <div className="w-1.5 h-1.5 bg-levigile-red rounded-full mr-2"></div>
                  Protection de chantier
                </Link>
              </li>
              <li>
                <Link to="/#services" className="hover:text-levigile-red transition-colors flex items-center">
                  <div className="w-1.5 h-1.5 bg-levigile-red rounded-full mr-2"></div>
                  Surveillance d'entrepôts
                </Link>
              </li>
            </ul>
          </div>

          {/* Zone d'intervention */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-levigile-red" />
              Zone d'intervention
            </h3>
            <p className="mb-3">
              Nos agents interviennent sur l'ensemble du département de la Haute-Garonne (31):
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {citiesData
                .filter(city => featuredCities.includes(city.id))
                .map((city) => {
                  const cityHtmlUrl = `/${city.id}.html`;
                  return (
                    <Link 
                      key={city.id}
                      to={cityHtmlUrl}
                      className="bg-white/10 px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-colors"
                      aria-label={`Services de sécurité à ${city.name}`}
                    >
                      {city.name}
                    </Link>
                  );
                })}
              <Link 
                to="/villes"
                className="bg-levigile-red px-3 py-1 rounded-full text-sm hover:bg-red-600 transition-colors"
                aria-label="Voir toutes nos villes d'intervention"
              >
                Voir toutes
              </Link>
            </div>
          </div>

          {/* Liens légaux et info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Clock className="mr-2 h-5 w-5 text-levigile-red" />
              Informations
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:text-levigile-red transition-colors">Mentions légales</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-levigile-red transition-colors">Conditions générales de vente</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-levigile-red transition-colors">Politique de confidentialité</Link>
              </li>
              <li>
                <div className="mt-4 space-y-2">
                  <p className="text-sm">
                    SARL LeVigile - SIRET: 123 456 789 00012<br />
                    Autorisation CNAPS: AUT-031-2115-01-01-20220123456
                  </p>
                  <div className="flex items-center space-x-3 mt-2">
                    <a href="https://x.com/levigile31/" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-levigile-red transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/LevigileToulousain?locale=fr_FR" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-levigile-red transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-6 text-center text-sm">
          <p>&copy; {currentYear} LeVigile - Sécurité privée en Haute-Garonne. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
