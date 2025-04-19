
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import AgentDashboard from '@/components/agent/AgentDashboard';

const AgentDashboardPage = () => {
  const { data: session } = useQuery({
    queryKey: ['session'],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      return session;
    },
  });

  const { data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .single();
      return data;
    },
    enabled: !!session,
  });

  if (!session) {
    return <Navigate to="/agent/login" replace />;
  }

  if (profile?.role !== 'agent') {
    return <Navigate to="/espace" replace />;
  }

  return <AgentDashboard />;
};

export default AgentDashboardPage;
