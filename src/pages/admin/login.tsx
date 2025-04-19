
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import AuthLayout from '@/components/auth/AuthLayout';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ExternalLink, AlertCircle, InfoIcon } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Form, FormField, FormItem, FormControl, FormMessage } from '@/components/ui/form';

interface LoginForm {
  email: string;
  password: string;
}

const AdminLogin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const onSubmit = async (data: LoginForm) => {
    try {
      setIsLoading(true);
      setAuthError(null);
      console.log("Tentative de connexion avec:", data.email);

      const { data: authData, error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password
      });
      
      if (error) {
        console.error("Erreur d'authentification:", error.message);
        throw error;
      }

      console.log("Authentification réussie, vérification du profil...");
      
      // Vérifier si l'utilisateur existe dans la table administrators
      const { data: admin, error: adminError } = await supabase
        .from('administrators')
        .select('*')
        .eq('id', authData.user.id)
        .single();

      if (adminError) {
        console.error("Erreur de récupération du profil administrateur:", adminError.message);
        throw new Error("Impossible de vérifier votre profil administrateur. Veuillez contacter l'assistance.");
      }

      console.log("Profil récupéré:", admin);

      if (!admin) {
        await supabase.auth.signOut();
        throw new Error("Aucun profil administrateur trouvé pour cet utilisateur.");
      }

      toast({
        title: "Connexion réussie",
        description: `Bienvenue ${admin.prénom || 'Administrateur'}`,
      });

      console.log("Redirection vers le dashboard...");
      navigate('/admin/dashboard');
      
    } catch (error: any) {
      console.error("Erreur complète:", error);
      
      // Messages d'erreur plus spécifiques et instructions
      if (error.message === "Invalid login credentials") {
        setAuthError("Email ou mot de passe incorrect. Vérifiez vos informations d'identification.");
      } else if (error.message.includes("foreign key constraint")) {
        setAuthError("Problème de configuration du compte administrateur. Veuillez contacter l'assistance technique.");
      } else {
        setAuthError(error.message || "Une erreur s'est produite lors de la connexion");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Espace administrateur</h1>
        <p className="text-gray-600">Connectez-vous à votre tableau de bord</p>
      </div>

      {authError && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Erreur de connexion</AlertTitle>
          <AlertDescription>{authError}</AlertDescription>
        </Alert>
      )}

      <Alert variant="default" className="mb-6 border-blue-200 bg-blue-50">
        <InfoIcon className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-700">Information</AlertTitle>
        <AlertDescription className="text-blue-600">
          L'administrateur doit être créé dans Supabase Auth et avoir un enregistrement correspondant dans la table administrators.
        </AlertDescription>
      </Alert>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            {...register('email', { required: true })}
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">Ce champ est requis</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Mot de passe</Label>
          <Input
            id="password"
            type="password"
            placeholder="Mot de passe"
            {...register('password', { required: true })}
            className={errors.password ? 'border-red-500' : ''}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">Ce champ est requis</p>
          )}
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Connexion en cours..." : "Se connecter"}
        </Button>
      </form>
    </AuthLayout>
  );
};

export default AdminLogin;
