
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
      console.log("Attempting login with:", data.email);

      const { data: authData, error: signInError } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (signInError) {
        console.error("Authentication error:", signInError);
        throw signInError;
      }

      if (!authData.user) {
        throw new Error("No user data returned");
      }

      // Check if user exists in administrators table
      const { data: admin, error: adminError } = await supabase
        .from('administrators')
        .select('*')
        .eq('id', authData.user.id)
        .maybeSingle();

      if (adminError) {
        console.error("Error fetching admin profile:", adminError);
        throw adminError;
      }

      if (!admin) {
        await supabase.auth.signOut();
        throw new Error("No administrator profile found for this user");
      }

      toast({
        title: "Login successful",
        description: `Welcome ${admin.prénom || 'Administrator'}`,
      });

      navigate('/admin/dashboard');
    } catch (error: any) {
      console.error("Complete error:", error);
      
      if (error.message === "Invalid login credentials") {
        setAuthError("Invalid email or password");
      } else if (error.message === "No administrator profile found for this user") {
        setAuthError("This user is not registered as an administrator");
      } else {
        setAuthError(error.message || "An error occurred during login");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Space</h1>
        <p className="text-gray-600">Log in to your admin dashboard</p>
      </div>

      {authError && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Login Error</AlertTitle>
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
            <p className="text-red-500 text-sm mt-1">This field is required</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            {...register('password', { required: true })}
            className={errors.password ? 'border-red-500' : ''}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">This field is required</p>
          )}
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Log in"}
        </Button>
      </form>
    </AuthLayout>
  );
};

export default AdminLogin;
