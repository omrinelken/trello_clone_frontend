import React from 'react';
import { Star } from 'lucide-react';

interface BoardCardProps {
  title: string;
  bgColor: string;
  isStarred: boolean;
}

const BoardCard: React.FC<BoardCardProps> = ({ title, bgColor, isStarred }) => {
  return (
    <div className={`${bgColor} h-24 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 relative`}>
      <a href="#" className="block h-full w-full p-4">
        <h3 className="text-white font-medium">{title}</h3>
      </a>
      <button className={`absolute top-2 right-2 ${isStarred ? 'text-yellow-300' : 'text-white opacity-50'} hover:opacity-100`}>
        <Star size={16} />
      </button>
    </div>
  );
};

export default BoardCard;