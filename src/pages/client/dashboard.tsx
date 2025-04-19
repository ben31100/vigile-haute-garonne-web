
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import ClientDashboard from '@/components/client/ClientDashboard';

const ClientDashboardPage = () => {
  const { data: session } = useQuery({
    queryKey: ['session'],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      return session;
    },
  });

  const { data: client } = useQuery({
    queryKey: ['client'],
    queryFn: async () => {
      if (!session?.user?.id) return null;
      
      const { data } = await supabase
        .from('clients')
        .select('*')
        .eq('id', session.user.id)
        .single();
      return data;
    },
    enabled: !!session,
  });

  if (!session) {
    return <Navigate to="/client/login" replace />;
  }

  if (!client) {
    return <Navigate to="/espace" replace />;
  }

  return <ClientDashboard />;
};

export default ClientDashboardPage;
