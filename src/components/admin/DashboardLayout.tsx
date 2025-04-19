
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { 
  Users, 
  Calendar, 
  MapPin, 
  MessageSquare, 
  FileText, 
  LogOut, 
  Menu, 
  Home, 
  Settings
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/espace');
  };

  const navItems = [
    { title: 'Tableau de bord', path: '/admin/dashboard', icon: <Home size={20} /> },
    { title: 'Agents', path: '/admin/agents', icon: <Users size={20} /> },
    { title: 'Clients', path: '/admin/clients', icon: <Users size={20} /> },
    { title: 'Sites', path: '/admin/sites', icon: <MapPin size={20} /> },
    { title: 'Planning', path: '/admin/planning', icon: <Calendar size={20} /> },
    { title: 'Messages', path: '/admin/messages', icon: <MessageSquare size={20} /> },
    { title: 'Rapports', path: '/admin/reports', icon: <FileText size={20} /> },
    { title: 'Paramètres', path: '/admin/settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div 
        className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white shadow-md transition-all duration-300 fixed h-full overflow-y-auto`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h1 className={`text-xl font-bold ${!sidebarOpen && 'hidden'}`}>LeVigile Admin</h1>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu size={20} />
          </Button>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.path}
                  className="flex items-center p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="mr-3">{item.icon}</span>
                  {sidebarOpen && <span>{item.title}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t mt-auto">
          <Button 
            variant="ghost" 
            className="w-full justify-start" 
            onClick={handleLogout}
          >
            <LogOut size={20} className="mr-2" />
            {sidebarOpen && <span>Déconnexion</span>}
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}>
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-end h-16 items-center">
              <Button variant="ghost" onClick={handleLogout}>
                Déconnexion
              </Button>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
