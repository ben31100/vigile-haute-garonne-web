
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import AuthLayout from '@/components/auth/AuthLayout';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminSetup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [setupComplete, setSetupComplete] = useState(false);
  const [setupStatus, setSetupStatus] = useState<{
    step: string;
    success: boolean;
    message: string;
  } | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const setupAdmin = async () => {
    try {
      setIsLoading(true);
      setSetupStatus({
        step: "Initialisation",
        success: true,
        message: "Démarrage de la création de l'administrateur..."
      });
      
      // Vérifier si l'utilisateur existe déjà
      const { data: { user: existingUser }, error: signInError } = await supabase.auth.signInWithPassword({
        email: 'levigile31@gmail.com',
        password: 'Ben221176-'
      });

      if (existingUser) {
        // L'utilisateur existe déjà
        setSetupStatus({
          step: "Vérification du compte",
          success: true,
          message: "L'utilisateur existe déjà, vérification du profil..."
        });
        
        // Vérifier si le profil existe déjà
        const { data: existingProfile, error: profileCheckError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', existingUser.id)
          .maybeSingle();
        
        if (profileCheckError) {
          console.error("Erreur lors de la vérification du profil:", profileCheckError);
        }
        
        if (existingProfile) {
          setSetupStatus({
            step: "Mise à jour du profil",
            success: true,
            message: "Mise à jour du profil administrateur..."
          });
          
          // Mettre à jour le profil pour s'assurer qu'il a le rôle d'admin
          const { error: updateError } = await supabase
            .from('profiles')
            .update({ role: 'admin' })
            .eq('id', existingUser.id);
            
          if (updateError) {
            console.error("Erreur lors de la mise à jour du profil:", updateError);
            throw updateError;
          }
          
          setSetupStatus({
            step: "Terminé",
            success: true,
            message: "Profil administrateur mis à jour avec succès"
          });
          
          toast({
            title: "Profil administrateur mis à jour",
            description: "Le profil administrateur a été mis à jour avec succès.",
          });
          
          setSetupComplete(true);
          return;
        } else {
          // Le profil n'existe pas mais l'utilisateur oui, créer le profil
          setSetupStatus({
            step: "Création du profil",
            success: true,
            message: "Création du profil administrateur..."
          });
          
          const { error: createProfileError } = await supabase
            .from('profiles')
            .insert({
              id: existingUser.id,
              role: 'admin',
              first_name: 'Admin',
              last_name: 'LeVigile',
              email: existingUser.email
            });

          if (createProfileError) {
            console.error("Erreur lors de la création du profil:", createProfileError);
            throw createProfileError;
          }

          setSetupStatus({
            step: "Terminé",
            success: true,
            message: "Profil administrateur créé avec succès"
          });
          
          toast({
            title: "Profil administrateur créé",
            description: "Le profil administrateur a été configuré avec succès.",
          });
          
          setSetupComplete(true);
          return;
        }
      } else if (signInError) {
        // L'utilisateur n'existe pas, le créer
        setSetupStatus({
          step: "Création du compte",
          success: true,
          message: "Création d'un nouvel utilisateur administrateur..."
        });
        
        // Créer l'utilisateur
        const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
          email: 'levigile31@gmail.com',
          password: 'Ben221176-',
          options: {
            emailRedirectTo: window.location.origin + '/admin/login'
          }
        });

        if (signUpError) {
          console.error("Erreur lors de la création de l'utilisateur:", signUpError);
          throw signUpError;
        }

        if (!signUpData.user) {
          throw new Error("Impossible de créer l'utilisateur");
        }

        // Attendre que l'utilisateur soit créé avant de créer le profil
        setSetupStatus({
          step: "Attente",
          success: true,
          message: "Attente de la création de l'utilisateur..."
        });
        
        // Attendre quelques secondes pour s'assurer que l'utilisateur est bien créé
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setSetupStatus({
          step: "Confirmation",
          success: true,
          message: "Compte utilisateur créé, finalisation..."
        });
        
        // Finaliser avec un message de succès
        toast({
          title: "Compte administrateur créé",
          description: "Le compte administrateur a été créé avec succès. Vérifiez votre email pour confirmer votre compte.",
        });
        
        setSetupStatus({
          step: "Terminé",
          success: true,
          message: "Administrateur créé avec succès. Vérifiez votre email pour confirmer votre compte."
        });
        
        setSetupComplete(true);
      }
    } catch (error: any) {
      console.error("Erreur complète:", error);
      setSetupStatus({
        step: "Erreur",
        success: false,
        message: error.message || "Impossible de créer l'administrateur."
      });
      
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
        
        {setupStatus && (
          <Alert className={`mt-4 ${setupStatus.success ? 'border-blue-500 bg-blue-50' : 'border-red-500 bg-red-50'}`}>
            {setupStatus.success ? (
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
            ) : (
              <AlertCircle className="h-4 w-4 text-red-600" />
            )}
            <AlertTitle className={setupStatus.success ? 'text-blue-600' : 'text-red-600'}>
              {setupStatus.step}
            </AlertTitle>
            <AlertDescription>
              {setupStatus.message}
            </AlertDescription>
          </Alert>
        )}
        
        {setupComplete && (
          <Alert className="mt-4 border-green-500 bg-green-50">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-600">Configuration terminée</AlertTitle>
            <AlertDescription>
              Le compte administrateur a été configuré avec succès. Vous pouvez maintenant vous connecter à la page d'administration.
            </AlertDescription>
            <Button 
              className="mt-2 w-full bg-green-600 hover:bg-green-700"
              onClick={() => navigate('/admin/login')}
            >
              Aller à la page de connexion
            </Button>
          </Alert>
        )}
        
        {!setupComplete && (
          <Button 
            onClick={setupAdmin} 
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? "Configuration en cours..." : "Configurer l'administrateur"}
          </Button>
        )}
      </div>
    </AuthLayout>
  );
};

export default AdminSetup;
