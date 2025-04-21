
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, UserCheck, Clock, Building2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CAREER_HERO_IMAGE = "https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Carrierre%20chez%20levigile.webp";

const OurJobs = () => {
  return (
    <>
      <Helmet>
        <title>Nos métiers | LeVigile - Sécurité privée</title>
        <meta 
          name="description" 
          content="Découvrez les différents métiers de la sécurité privée chez LeVigile. Agent de sécurité, agent cynophile, superviseur et plus encore." 
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section 
          className="relative bg-gradient-to-r from-levigile-blue to-levigile-gray text-white"
          style={{ backgroundImage: `url(${CAREER_HERO_IMAGE})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="container mx-auto px-4 grid md:grid-cols-2 items-center py-16 gap-8">
            <div className="space-y-6 z-10 bg-black bg-opacity-40 p-6 rounded-lg">
              <h1 className="text-3xl md:text-4xl font-bold">
                Nos métiers
              </h1>
              <p className="text-lg opacity-90">
                Découvrez les différentes opportunités de carrière au sein de LeVigile. 
                Nos métiers sont variés et offrent de réelles perspectives d'évolution.
              </p>
            </div>
            <div className="relative hidden md:block">
              {/* Removed the original img element to avoid overlay conflicts */}
            </div>
          </div>
        </section>

        {/* Existing Jobs Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-levigile-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-levigile-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Agent de sécurité</h3>
              <p className="text-gray-600 mb-4">
                Assurez la sécurité des biens et des personnes sur différents sites : entreprises, 
                commerces, événements...
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Surveillance et contrôle d'accès</li>
                <li>• Prévention des risques</li>
                <li>• Intervention sur alarme</li>
                <li>• Accueil et filtrage</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-levigile-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <UserCheck className="h-8 w-8 text-levigile-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Agent cynophile</h3>
              <p className="text-gray-600 mb-4">
                Travaillez en binôme avec votre chien pour des missions de surveillance 
                et de sécurisation renforcée.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Rondes de surveillance</li>
                <li>• Détection et dissuasion</li>
                <li>• Protection des sites sensibles</li>
                <li>• Intervention sur alarme</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-levigile-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-levigile-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Agent de sécurité incendie</h3>
              <p className="text-gray-600 mb-4">
                Veillez à la sécurité incendie des établissements et assurez la protection 
                des personnes.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Prévention des risques</li>
                <li>• Intervention d'urgence</li>
                <li>• Maintenance préventive</li>
                <li>• Formation des occupants</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-levigile-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Building2 className="h-8 w-8 text-levigile-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Superviseur</h3>
              <p className="text-gray-600 mb-4">
                Gérez une équipe d'agents et coordonnez les opérations sur le terrain.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Management d'équipe</li>
                <li>• Planification des missions</li>
                <li>• Contrôle qualité</li>
                <li>• Relation client</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default OurJobs;

