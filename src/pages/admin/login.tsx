
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import AuthLayout from '@/components/auth/AuthLayout';

interface LoginForm {
  email: string;
  password: string;
}

const AdminLogin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: LoginForm) => {
    try {
      setIsLoading(true);
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
      
      // Vérifier si l'utilisateur a un profil admin
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', authData.user.id)
        .maybeSingle();

      if (profileError) {
        console.error("Erreur de récupération du profil:", profileError.message);
        throw profileError;
      }

      console.log("Profil récupéré:", profile);

      if (!profile || profile.role !== 'admin') {
        console.error("Rôle non autorisé:", profile?.role);
        await supabase.auth.signOut();
        throw new Error('Accès non autorisé');
      }

      console.log("Redirection vers le dashboard...");
      navigate('/admin/dashboard');
      
    } catch (error: any) {
      console.error("Erreur complète:", error);
      toast({
        variant: "destructive",
        title: "Erreur de connexion",
        description: error.message || "Email ou mot de passe incorrect",
      });
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

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input
            type="email"
            placeholder="Email"
            {...register('email', { required: true })}
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">Ce champ est requis</p>
          )}
        </div>

        <div>
          <Input
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
