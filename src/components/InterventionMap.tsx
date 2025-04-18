
import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import citiesData from '@/data/cities.json';

const InterventionMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Extraire les coordonnées de toutes les villes
    const zones = citiesData.map(city => ({
      name: city.name,
      lat: parseFloat(city.postalCode) >= 30000 && parseFloat(city.postalCode) < 40000 ? 43.6047 : // Toulouse par défaut pour le 31
        parseFloat(city.postalCode) >= 40000 && parseFloat(city.postalCode) < 50000 ? 43.7102 : // Lot
        parseFloat(city.postalCode) >= 50000 && parseFloat(city.postalCode) < 60000 ? 44.5133 : // Lozère
        parseFloat(city.postalCode) >= 60000 && parseFloat(city.postalCode) < 70000 ? 43.2327 : // Hautes-Pyrénées
        parseFloat(city.postalCode) >= 70000 && parseFloat(city.postalCode) < 80000 ? 42.6986 : // Pyrénées-Orientales
        parseFloat(city.postalCode) >= 80000 && parseFloat(city.postalCode) < 90000 ? 43.9283 : // Tarn
        parseFloat(city.postalCode) >= 90000 ? 44.0221 : // Tarn-et-Garonne
        43.6047, // Par défaut (Toulouse)
      lng: parseFloat(city.postalCode) >= 30000 && parseFloat(city.postalCode) < 40000 ? 1.4442 : // Toulouse par défaut pour le 31
        parseFloat(city.postalCode) >= 40000 && parseFloat(city.postalCode) < 50000 ? 1.7219 : // Lot
        parseFloat(city.postalCode) >= 50000 && parseFloat(city.postalCode) < 60000 ? 3.5024 : // Lozère
        parseFloat(city.postalCode) >= 60000 && parseFloat(city.postalCode) < 70000 ? 0.0745 : // Hautes-Pyrénées
        parseFloat(city.postalCode) >= 70000 && parseFloat(city.postalCode) < 80000 ? 2.8954 : // Pyrénées-Orientales
        parseFloat(city.postalCode) >= 80000 && parseFloat(city.postalCode) < 90000 ? 2.1484 : // Tarn
        parseFloat(city.postalCode) >= 90000 ? 1.3523 : // Tarn-et-Garonne
        1.4442, // Par défaut (Toulouse)
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
