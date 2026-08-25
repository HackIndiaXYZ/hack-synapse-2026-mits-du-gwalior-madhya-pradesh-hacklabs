import React from 'react';
import Sidebar from './frontend/shared-components/Sidebar';
import CitizenDashboard from './frontend/pages/CitizenDashboard';
import AuthorityDashboard from './frontend/pages/AuthorityDashboard';

export default function App() {
  // Change this to 'authority' whenever you want to view the Authority dashboard!
  const userRole = 'citizen'; 

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar switches theme automatically based on the role */}
      <Sidebar theme={userRole === 'authority' ? 'dark' : 'light'} />

      {/* Main Content Area switches based on the active role */}
      <main className="flex-1 overflow-y-auto">
        {userRole === 'authority' ? <AuthorityDashboard /> : <CitizenDashboard />}
      </main>
    </div>
  );
}
