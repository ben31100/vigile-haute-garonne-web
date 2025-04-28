
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const AgentLoginPage: React.FC = () => {
  // Initialisation correcte des états
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulation de tentative de connexion
    setTimeout(() => {
      console.log('Tentative de connexion agent avec:', { email });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Espace Agent | LeVigile</title>
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
          <h1 className="text-2xl font-bold text-center mb-6">Espace Agent</h1>
          <p className="text-center mb-6 text-gray-600">Espace en cours de développement</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Input 
                type="email" 
                placeholder="Email" 
                className="w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Input 
                type="password" 
                placeholder="Mot de passe" 
                className="w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full"
              disabled={loading}
            >
              {loading ? 'Connexion en cours...' : 'Se connecter'}
            </Button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AgentLoginPage;
