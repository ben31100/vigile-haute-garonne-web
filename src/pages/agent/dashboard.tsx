
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import AgentDashboard from '@/components/agent/AgentDashboard';

const AgentDashboardPage = () => {
  const { data: session, isLoading: isSessionLoading } = useQuery({
    queryKey: ['session'],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      return session;
    },
  });

  const { data: agent, isLoading: isAgentLoading } = useQuery({
    queryKey: ['agent', session?.user?.id],
    queryFn: async () => {
      if (!session?.user?.id) return null;
      
      const { data, error } = await supabase
        .from('agents')
        .select('*')
        .eq('id', session.user.id)
        .single();
        
      if (error) {
        console.error("Error fetching agent profile:", error);
        return null;
      }
      
      return data;
    },
    enabled: !!session?.user?.id,
  });

  const isLoading = isSessionLoading || isAgentLoading;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/agent/login" replace />;
  }

  if (!agent) {
    return <Navigate to="/espace" replace />;
  }

  return <AgentDashboard />;
};

export default AgentDashboardPage;
