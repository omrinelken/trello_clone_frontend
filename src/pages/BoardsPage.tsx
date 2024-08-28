import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar2';
import BoardList from '../components/BoardList2';
import CreateBoardButton from '../components/CreateBoardButton2';

const BoardsPage: React.FC = () => {
  const boards = [
    { id: 1, title: 'Project Alpha', bgColor: 'bg-blue-600', isStarred: true },
    { id: 2, title: 'Marketing Campaign', bgColor: 'bg-green-600', isStarred: false },
    { id: 3, title: 'Product Roadmap', bgColor: 'bg-purple-600', isStarred: false },
  ];

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6">
          <h1 className="text-2xl font-bold mb-6">Your Boards</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {boards.map((board) => (
              <BoardList key={board.id} {...board} />
            ))}
            <CreateBoardButton />
          </div>
        </main>
      </div>
    </div>
  );
};

export default BoardsPage;