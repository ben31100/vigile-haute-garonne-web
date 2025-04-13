
import React from 'react';
import { Shield, Users, Award, CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-levigile-blue">À propos de LeVigile</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Depuis notre création, LeVigile s'est imposé comme un acteur majeur de la sécurité privée en Haute-Garonne, 
            offrant des services professionnels adaptés aux besoins de nos clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-levigile-blue">Notre mission</h3>
            <p className="text-gray-700">
              Chez LeVigile, notre mission est d'assurer la protection des biens et des personnes avec professionnalisme 
              et efficacité. Nous mettons à votre disposition des agents de sécurité qualifiés, formés aux dernières 
              techniques et équipés des technologies les plus avancées.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-start">
                <div className="bg-levigile-lightgray p-2 rounded-full mr-4">
                  <Shield className="h-5 w-5 text-levigile-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-levigile-blue">Protection optimale</h4>
                  <p className="text-gray-600 text-sm">Sécurité complète pour vos locaux, événements et personnel.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-levigile-lightgray p-2 rounded-full mr-4">
                  <Users className="h-5 w-5 text-levigile-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-levigile-blue">Équipe expérimentée</h4>
                  <p className="text-gray-600 text-sm">Agents certifiés avec une solide expérience dans le domaine de la sécurité.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-levigile-lightgray p-2 rounded-full mr-4">
                  <Award className="h-5 w-5 text-levigile-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-levigile-blue">Certification CNAPS</h4>
                  <p className="text-gray-600 text-sm">Entreprise agréée par le Conseil National des Activités Privées de Sécurité.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-levigile-lightgray p-2 rounded-full mr-4">
                  <CheckCircle className="h-5 w-5 text-levigile-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-levigile-blue">Service personnalisé</h4>
                  <p className="text-gray-600 text-sm">Solutions adaptées à vos besoins spécifiques et à votre budget.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src="/images/about-security-team.jpg" 
                alt="Équipe de sécurité LeVigile" 
                className="object-cover w-full h-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
                }}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white font-semibold">Notre équipe d'agents qualifiés</p>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-levigile-lightgray rounded-lg shadow-inner">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-levigile-blue">Pourquoi choisir LeVigile ?</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                value: "+10",
                label: "ans d'expérience",
                description: "Une décennie d'expertise dans le domaine de la sécurité privée."
              },
              {
                value: "+50",
                label: "agents qualifiés",
                description: "Une équipe professionnelle disponible 24h/24 et 7j/7."
              },
              {
                value: "+200",
                label: "clients satisfaits",
                description: "Entreprises, commerces et particuliers nous font confiance."
              },
              {
                value: "+30",
                label: "communes couvertes",
                description: "Une présence étendue dans toute la Haute-Garonne."
              }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="text-3xl font-bold text-levigile-red mb-2">{stat.value}</p>
                <p className="text-levigile-blue font-semibold mb-3">{stat.label}</p>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
