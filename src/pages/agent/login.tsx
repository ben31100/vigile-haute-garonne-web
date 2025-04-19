
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import AuthLayout from '@/components/auth/AuthLayout';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { Label } from '@/components/ui/label';

interface LoginForm {
  email: string;
  password: string;
}

const AgentLogin = () => {
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

      console.log("Authentification réussie, vérification du profil agent...");

      const { data: agent, error: agentError } = await supabase
        .from('agents')
        .select('*')
        .eq('id', authData.user.id)
        .maybeSingle();

      if (agentError) {
        console.error("Erreur de récupération du profil agent:", agentError.message);
        throw agentError;
      }

      console.log("Profil agent récupéré:", agent);

      if (!agent) {
        await supabase.auth.signOut();
        throw new Error("Aucun profil agent trouvé pour cet utilisateur");
      }

      toast({
        title: "Connexion réussie",
        description: `Bienvenue ${agent.prénom || 'Agent'}`,
      });

      navigate('/agent/dashboard');
      
    } catch (error: any) {
      console.error("Erreur complète:", error);
      
      if (error.message === "Invalid login credentials") {
        setAuthError("Email ou mot de passe incorrect");
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
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Espace agent</h1>
        <p className="text-gray-600">Connectez-vous à votre espace agent</p>
      </div>

      {authError && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Erreur de connexion</AlertTitle>
          <AlertDescription>{authError}</AlertDescription>
        </Alert>
      )}

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

export default AgentLogin;
