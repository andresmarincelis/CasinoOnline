import React from 'react';
import { FaUserCircle, FaWallet } from 'react-icons/fa';

interface UserMenuProps {
  username: string;
  usdt: number;
}

const UserMenu: React.FC<UserMenuProps> = ({ username, usdt }) => (
  <div className="flex items-center space-x-4">
    <div className="flex items-center bg-blue-900 rounded px-2 py-1 text-xs text-white">
      <FaWallet className="mr-1 text-green-400" />
      <span>{usdt.toFixed(2)}</span>
      <span className="ml-1 text-gray-300">USDT</span>
    </div>
    <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-3 py-1 rounded transition-colors text-xs shadow">
      Cashier
    </button>
    <div className="flex items-center space-x-2">
      <span className="text-white font-medium text-sm hidden sm:inline">
        {username}
      </span>
      <FaUserCircle className="text-3xl text-yellow-400" />
    </div>
  </div>
);

export default UserMenu;
