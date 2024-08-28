import React from 'react';
import { Users, Calendar, Settings } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <h2 className="text-lg font-semibold mb-4">Workspace Name</h2>
      <nav>
        <ul className="space-y-2">
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
              <Settings size={16} className="mr-2" />
              Workspace settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;