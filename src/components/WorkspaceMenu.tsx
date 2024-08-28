import React from 'react';
import { Layout, Calendar, Users, Cog, PlusCircle } from 'lucide-react';

const WorkspaceMenu: React.FC = () => {
  return (
    <nav className="bg-gray-100 p-4">
      <ul className="space-y-2">
        <li>
          <a href="#" className="flex items-center text-gray-700 hover:bg-gray-200 px-2 py-1 rounded">
            <Layout size={16} className="mr-2" />
            Boards
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center text-gray-700 hover:bg-gray-200 px-2 py-1 rounded">
            <Users size={16} className="mr-2" />
            Members
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center text-gray-700 hover:bg-gray-200 px-2 py-1 rounded">
            <Calendar size={16} className="mr-2" />
            Calendar
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center text-gray-700 hover:bg-gray-200 px-2 py-1 rounded">
            <Cog size={16} className="mr-2" />
            Settings
          </a>
        </li>
        <li className="pt-4">
          <button className="w-full flex items-center justify-center bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded">
            <PlusCircle size={16} className="mr-2" />
            Create new board
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default WorkspaceMenu;