import React from 'react';
import StatCard from '../shared-components/StatCard';
import Badge from '../shared-components/Badge';

export default function CitizenDashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* Top Welcome Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Citizen Dashboard</h1>
          <p className="text-sm text-gray-500">Together, let's make our city better. 🌱</p>
        </div>
        <div className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium cursor-pointer shadow hover:bg-emerald-700 transition">
          + Report New Issue
        </div>
      </div>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Total Complaints" count="12" subtitle="this month" trend="↑ 2" />
        <StatCard title="In Progress" count="5" subtitle="Currently active" />
        <StatCard title="Resolved" count="7" subtitle="this month" trend="↑ 3" />
        <StatCard title="High Priority" count="3" subtitle="Needs attention" />
      </div>

      {/* Track Active Complaint Section */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
        <h2 className="font-semibold text-gray-800">Track Your Complaint</h2>
        <div className="flex items-center justify-between border-b pb-4">
          <div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">#1024</span>
            <h4 className="font-medium text-gray-800 mt-1">Pothole on MG Road near School</h4>
          </div>
          <Badge label="In Progress" type="medium" />
        </div>
      </div>
    </div>
  );
}
