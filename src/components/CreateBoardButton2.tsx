import React from 'react';

const CreateBoardButton: React.FC = () => {
  return (
    <button className="board-tile bg-gray-200 hover:bg-gray-300 text-gray-700">
      <span className="text-2xl">+</span>
      <span className="block mt-2">Create new board</span>
    </button>
  );
};

export default CreateBoardButton;