import React from 'react';
import { MapPin, Clock, Shield, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  cityName: string;
  postalCode: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ cityName, postalCode }) => {
  const handlePhoneCall = () => {
    window.location.href = 'tel:+33554546428';
  };

  return (
    <section className="bg-gradient-to-r from-levigile-blue to-levigile-gray pt-16 pb-16 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek0yNCAzMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAoMS43OSA0IDQgNCA0LTEuNzkgNC00ek0yNCA0NmMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAoMS43OSA0IDQgNCA0LTEuNzkgNC00ek00OCAzzMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAoMS43OSA0IDQgNCA0LTEuNzkgNC00ek00OCA0NmMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAoMS43OSA0IDQgNCA0LTEuNzkgNC00ek0xMiAxNGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAoMS43OSA0IDQgNCA0LTEuNzkgNC00eiI:PC9wYXRoPjwvZz48L2c+PC9zdmc+')] rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-white/10 text-sm mb-4">
            <MapPin className="h-4 w-4 mr-2 text-levigile-red" />
            <span>{postalCode} • {cityName}</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Agent de sécurité à <span className="text-white underline decoration-levigile-red decoration-4 underline-offset-4">{cityName}</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
            Protection professionnelle 24h/24 pour entreprises et particuliers
            dans toute la commune de {cityName} et ses environs. Interventions rapides et garanties.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              className="bg-levigile-red hover:bg-red-600 text-white flex gap-2 items-center py-6 px-6 text-lg"
              onClick={handlePhoneCall}
            >
              <PhoneCall className="h-5 w-5" />
              <span>Devis gratuit à {cityName}</span>
            </Button>
            <Link to="/#services">
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 py-6 px-6 text-lg">
                <Clock className="h-5 w-5 mr-2" />
                <span>Intervention rapide</span>
              </Button>
            </Link>
          </div>
          
          <div className="inline-flex items-center justify-center text-sm bg-white/10 p-3 rounded-lg">
            <Shield className="h-5 w-5 text-levigile-red mr-2" />
            <span>Autorisation CNAPS: AUT-031-2122-10-25-20230887253</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
