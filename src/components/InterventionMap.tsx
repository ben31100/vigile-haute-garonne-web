
import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const InterventionMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Zones d'intervention
    const zones = [
      { name: 'Toulouse', lat: 43.6047, lng: 1.4442 },
      { name: 'Montauban', lat: 43.9333, lng: 1.0833 },
      // Ajoutez d'autres villes de la Haute-Garonne ici
    ];

    const map = L.map(mapRef.current).setView([43.6047, 1.4442], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Ajouter des marqueurs pour chaque zone
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
