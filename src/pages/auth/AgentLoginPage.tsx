
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/OptimizedImage';

const AgentLoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt with:', { email });
    // Login functionality will be implemented later
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Espace Agent | LeVigile</title>
      </Helmet>

      <Header />

      <main 
        className="flex-grow pt-24 flex items-center justify-center bg-cover bg-center py-12"
      >
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="https://dwugopridureefyyiyss.supabase.co/storage/v1/object/public/images//Levigile%20securite.webp"
            alt="Background"
            className="w-full h-full object-cover"
            priority={false}
          />
        </div>
        <div className="max-w-md w-full mx-4 p-8 bg-white/90 backdrop-blur rounded-lg shadow-lg z-10 relative">
          <h1 className="text-2xl font-bold text-center mb-6">Espace Agent</h1>
          <p className="text-center mb-6 text-gray-600">Espace en cours de développement</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Input 
                type="email" 
                placeholder="Email" 
                className="w-full"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <Input 
                type="password" 
                placeholder="Mot de passe" 
                className="w-full"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <Button type="submit" className="w-full">Se connecter</Button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AgentLoginPage;
