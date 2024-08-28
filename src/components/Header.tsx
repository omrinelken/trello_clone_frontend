import React from 'react';
import { Bell, Search, Grid, InfoIcon } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src="/trello-logo.svg" alt="Trello" className="h-8 w-auto mr-4" />
            <button className="text-sm font-medium text-gray-700 hover:text-gray-900">Workspaces</button>
            <button className="ml-4 text-sm font-medium text-gray-700 hover:text-gray-900">Recent</button>
            <button className="ml-4 text-sm font-medium text-gray-700 hover:text-gray-900">Starred</button>
            <button className="ml-4 text-sm font-medium text-gray-700 hover:text-gray-900">Templates</button>
          </div>
          <div className="flex items-center">
            <button className="text-gray-500 hover:text-gray-700"><Search size={20} /></button>
            <button className="ml-4 text-gray-500 hover:text-gray-700"><Bell size={20} /></button>
            <button className="ml-4 text-gray-500 hover:text-gray-700"><InfoIcon size={20} /></button>
            <button className="ml-4 text-gray-500 hover:text-gray-700"><Grid size={20} /></button>
            <div className="ml-4 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
              JD
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;