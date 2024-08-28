import React from 'react';
import { BarChart2, Users, Clock } from 'lucide-react';

interface WorkspaceStatsProps {
  totalBoards: number;
  totalMembers: number;
  lastActivity: string;
}

const WorkspaceStats: React.FC<WorkspaceStatsProps> = ({ totalBoards, totalMembers, lastActivity }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mt-4">
      <h3 className="text-lg font-semibold mb-3">Workspace Stats</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex items-center">
          <BarChart2 size={20} className="text-blue-500 mr-2" />
          <div>
            <p className="text-sm text-gray-500">Total Boards</p>
            <p className="font-semibold">{totalBoards}</p>
          </div>
        </div>
        <div className="flex items-center">
          <Users size={20} className="text-green-500 mr-2" />
          <div>
            <p className="text-sm text-gray-500">Members</p>
            <p className="font-semibold">{totalMembers}</p>
          </div>
        </div>
        <div className="flex items-center">
          <Clock size={20} className="text-purple-500 mr-2" />
          <div>
            <p className="text-sm text-gray-500">Last Activity</p>
            <p className="font-semibold">{lastActivity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceStats;