import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Briefcase, MapPin, Calendar, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CAREER_HERO_IMAGE = "https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Carrierre%20chez%20levigile.webp";

const JobOffers = () => {
  const handleApply = (jobTitle: string) => {
    window.location.href = `mailto:levigile31@gmail.com?subject=Candidature : ${jobTitle}`;
  };

  return (
    <>
      <Helmet>
        <title>Nos offres d'emploi | LeVigile - Sécurité privée</title>
        <meta 
          name="description" 
          content="Consultez nos offres d'emploi dans le secteur de la sécurité privée. Rejoignez LeVigile et développez votre carrière en Haute-Garonne." 
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section 
          className="relative bg-gradient-to-r from-levigile-blue to-levigile-gray text-white"
          style={{ backgroundImage: `url(${CAREER_HERO_IMAGE})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="container mx-auto px-4 grid md:grid-cols-2 items-center py-32 gap-8">
            <div className="space-y-6 z-10 bg-black bg-opacity-40 p-6 rounded-lg">
              <h1 className="text-3xl md:text-4xl font-bold">
                Nos offres d'emploi
              </h1>
              <p className="text-lg opacity-90">
                Découvrez nos opportunités d'emploi actuelles et rejoignez une entreprise 
                en pleine croissance. Développez votre carrière dans la sécurité privée.
              </p>
            </div>
            <div className="relative hidden md:block">
              {/* Removed the original img element to avoid overlay conflicts */}
            </div>
          </div>
        </section>

        {/* Existing Job Listings Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="space-y-6">
            {/* Offre 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-levigile-dark">
                    Agent de sécurité H/F
                  </h3>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>Toulouse</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>CDI</span>
                    </div>
                  </div>
                </div>
                <Button 
                  onClick={() => handleApply("Agent de sécurité")}
                  className="bg-levigile-blue hover:bg-levigile-dark"
                >
                  Postuler
                </Button>
              </div>
              <p className="text-gray-600 mb-4">
                Nous recherchons des agents de sécurité qualifiés pour assurer la protection 
                des biens et des personnes sur différents sites de la région toulousaine.
              </p>
              <div className="space-y-2">
                <p className="font-medium">Profil recherché :</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Carte professionnelle à jour</li>
                  <li>Expérience en sécurité privée souhaitée</li>
                  <li>Rigueur et professionnalisme</li>
                  <li>Excellent relationnel</li>
                </ul>
              </div>
            </div>

            {/* Offre 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-levigile-dark">
                    Agent cynophile H/F
                  </h3>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>Haute-Garonne</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>CDI</span>
                    </div>
                  </div>
                </div>
                <Button 
                  onClick={() => handleApply("Agent cynophile")}
                  className="bg-levigile-blue hover:bg-levigile-dark"
                >
                  Postuler
                </Button>
              </div>
              <p className="text-gray-600 mb-4">
                Nous recherchons des agents cynophiles expérimentés pour des missions de 
                surveillance avec chien sur des sites sensibles.
              </p>
              <div className="space-y-2">
                <p className="font-medium">Profil recherché :</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Carte professionnelle avec mention cyno</li>
                  <li>Chien opérationnel et à jour des obligations</li>
                  <li>Expérience en cynophilie exigée</li>
                  <li>Disponibilité horaire</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section Contact */}
        <section className="container mx-auto px-4">
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Vous ne trouvez pas le poste qui vous correspond ?
            </h2>
            <p className="text-gray-600 mb-6">
              Envoyez-nous une candidature spontanée, nous étudions tous les profils.
            </p>
            <Button
              onClick={() => handleApply("Candidature spontanée")}
              variant="outline"
              className="inline-flex items-center"
            >
              <Mail className="mr-2 h-4 w-4" />
              Envoyer une candidature spontanée
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default JobOffers;
