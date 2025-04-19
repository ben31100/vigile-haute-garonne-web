
import React from 'react';

const DashboardOverview = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Tableau de bord administrateur</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="font-semibold mb-2">Agents</h2>
          <p className="text-gray-600">Gérer les agents de sécurité</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="font-semibold mb-2">Clients</h2>
          <p className="text-gray-600">Gérer les clients</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="font-semibold mb-2">Sites</h2>
          <p className="text-gray-600">Gérer les sites</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
