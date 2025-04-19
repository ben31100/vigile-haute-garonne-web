
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import AuthLayout from '@/components/auth/AuthLayout';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { Label } from '@/components/ui/label';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Define validation schema
const loginSchema = z.object({
  email: z.string().email('Email invalide'),
  password: z.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères')
});

type LoginForm = z.infer<typeof loginSchema>;

const AgentLogin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema)
  });
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const onSubmit = async (data: LoginForm) => {
    try {
      setIsLoading(true);
      setAuthError(null);
      console.log("Tentative de connexion avec:", data.email);

      // First, attempt supabase authentication
      const { data: authData, error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password
      });
      
      if (error) {
        console.error("Erreur d'authentification:", error.message);
        throw error;
      }

      console.log("Authentification réussie, vérification du profil agent...");

      // Verify if the authenticated user is an agent
      const { data: agent, error: agentError } = await supabase
        .from('agents')
        .select('*')
        .eq('email', data.email)
        .single();

      if (agentError || !agent) {
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
      } else if (error.message.includes("no agent profile")) {
        setAuthError("Seuls les agents peuvent se connecter");
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
            {...register('email')}
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Mot de passe</Label>
          <Input
            id="password"
            type="password"
            placeholder="Mot de passe"
            {...register('password')}
            className={errors.password ? 'border-red-500' : ''}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
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

