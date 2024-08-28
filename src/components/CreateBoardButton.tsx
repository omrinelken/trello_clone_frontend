import React from 'react';
import { Plus } from 'lucide-react';

const CreateBoardButton: React.FC = () => {
  return (
    <button className="h-24 w-full rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200">
      <Plus size={24} className="text-gray-400 mr-2" />
      <span className="text-gray-600 font-medium">Create new board</span>
    </button>
  );
};

export default CreateBoardButton;