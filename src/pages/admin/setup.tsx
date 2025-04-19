
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import AuthLayout from '@/components/auth/AuthLayout';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

const AdminSetup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [setupComplete, setSetupComplete] = useState(false);
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
          
          // Mettre à jour le profil pour s'assurer qu'il a le rôle d'admin
          const { error: updateError } = await supabase
            .from('profiles')
            .update({ role: 'admin' })
            .eq('id', existingUser.user.id);
            
          if (updateError) {
            console.error("Erreur lors de la mise à jour du profil:", updateError);
            throw updateError;
          }
          
          console.log("Profil administrateur mis à jour avec succès");
          toast({
            title: "Profil administrateur mis à jour",
            description: "Le profil administrateur a été mis à jour avec succès.",
          });
          setSetupComplete(true);
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

        console.log("Profil administrateur créé avec succès");
        toast({
          title: "Profil administrateur créé",
          description: "Le profil administrateur a été configuré avec succès.",
        });
        setSetupComplete(true);
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

        console.log("Administrateur créé avec succès");
        toast({
          title: "Administrateur créé",
          description: "Le compte administrateur a été configuré avec succès. Vérifiez votre email pour confirmer votre compte.",
        });
        setSetupComplete(true);
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
          Cliquez sur le bouton ci-dessous pour créer ou mettre à jour le compte administrateur.
        </p>
        
        {setupComplete && (
          <Alert className="mt-4 border-green-500 bg-green-50">
            <AlertCircle className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-600">Configuration terminée</AlertTitle>
            <AlertDescription>
              Le compte administrateur a été configuré avec succès. Vous pouvez maintenant vous connecter à la page d'administration.
            </AlertDescription>
          </Alert>
        )}
        
        <Button 
          onClick={setupAdmin} 
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? "Configuration en cours..." : "Configurer l'administrateur"}
        </Button>
      </div>
    </AuthLayout>
  );
};

export default AdminSetup;
