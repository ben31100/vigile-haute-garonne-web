
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { supabase } from '@/integrations/supabase/client';
import DashboardLayout from '@/components/admin/DashboardLayout';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Calendar } from '@/components/ui/calendar';
import { Edit, Plus, Trash2 } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const PlanningPage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const { data: plannings, isLoading } = useQuery({
    queryKey: ['plannings', date],
    queryFn: async () => {
      if (!date) return null;
      
      const { data, error } = await supabase
        .from('plannings')
        .select(`
          *,
          agents(id, nom, prénom),
          clients(id, nom_entreprise)
        `)
        .eq('date', format(date, 'yyyy-MM-dd'));
      
      if (error) throw error;
      return data;
    },
    enabled: !!date,
  });

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Planning des Interventions</h1>
            <p className="text-muted-foreground mt-1">
              Gérez le planning des agents et des sites
            </p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus size={20} />
            <span>Nouvelle intervention</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Calendrier</CardTitle>
              <CardDescription>
                Sélectionnez une date pour voir les interventions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                locale={fr}
                className="pointer-events-auto"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                Interventions du {date && format(date, 'dd MMMM yyyy', { locale: fr })}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Horaires</TableHead>
                    <TableHead>Agent</TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Site</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {!isLoading && plannings?.map((planning) => (
                    <TableRow key={planning.id}>
                      <TableCell>
                        {planning.heure_début} - {planning.heure_fin}
                      </TableCell>
                      <TableCell>
                        {planning.agents?.prénom} {planning.agents?.nom}
                      </TableCell>
                      <TableCell>
                        {planning.clients?.nom_entreprise}
                      </TableCell>
                      <TableCell>{planning.site}</TableCell>
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
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PlanningPage;
