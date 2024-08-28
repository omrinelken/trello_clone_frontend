import React from 'react';
import { Link } from 'react-router-dom';

interface BoardListProps {
  id: number;
  title: string;
  bgColor: string;
  isStarred: boolean;
}

const BoardList: React.FC<BoardListProps> = ({ id, title, bgColor, isStarred }) => {
  return (
    <Link to={`/board/${id}`} className={`board-tile ${bgColor} ${isStarred ? 'board-tile-starred' : ''}`}>
      <h3 className="text-white font-semibold">{title}</h3>
    </Link>
  );
};

export default BoardList;