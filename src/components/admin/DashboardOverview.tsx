
import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, Building, Calendar, MessageSquare } from 'lucide-react';

const DashboardOverview = () => {
  const modules = [
    {
      title: "Gestion des utilisateurs",
      description: "Gérer les comptes agents et clients",
      icon: Users,
      href: "/admin/users"
    },
    {
      title: "Sites d'intervention",
      description: "Gérer les zones d'intervention",
      icon: Building,
      href: "/admin/sites"
    },
    {
      title: "Plannings",
      description: "Attribution et gestion des plannings",
      icon: Calendar,
      href: "/admin/schedules"
    },
    {
      title: "Messages",
      description: "Centre de messagerie interne",
      icon: MessageSquare,
      href: "/admin/messages"
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Tableau de bord</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <Card key={module.href} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center space-y-4">
                <Icon className="h-8 w-8 text-blue-600" />
                <h3 className="text-lg font-medium">{module.title}</h3>
                <p className="text-sm text-gray-600">{module.description}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardOverview;
