
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import AuthLayout from '@/components/auth/AuthLayout';

const AdminSetup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const setupAdmin = async () => {
    try {
      setIsLoading(true);
      
      // Créer l'utilisateur avec Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: 'levigile31@gmail.com',
        password: 'Ben221176-'
      });

      if (authError) throw authError;

      if (authData.user) {
        // Créer le profil admin
        const { error: profileError } = await supabase
          .from('profiles')
          .insert({
            id: authData.user.id,
            role: 'admin',
            first_name: 'Admin',
            last_name: 'LeVigile'
          });

        if (profileError) throw profileError;

        toast({
          title: "Administrateur créé",
          description: "Le compte administrateur a été configuré avec succès.",
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de créer l'administrateur. Il existe peut-être déjà ?",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">Configuration Administrateur</h1>
        <p className="text-gray-600">
          Cliquez sur le bouton ci-dessous pour créer le compte administrateur initial.
        </p>
        <Button 
          onClick={setupAdmin} 
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? "Création en cours..." : "Créer l'administrateur"}
        </Button>
      </div>
    </AuthLayout>
  );
};

export default AdminSetup;
