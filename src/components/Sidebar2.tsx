import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <nav>
        <ul>
          <li className="mb-2">
            <Link to="/boards" className="text-blue-600 hover:underline">Boards</Link>
          </li>
          <li className="mb-2">
            <Link to="/workspace" className="text-blue-600 hover:underline">Workspaces</Link>
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;