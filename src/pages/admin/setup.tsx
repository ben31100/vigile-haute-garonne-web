
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
      console.log("Démarrage de la création de l'administrateur...");
      
      // Vérifier si l'utilisateur existe déjà
      const { data: existingUser, error: checkError } = await supabase.auth.signInWithPassword({
        email: 'levigile31@gmail.com',
        password: 'Ben221176-'
      });

      if (!checkError && existingUser?.user) {
        console.log("L'utilisateur existe déjà, vérification du profil...");
        
        // Vérifier si le profil existe déjà
        const { data: existingProfile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', existingUser.user.id)
          .maybeSingle();
        
        if (existingProfile) {
          console.log("Le profil existe déjà:", existingProfile);
          toast({
            title: "Utilisateur existant",
            description: "L'administrateur existe déjà. Vous pouvez vous connecter.",
          });
          setIsLoading(false);
          return;
        }
        
        // Créer le profil admin si l'utilisateur existe mais pas le profil
        console.log("Création du profil administrateur...");
        const { error: profileError } = await supabase
          .from('profiles')
          .insert({
            id: existingUser.user.id,
            role: 'admin',
            first_name: 'Admin',
            last_name: 'LeVigile'
          });

        if (profileError) {
          console.error("Erreur lors de la création du profil:", profileError);
          throw profileError;
        }

        toast({
          title: "Profil administrateur créé",
          description: "Le profil administrateur a été configuré avec succès.",
        });
        setIsLoading(false);
        return;
      }
      
      // Créer l'utilisateur avec Supabase Auth s'il n'existe pas
      console.log("Création d'un nouvel utilisateur administrateur...");
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: 'levigile31@gmail.com',
        password: 'Ben221176-',
        options: {
          emailRedirectTo: window.location.origin + '/admin/login'
        }
      });

      if (authError) {
        console.error("Erreur lors de la création de l'utilisateur:", authError);
        throw authError;
      }

      if (authData.user) {
        console.log("Utilisateur créé avec succès, création du profil...");
        // Créer le profil admin
        const { error: profileError } = await supabase
          .from('profiles')
          .insert({
            id: authData.user.id,
            role: 'admin',
            first_name: 'Admin',
            last_name: 'LeVigile'
          });

        if (profileError) {
          console.error("Erreur lors de la création du profil:", profileError);
          throw profileError;
        }

        toast({
          title: "Administrateur créé",
          description: "Le compte administrateur a été configuré avec succès. Vérifiez votre email pour confirmer votre compte.",
        });
      }
    } catch (error: any) {
      console.error("Erreur complète:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: error.message || "Impossible de créer l'administrateur.",
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
