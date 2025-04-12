
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import citiesData from '../data/cities.json';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  // Featured cities to display in the footer
  const featuredCities = ["toulouse", "blagnac", "colomiers", "tournefeuille", "muret"];

  return (
    <footer id="contact" className="bg-levigile-blue text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-levigile-red" />
                <span>15 Rue de la Sécurité<br />31000 Toulouse</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 shrink-0 text-levigile-red" />
                <a href="tel:+33561123456" className="hover:underline">05 61 12 34 56</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 shrink-0 text-levigile-red" />
                <a href="mailto:contact@levigile.fr" className="hover:underline">contact@levigile.fr</a>
              </li>
            </ul>
          </div>

          {/* Zone d'intervention */}
          <div>
            <h3 className="text-xl font-bold mb-4">Zone d'intervention</h3>
            <p className="mb-3">
              Nos agents interviennent sur l'ensemble du département de la Haute-Garonne (31):
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {citiesData
                .filter(city => featuredCities.includes(city.id))
                .map((city) => (
                  <Link 
                    key={city.id}
                    to={`/securite-ville-${city.id}`}
                    className="bg-white/10 px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-colors"
                    aria-label={`Services de sécurité à ${city.name}`}
                  >
                    {city.name}
                  </Link>
                ))}
              <Link 
                to="/villes"
                className="bg-levigile-red px-3 py-1 rounded-full text-sm hover:bg-red-600 transition-colors"
                aria-label="Voir toutes nos villes d'intervention"
              >
                Voir toutes
              </Link>
            </div>
          </div>

          {/* Liens légaux */}
          <div>
            <h3 className="text-xl font-bold mb-4">Informations légales</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:underline">Mentions légales</Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">Conditions générales de vente</Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">Politique de confidentialité</Link>
              </li>
              <li>
                <p className="mt-4 text-sm">
                  SARL LeVigile - SIRET: 123 456 789 00012<br />
                  Autorisation CNAPS: AUT-031-2115-01-01-20220123456
                </p>
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
