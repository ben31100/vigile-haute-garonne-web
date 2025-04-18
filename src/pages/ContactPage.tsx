import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Clock, MapPin, Phone, Mail, Shield, Building2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InterventionMap from '@/components/InterventionMap';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact | LeVigile - Sécurité privée en Haute-Garonne</title>
        <meta 
          name="description" 
          content="Contactez LeVigile pour vos besoins en sécurité privée à Toulouse et en Haute-Garonne. Disponible 7j/7, 24h/24." 
        />
      </Helmet>

      <Header />

      <main className="pt-8 pb-16">
        {/* Hero Section */}
        <section className="bg-gray-100 py-16 mb-12 h-[500px] flex items-center">
          <div className="container mx-auto px-4 flex items-center">
            <div className="w-1/2">
              <h1 className="text-4xl font-bold text-levigile-dark mb-4">
                Contactez-nous
              </h1>
              <p className="text-gray-600 max-w-2xl mb-6">
                Notre équipe est à votre disposition pour répondre à toutes vos questions 
                et vous accompagner dans vos besoins en sécurité.
              </p>
            </div>
            <div className="w-1/2">
              <img 
                src="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Contactez%20Levigile.png" 
                alt="Contact LeVigile" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-levigile-blue/10 p-4 rounded-full mb-4">
                <Phone className="h-8 w-8 text-levigile-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Téléphone</h3>
              <a 
                href="tel:+33554546428" 
                className="text-levigile-blue hover:text-levigile-dark transition-colors"
              >
                05 54 54 64 28
              </a>
              <p className="text-sm text-gray-500 mt-2">
                Urgence : 07 80 81 79 79
              </p>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-levigile-blue/10 p-4 rounded-full mb-4">
                <Mail className="h-8 w-8 text-levigile-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a 
                href="mailto:contact@levigile.fr" 
                className="text-levigile-blue hover:text-levigile-dark transition-colors"
              >
                contact@levigile.fr
              </a>
              <p className="text-sm text-gray-500 mt-2">
                Recrutement : levigile31@gmail.com
              </p>
            </div>

            {/* Address */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-levigile-blue/10 p-4 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-levigile-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Adresse</h3>
              <p>8 PLACE ROGER SALENGRO<br />31000 TOULOUSE</p>
            </div>

            {/* Hours */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-levigile-blue/10 p-4 rounded-full mb-4">
                <Clock className="h-8 w-8 text-levigile-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Horaires</h3>
              <p>08 Heures-19 Heures<br />Du Lundi au Vendredi</p>
            </div>

            {/* CNAPS */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-levigile-blue/10 p-4 rounded-full mb-4">
                <Shield className="h-8 w-8 text-levigile-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Autorisation CNAPS</h3>
              <p>AUT-031-2122-10-25-20230887253</p>
            </div>

            {/* SIRET */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-levigile-blue/10 p-4 rounded-full mb-4">
                <Building2 className="h-8 w-8 text-levigile-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">SIRET</h3>
              <p>953 485 851 00018</p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Zone d'intervention</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            <InterventionMap />
            <div className="mt-4 text-center">
              <a 
                href="https://maps.app.goo.gl/zsWsZZ4FFz76WuVUA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-levigile-blue hover:underline"
              >
                Voir la zone d'intervention complète
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;
