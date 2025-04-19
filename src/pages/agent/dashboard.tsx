
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

  const { data: agent } = useQuery({
    queryKey: ['agent'],
    queryFn: async () => {
      if (!session?.user?.id) return null;
      
      const { data } = await supabase
        .from('agents')
        .select('*')
        .eq('id', session.user.id)
        .single();
      return data;
    },
    enabled: !!session,
  });

  if (!session) {
    return <Navigate to="/agent/login" replace />;
  }

  if (!agent) {
    return <Navigate to="/espace" replace />;
  }

  return <AgentDashboard />;
};

export default AgentDashboardPage;
