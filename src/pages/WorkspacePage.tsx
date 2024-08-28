import React from 'react';
import Header from '../components/Header';
import WorkspaceHeader from '../components/WorkspaceHeader';
import WorkspaceMenu from '../components/WorkspaceMenu';
import BoardCard from '../components/BoardCard';
import CreateBoardButton from '../components/CreateBoardButton';
import WorkspaceMember from '../components/WorkspaceMember';
import WorkspaceStats from '../components/WorkspaceStats';
import WorkspaceActivity from '../components/WorkspaceActivity';

const WorkspacePage: React.FC = () => {
  const boards = [
    { id: 1, title: 'Project Alpha', bgColor: 'bg-blue-600', isStarred: true },
    { id: 2, title: 'Marketing Campaign', bgColor: 'bg-green-600', isStarred: false },
    { id: 3, title: 'Product Roadmap', bgColor: 'bg-purple-600', isStarred: false },
  ];

  const members = [
    { name: 'John Doe', role: 'Admin' },
    { name: 'Jane Smith', role: 'Member' },
    { name: 'Mike Johnson', role: 'Member' },
  ];

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <WorkspaceHeader />
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 overflow-y-auto">
          <WorkspaceMenu />
        </aside>
        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Your Boards</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {boards.map((board) => (
                  <BoardCard key={board.id} {...board} />
                ))}
                <CreateBoardButton />
              </div>
              <WorkspaceStats totalBoards={boards.length} totalMembers={members.length} lastActivity="2 hours ago" />
              <WorkspaceActivity />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Workspace Members</h2>
              <div className="bg-white rounded-lg shadow">
                {members.map((member, index) => (
                  <WorkspaceMember key={index} {...member} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WorkspacePage;