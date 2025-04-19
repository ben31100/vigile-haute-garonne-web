
import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import citiesData from '@/data/cities.json';
import { getCityCoordinates } from '@/utils/cityCoordinates';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Fix for default icon issue - using a type assertion to avoid TypeScript error
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl,
  iconRetinaUrl,
  shadowUrl
});

const InterventionMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Extraire les coordonnées de toutes les villes
    const zones = citiesData.map(city => ({
      name: city.name,
      ...getCityCoordinates(city.postalCode)
    }));

    // Centrer la carte sur Toulouse
    const map = L.map(mapRef.current).setView([43.6047, 1.4442], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Ajouter des marqueurs et cercles pour chaque zone
    zones.forEach(zone => {
      const marker = L.marker([zone.lat, zone.lng]).addTo(map);
      marker.bindPopup(`Zone d'intervention : ${zone.name}`);

      // Ajouter un cercle autour de chaque zone
      L.circle([zone.lat, zone.lng], {
        color: 'green',
        fillColor: '#00ff00',
        fillOpacity: 0.2,
        radius: 15000 // 15 km
      }).addTo(map);
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[450px] rounded-lg shadow-lg" 
    />
  );
};

export default InterventionMap;
