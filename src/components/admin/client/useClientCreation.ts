
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useQueryClient } from '@tanstack/react-query';
import type { ClientFormData } from './clientFormSchema';

export const useClientCreation = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const createClient = async (data: ClientFormData) => {
    try {
      // Check if an existing client has this email
      const { data: existingClients, error: checkError } = await supabase
        .from('clients')
        .select('id, email')
        .eq('email', data.email)
        .maybeSingle();
      
      if (checkError) throw checkError;
      
      if (existingClients) {
        toast({
          title: "Client déjà existant",
          description: "Un client avec cet email existe déjà dans la base de données.",
          variant: "destructive",
        });
        return false;
      }
      
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });

      if (authError) {
        if (authError.status === 422 && authError.message.includes('User already registered')) {
          console.log("Auth user already exists, creating client record only");
          
          const { error: clientError } = await supabase
            .from('clients')
            .insert({
              email: data.email,
              nom_entreprise: data.nom_entreprise,
              contact: data.contact,
              telephone: data.telephone,
              password_hash: data.password
            });
            
          if (clientError) throw clientError;
          
          toast({
            title: "Client ajouté",
            description: "Le client a été ajouté avec succès (utilisateur existant)",
          });
          
          queryClient.invalidateQueries({ queryKey: ['clients'] });
          return true;
        } else {
          toast({
            title: "Erreur d'authentification",
            description: authError.message || "Une erreur est survenue lors de la création du compte",
            variant: "destructive",
          });
          return false;
        }
      }
      
      if (!authData.user) throw new Error("Erreur lors de la création du compte");

      const { error: clientError } = await supabase
        .from('clients')
        .insert({
          email: data.email,
          nom_entreprise: data.nom_entreprise,
          contact: data.contact,
          telephone: data.telephone,
          password_hash: data.password
        });

      if (clientError) {
        await supabase.auth.admin.deleteUser(authData.user.id);
        throw clientError;
      }

      toast({
        title: "Client ajouté",
        description: "Le client a été ajouté avec succès",
      });
      
      queryClient.invalidateQueries({ queryKey: ['clients'] });
      return true;
    } catch (error) {
      console.error('Error adding client:', error);
      toast({
        title: "Erreur",
        description: error.message || "Une erreur est survenue lors de l'ajout du client",
        variant: "destructive",
      });
      return false;
    }
  };

  return { createClient };
};
