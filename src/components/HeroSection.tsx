import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Phone } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-levigile-blue to-levigile-gray pt-24 pb-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 opacity-0 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              La sécurité privée <span className="text-levigile-red">professionnelle</span> en Haute-Garonne
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Protégez vos biens, vos événements et votre personnel avec des agents qualifiés et expérimentés. 
              Services disponibles 24h/24 et 7j/7 sur tout le département.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-levigile-red hover:bg-red-600 text-white flex gap-2 items-center">
                <Phone className="h-4 w-4" />
                <span>Demander un devis</span>
              </Button>
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 flex gap-2 items-center">
                <Shield className="h-4 w-4" />
                <span>Nos services</span>
              </Button>
            </div>
          </div>
          
          <div className="relative opacity-0 animate-fade-in animate-delay-200">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <Shield className="h-16 w-16 mx-auto text-levigile-red" />
                <h2 className="text-2xl font-bold mt-4">Sécurité garantie en Haute-Garonne</h2>
              </div>
              <ul className="space-y-3">
                {[
                  "Agents certifiés et expérimentés",
                  "Interventions rapides sur tout le 31",
                  "Équipements de dernière génération",
                  "Protection adaptée à vos besoins",
                  "Suivi en temps réel de nos rondes"
                ].map((point, index) => (
                  <li key={index} className="flex items-center">
                    <span className="bg-levigile-red rounded-full h-2 w-2 mr-3"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-levigile-red text-white p-4 rounded-lg shadow-lg text-center transform rotate-3">
              <p className="font-bold">Numéro d'autorisation CNAPS</p>
              <p className="text-sm">AUT-031-2122-10-25-20230887253</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
