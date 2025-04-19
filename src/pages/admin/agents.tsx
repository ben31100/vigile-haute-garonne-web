
import React from 'react';
import { useQuery } from '@tanstack/react-query';
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

const AgentsPage = () => {
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
                      <Button variant="outline" size="icon">
                        <Edit size={16} />
                      </Button>
                      <Button variant="outline" size="icon" className="text-red-500 hover:text-red-600">
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AgentsPage;
