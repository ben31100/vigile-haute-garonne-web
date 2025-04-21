
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const AdminLoginPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Espace Administrateur | LeVigile</title>
      </Helmet>

      <Header />

      <main 
        className="flex-grow pt-24 flex items-center justify-center bg-cover bg-center py-12"
        style={{ 
          backgroundImage: "url('https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Levigile%20securite.webp')",
          backgroundSize: 'cover'
        }}
      >
        <div className="max-w-md w-full mx-4 p-8 bg-white/90 backdrop-blur rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6">Espace Administrateur</h1>
          <p className="text-center mb-6 text-gray-600">Espace en cours de développement</p>
          <form className="space-y-4">
            <div>
              <Input type="email" placeholder="Email" className="w-full" />
            </div>
            <div>
              <Input type="password" placeholder="Mot de passe" className="w-full" />
            </div>
            <Button className="w-full">Se connecter</Button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminLoginPage;

