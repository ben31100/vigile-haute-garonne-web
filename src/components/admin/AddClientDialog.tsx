
import React from 'react';
import { useForm } from 'react-hook-form';
import { supabase } from '@/integrations/supabase/client';
import { useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { UserPlus } from 'lucide-react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  nom_entreprise: z.string().min(1, 'Le nom de l\'entreprise est requis'),
  contact: z.string().min(1, 'Le nom du contact est requis'),
  telephone: z.string().min(10, 'Le numéro de téléphone est requis').max(15, 'Numéro de téléphone invalide'),
  email: z.string().email('Email invalide'),
  password: z.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
});

type FormData = z.infer<typeof formSchema>;

export function AddClientDialog() {
  const [open, setOpen] = React.useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom_entreprise: '',
      contact: '',
      telephone: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  });

  const onSubmit = async (data: FormData) => {
    try {
      // First, check if an existing client has this email in our database
      const { data: existingClients, error: checkError } = await supabase
        .from('clients')
        .select('id, email')
        .eq('email', data.email)
        .maybeSingle();
      
      if (checkError) throw checkError;
      
      // If client already exists in our database
      if (existingClients) {
        toast({
          title: "Client déjà existant",
          description: "Un client avec cet email existe déjà dans la base de données.",
          variant: "destructive",
        });
        return;
      }
      
      // Attempt to create a new auth user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });

      // Handle case where user already exists in auth system
      if (authError) {
        // If the error is "User already registered", proceed with creating just the client record
        if (authError.status === 422 && authError.message.includes('User already registered')) {
          console.log("Auth user already exists, creating client record only");
          
          // Create client record without needing auth user creation
          const { error: clientError } = await supabase
            .from('clients')
            .insert({
              email: data.email,
              nom_entreprise: data.nom_entreprise,
              contact: data.contact,
              téléphone: data.telephone,
              password_hash: data.password // Store password hash for reference
            });
            
          if (clientError) throw clientError;
          
          toast({
            title: "Client ajouté",
            description: "Le client a été ajouté avec succès (utilisateur existant)",
          });
          
          queryClient.invalidateQueries({ queryKey: ['clients'] });
          setOpen(false);
          form.reset();
          return;
        } else {
          // For other auth errors, display error and stop
          toast({
            title: "Erreur d'authentification",
            description: authError.message || "Une erreur est survenue lors de la création du compte",
            variant: "destructive",
          });
          return;
        }
      }
      
      if (!authData.user) throw new Error("Erreur lors de la création du compte");

      // Create client record with telephone
      const { error: clientError } = await supabase
        .from('clients')
        .insert({
          email: data.email,
          nom_entreprise: data.nom_entreprise,
          contact: data.contact,
          téléphone: data.telephone, 
          password_hash: data.password
        });

      if (clientError) {
        // If client creation fails, attempt to clean up the auth user
        await supabase.auth.admin.deleteUser(authData.user.id);
        throw clientError;
      }

      toast({
        title: "Client ajouté",
        description: "Le client a été ajouté avec succès",
      });
      
      queryClient.invalidateQueries({ queryKey: ['clients'] });
      setOpen(false);
      form.reset();
    } catch (error) {
      console.error('Error adding client:', error);
      toast({
        title: "Erreur",
        description: error.message || "Une erreur est survenue lors de l'ajout du client",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2">
          <UserPlus size={20} />
          <span>Ajouter un client</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ajouter un nouveau client</DialogTitle>
          <DialogDescription>
            Créez un nouveau client avec ses identifiants de connexion
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="nom_entreprise"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom de l'entreprise</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom du contact</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="telephone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Numéro de téléphone</FormLabel>
                  <FormControl>
                    <Input type="tel" {...field} placeholder="Entrez le numéro de téléphone" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mot de passe</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirmer le mot de passe</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end gap-2">
              <Button variant="outline" type="button" onClick={() => setOpen(false)}>
                Annuler
              </Button>
              <Button type="submit">Ajouter</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
