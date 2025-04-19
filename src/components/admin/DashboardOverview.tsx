
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, Calendar, MapPin, MessageSquare, FileText } from 'lucide-react';

const DashboardOverview = () => {
  const navigate = useNavigate();
  
  const dashboardItems = [
    {
      title: 'Agents',
      description: 'Gérer les agents de sécurité',
      icon: <Users className="h-6 w-6 text-blue-500" />,
      onClick: () => navigate('/admin/agents')
    },
    {
      title: 'Clients',
      description: 'Gérer les clients',
      icon: <Users className="h-6 w-6 text-purple-500" />,
      onClick: () => navigate('/admin/clients')
    },
    {
      title: 'Sites',
      description: 'Gérer les sites d\'intervention',
      icon: <MapPin className="h-6 w-6 text-green-500" />,
      onClick: () => navigate('/admin/sites')
    },
    {
      title: 'Planning',
      description: 'Gérer les plannings des agents',
      icon: <Calendar className="h-6 w-6 text-orange-500" />,
      onClick: () => navigate('/admin/planning')
    },
    {
      title: 'Messages',
      description: 'Gérer les communications',
      icon: <MessageSquare className="h-6 w-6 text-red-500" />,
      onClick: () => navigate('/admin/messages')
    },
    {
      title: 'Rapports',
      description: 'Consulter les statistiques',
      icon: <FileText className="h-6 w-6 text-indigo-500" />,
      onClick: () => navigate('/admin/reports')
    }
  ];
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Tableau de bord administrateur</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dashboardItems.map((item, index) => (
          <Card 
            key={index} 
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={item.onClick}
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
              {item.icon}
            </CardHeader>
            <CardContent>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Vue d'ensemble</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-600 font-medium">Agents actifs</p>
                <p className="text-2xl font-bold">0</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-600 font-medium">Sites surveillés</p>
                <p className="text-2xl font-bold">0</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-sm text-orange-600 font-medium">Missions en cours</p>
                <p className="text-2xl font-bold">0</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOverview;
