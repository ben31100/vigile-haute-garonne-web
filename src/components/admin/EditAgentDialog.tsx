
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { supabase } from '@/integrations/supabase/client';
import { useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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

type FormData = {
  nom: string;
  prénom: string;
  email: string;
  téléphone: string;
  site_affecté?: string;
};

type EditAgentDialogProps = {
  agent: any;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function EditAgentDialog({ agent, open, onOpenChange }: EditAgentDialogProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const form = useForm<FormData>({
    defaultValues: {
      nom: agent?.nom || '',
      prénom: agent?.prénom || '',
      email: agent?.email || '',
      téléphone: agent?.téléphone || '',
      site_affecté: agent?.site_affecté || '',
    },
  });

  // Update form values when agent data changes
  useEffect(() => {
    if (agent) {
      form.reset({
        nom: agent.nom || '',
        prénom: agent.prénom || '',
        email: agent.email || '',
        téléphone: agent.téléphone || '',
        site_affecté: agent.site_affecté || '',
      });
    }
  }, [agent, form]);

  const onSubmit = async (data: FormData) => {
    try {
      const { error } = await supabase
        .from('agents')
        .update(data)
        .eq('id', agent.id);

      if (error) throw error;

      toast({
        title: "Agent mis à jour",
        description: "Les informations de l'agent ont été mises à jour avec succès",
      });
      
      queryClient.invalidateQueries({ queryKey: ['agents'] });
      onOpenChange(false);
    } catch (error) {
      console.error('Error updating agent:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la mise à jour de l'agent",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Modifier un agent</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="nom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="prénom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prénom</FormLabel>
                  <FormControl>
                    <Input {...field} required />
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
                    <Input type="email" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="téléphone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Téléphone</FormLabel>
                  <FormControl>
                    <Input type="tel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="site_affecté"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Site affecté</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end gap-2">
              <Button variant="outline" type="button" onClick={() => onOpenChange(false)}>
                Annuler
              </Button>
              <Button type="submit">Enregistrer</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
