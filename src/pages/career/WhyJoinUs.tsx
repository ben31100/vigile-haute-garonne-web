
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Trophy, Heart, Users, GraduationCap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CAREER_HERO_IMAGE = "https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Carrierre%20chez%20levigile.webp";

const WhyJoinUs = () => {
  return (
    <>
      <Helmet>
        <title>Pourquoi nous rejoindre ? | LeVigile - Sécurité privée</title>
        <meta 
          name="description" 
          content="Découvrez pourquoi rejoindre LeVigile. Une entreprise dynamique offrant des opportunités de carrière dans la sécurité privée en Haute-Garonne." 
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
                Pourquoi nous rejoindre ?
              </h1>
              <p className="text-lg opacity-90">
                Rejoignez une équipe passionnée et professionnelle. 
                Chez LeVigile, nous valorisons nos collaborateurs et leur offrons 
                un environnement de travail stimulant et épanouissant.
              </p>
            </div>
            <div className="relative hidden md:block">
              {/* Removed original image to prevent overlay issues */}
            </div>
          </div>
        </section>

        {/* Existing Avantages Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-levigile-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Trophy className="h-8 w-8 text-levigile-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Évolution professionnelle</h3>
              <p className="text-gray-600">
                Nous encourageons le développement professionnel à travers des formations 
                continues et des opportunités d'avancement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-levigile-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-levigile-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Bien-être au travail</h3>
              <p className="text-gray-600">
                Nous accordons une grande importance à l'équilibre vie professionnelle/vie 
                personnelle et au bien-être de nos équipes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-levigile-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-levigile-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Esprit d'équipe</h3>
              <p className="text-gray-600">
                Rejoignez une équipe soudée où l'entraide et la collaboration sont au cœur 
                de notre culture d'entreprise.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-levigile-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <GraduationCap className="h-8 w-8 text-levigile-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Formation continue</h3>
              <p className="text-gray-600">
                Bénéficiez de formations régulières pour développer vos compétences et 
                rester à la pointe du secteur.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default WhyJoinUs;

