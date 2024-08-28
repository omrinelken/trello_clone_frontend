import React from 'react';

interface WorkspaceMemberProps {
  name: string;
  role: string;
  avatarUrl?: string;
}

const WorkspaceMember: React.FC<WorkspaceMemberProps> = ({ name, role, avatarUrl }) => {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <div className="flex items-center p-2 hover:bg-gray-100 rounded">
      {avatarUrl ? (
        <img src={avatarUrl} alt={name} className="w-10 h-10 rounded-full mr-3" />
      ) : (
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium mr-3">
          {initials}
        </div>
      )}
      <div>
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
};

export default WorkspaceMember;