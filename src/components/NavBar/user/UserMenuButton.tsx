import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface UserMenuButtonProps {
  username: string;
  progress?: number;
  onClick: () => void;
}

const UserMenuButton: React.FC<UserMenuButtonProps> = ({
  username,
  progress = 70,
  onClick,
}) => (
  <button
    className="flex items-center gap-3 bg-[#1a2540] rounded-xl px-3 py-2 shadow hover:bg-blue-900 transition focus:outline-none"
    onClick={onClick}
    aria-label="Open user menu"
    type="button"
  >
    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-orange-900">
      <span className="text-2xl">🔥</span>
    </div>
    <div className="flex flex-col items-start">
      <div className="flex items-center gap-1">
        <span className="text-green-400 font-extrabold text-lg">
          {username}
        </span>
        <FaChevronDown className="text-blue-200 text-xs" />
      </div>
      <div className="w-32 h-2 bg-blue-900 rounded mt-1">
        <div
          className="h-2 rounded bg-yellow-400 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  </button>
);

export default UserMenuButton;
