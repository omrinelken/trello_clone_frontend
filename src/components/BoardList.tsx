import React from 'react';
import { Plus } from 'lucide-react';

const BoardList: React.FC = () => {
  const boards = [
    { id: 1, title: 'Project Alpha', color: 'bg-blue-600' },
    { id: 2, title: 'Marketing Campaign', color: 'bg-green-600' },
    { id: 3, title: 'Product Roadmap', color: 'bg-purple-600' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {boards.map((board) => (
        
          key={board.id}
          href="#"
          className={`${board.color} h-24 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-center`}
        >
          <span className="text-white font-medium">{board.title}</span>
        </a>
      ))}
      <button className="h-24 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200">
        <Plus size={24} className="text-gray-400 mr-2" />
        <span className="text-gray-600 font-medium">Create new board</span>
      </button>
    </div>
  );
};

export default BoardList;