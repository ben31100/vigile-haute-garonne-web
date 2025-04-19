
import React, { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import DashboardLayout from '@/components/admin/DashboardLayout';
import { AddAgentDialog } from '@/components/admin/AddAgentDialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Edit, Phone, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { EditAgentDialog } from '@/components/admin/EditAgentDialog';

const AgentsPage = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [agentToEdit, setAgentToEdit] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const { data: agents, isLoading } = useQuery({
    queryKey: ['agents'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('agents')
        .select('*')
        .order('nom');
      
      if (error) throw error;
      return data;
    },
  });

  const handleDelete = async (agentId) => {
    try {
      const { error } = await supabase
        .from('agents')
        .delete()
        .eq('id', agentId);

      if (error) throw error;

      toast({
        title: "Agent supprimé",
        description: "L'agent a été supprimé avec succès",
      });
      
      // Refresh the agents list
      queryClient.invalidateQueries({ queryKey: ['agents'] });
    } catch (error) {
      console.error('Error deleting agent:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la suppression de l'agent",
        variant: "destructive",
      });
    }
  };

  const handleEdit = (agent) => {
    setAgentToEdit(agent);
    setIsEditDialogOpen(true);
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Gestion des Agents</h1>
          <AddAgentDialog />
        </div>

        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom</TableHead>
                <TableHead>Prénom</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Téléphone</TableHead>
                <TableHead>Site affecté</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {!isLoading && agents?.map((agent) => (
                <TableRow key={agent.id}>
                  <TableCell>{agent.nom || '-'}</TableCell>
                  <TableCell>{agent.prénom || '-'}</TableCell>
                  <TableCell>{agent.email}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-muted-foreground" />
                      {agent.téléphone || '-'}
                    </div>
                  </TableCell>
                  <TableCell>{agent.site_affecté || '-'}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => handleEdit(agent)}
                      >
                        <Edit size={16} />
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="outline" size="icon" className="text-red-500 hover:text-red-600">
                            <Trash2 size={16} />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Êtes-vous sûr?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Cette action va supprimer définitivement l'agent {agent.prénom} {agent.nom}. 
                              Cette action ne peut pas être annulée.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Annuler</AlertDialogCancel>
                            <AlertDialogAction 
                              onClick={() => handleDelete(agent.id)}
                              className="bg-red-500 hover:bg-red-600"
                            >
                              Supprimer
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      
      {agentToEdit && (
        <EditAgentDialog 
          agent={agentToEdit} 
          open={isEditDialogOpen} 
          onOpenChange={setIsEditDialogOpen}
        />
      )}
    </DashboardLayout>
  );
};

export default AgentsPage;
