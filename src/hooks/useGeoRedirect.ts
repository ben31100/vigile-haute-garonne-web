
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import cities from '../data/cities.json';

interface IpInfoResponse {
  city?: string;
}

const normalizeCity = (city: string): string => {
  return city
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const useGeoRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkGeoRedirect = async () => {
      // Ne pas rediriger si l'utilisateur est déjà sur une page ville
      if (location.pathname !== '/') return;

      try {
        // Vérifier si la redirection a déjà été effectuée
        const hasRedirected = sessionStorage.getItem('geoRedirectDone');
        if (hasRedirected) return;

        const response = await fetch('https://ipinfo.io/json');
        const data: IpInfoResponse = await response.json();

        if (!data.city) return;

        // Normaliser le nom de la ville reçu
        const normalizedCity = normalizeCity(data.city);

        // Chercher la ville dans notre liste
        const matchedCity = cities.find(city => 
          normalizeCity(city.name) === normalizedCity
        );

        if (matchedCity) {
          // Marquer la redirection comme effectuée
          sessionStorage.setItem('geoRedirectDone', 'true');
          // Rediriger vers la page de la ville
          navigate(`/villes/${matchedCity.id}`, { replace: true });
        }
      } catch (error) {
        console.error('Erreur lors de la géolocalisation:', error);
      }
    };

    checkGeoRedirect();
  }, [navigate, location.pathname]);
};
