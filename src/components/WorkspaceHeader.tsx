import React from 'react';
import { Star, Lock, Users, ChevronDown } from 'lucide-react';

const WorkspaceHeader: React.FC = () => {
  return (
    <div className="bg-white shadow-sm p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold mr-4">Workspace Name</h1>
          <button className="text-gray-500 hover:text-yellow-500">
            <Star size={20} />
          </button>
          <span className="mx-2 text-gray-300">|</span>
          <button className="flex items-center text-gray-700 hover:bg-gray-100 px-2 py-1 rounded">
            <Lock size={16} className="mr-1" />
            Private
          </button>
          <button className="ml-2 flex items-center text-gray-700 hover:bg-gray-100 px-2 py-1 rounded">
            <Users size={16} className="mr-1" />
            Team Visible
          </button>
        </div>
        <div>
          <button className="flex items-center text-gray-700 hover:bg-gray-100 px-3 py-1 rounded">
            Workspace settings
            <ChevronDown size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceHeader;