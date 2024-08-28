import React from 'react';
import { Activity } from 'lucide-react';

interface ActivityItem {
  id: number;
  user: string;
  action: string;
  target: string;
  time: string;
}

const WorkspaceActivity: React.FC = () => {
  const activities: ActivityItem[] = [
    { id: 1, user: 'John Doe', action: 'added', target: 'a new card to Project Alpha', time: '2 hours ago' },
    { id: 2, user: 'Jane Smith', action: 'commented on', target: 'Task XYZ', time: '4 hours ago' },
    { id: 3, user: 'Mike Johnson', action: 'completed', target: 'Sprint Planning', time: 'yesterday' },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4 mt-4">
      <h3 className="text-lg font-semibold mb-3 flex items-center">
        <Activity size={20} className="mr-2 text-gray-500" />
        Recent Activity
      </h3>
      <ul className="space-y-3">
        {activities.map((item) => (
          <li key={item.id} className="text-sm">
            <span className="font-medium">{item.user}</span> {item.action}{' '}
            <span className="text-blue-500">{item.target}</span>
            <span className="text-gray-400 ml-2">{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkspaceActivity;