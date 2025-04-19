
import React from 'react';
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

  const onSubmit = async (data: LoginForm) => {
    try {
      const { error } = await supabase.auth.signInWithPassword(data);
      
      if (error) throw error;

      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .single();

      if (profile?.role !== 'admin') {
        await supabase.auth.signOut();
        throw new Error('Accès non autorisé');
      }

      navigate('/admin/dashboard');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur de connexion",
        description: "Email ou mot de passe incorrect",
      });
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

        <Button type="submit" className="w-full">
          Se connecter
        </Button>
      </form>
    </AuthLayout>
  );
};

export default AdminLogin;
