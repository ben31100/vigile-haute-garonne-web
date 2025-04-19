
import React from 'react';
import { UserPlus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ClientForm } from './ClientForm';
import { useClientCreation } from './useClientCreation';
import type { ClientFormData } from './clientFormSchema';

export function AddClientDialog() {
  const [open, setOpen] = React.useState(false);
  const { createClient } = useClientCreation();

  const handleSubmit = async (data: ClientFormData) => {
    const success = await createClient(data);
    if (success) {
      setOpen(false);
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
        <ClientForm 
          onSubmit={handleSubmit}
          onCancel={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
