import React from 'react';

interface UserMenuItemProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const UserMenuItem: React.FC<UserMenuItemProps> = ({
  icon,
  label,
  onClick,
}) => (
  <div
    className="flex items-center gap-3 px-5 py-3 text-blue-100 font-bold text-base cursor-pointer hover:bg-blue-800 border-b border-blue-900 last:border-b-0"
    onClick={onClick}
  >
    <span className="text-lg">{icon}</span>
    <span>{label}</span>
  </div>
);

export default UserMenuItem;
