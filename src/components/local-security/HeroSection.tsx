
import React from 'react';
import { MapPin, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  cityName: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ cityName }) => {
  return (
    <section className="bg-gradient-to-r from-levigile-blue to-levigile-gray py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Agent de sécurité à {cityName}
          </h1>
          <p className="text-lg mb-8 opacity-90">
            Protection professionnelle pour particuliers et entreprises
            dans toute la commune de {cityName} et ses environs. Services disponibles 24h/24.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button className="bg-levigile-red hover:bg-red-600 text-white flex gap-2 items-center">
              <MapPin className="h-4 w-4" />
              <span>Devis gratuit à {cityName}</span>
            </Button>
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <Clock className="h-4 w-4 mr-2" />
              <span>Intervention rapide</span>
            </Button>
          </div>
          <div className="flex items-center justify-center text-sm bg-white/10 p-3 rounded-lg">
            <Shield className="h-5 w-5 text-levigile-red mr-2" />
            <span>Autorisation CNAPS: AUT-031-2115-01-01-20220123456</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
