
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import DashboardLayout from '@/components/admin/DashboardLayout';
import DashboardOverview from '@/components/admin/DashboardOverview';

const AdminDashboard = () => {
  const { data: session } = useQuery({
    queryKey: ['session'],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      return session;
    },
  });

  const { data: admin } = useQuery({
    queryKey: ['admin'],
    queryFn: async () => {
      if (!session?.user?.id) return null;
      
      const { data } = await supabase
        .from('administrators')
        .select('*')
        .eq('id', session.user.id)
        .single();
      return data;
    },
    enabled: !!session,
  });

  if (!session) {
    return <Navigate to="/admin/login" replace />;
  }

  if (!admin) {
    return <Navigate to="/espace" replace />;
  }

  return (
    <DashboardLayout>
      <DashboardOverview />
    </DashboardLayout>
  );
};

export default AdminDashboard;
