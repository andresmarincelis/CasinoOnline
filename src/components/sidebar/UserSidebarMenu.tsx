import React from 'react';
import {
  FaCog,
  FaBook,
  FaFutbol,
  FaUserFriends,
  FaGift,
  FaExchangeAlt,
  FaShareAlt,
  FaHeadphones,
  FaMotorcycle,
  FaFlagCheckered,
  FaFutbol as FaCustomSports,
  FaPowerOff,
  FaTicketAlt,
  FaChevronDown,
} from 'react-icons/fa';

interface UserSidebarMenuProps {
  username: string;
  progress?: number; // 0-100
  onSignOut?: () => void;
}

const menuItems = [
  { icon: <FaCog />, label: 'Dashboard' },
  { icon: <FaBook />, label: 'Transactions' },
  { icon: <FaFutbol />, label: 'Sports Bets' },
  { icon: <FaUserFriends />, label: 'Referrals' },
  { icon: <FaGift />, label: 'Bonus Code' },
  { icon: <FaExchangeAlt />, label: 'Exchange' },
  { icon: <FaShareAlt />, label: 'Transfer' },
  { icon: <FaTicketAlt />, label: 'Tickets' },
  { icon: <FaHeadphones />, label: 'Support' },
  { icon: <FaMotorcycle />, label: 'Suzuki Raffle' },
  { icon: <FaFlagCheckered />, label: 'Weekly Race' },
  { icon: <FaCustomSports />, label: 'Custom Sports' },
];

const UserSidebarMenu: React.FC<UserSidebarMenuProps> = ({
  username,
  progress = 60,
  onSignOut,
}) => {
  return (
    <div className="w-full px-3 pt-3">
      {/* User header */}
      <div className="bg-[#1a2540] rounded-xl px-4 py-3 flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-orange-900">
          {/* Avatar fuego */}
          <span className="text-2xl">🔥</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-green-400 font-extrabold text-lg">
              {username}
            </span>
            <FaChevronDown className="text-blue-200" />
          </div>
          <div className="w-full h-2 bg-blue-900 rounded mt-1">
            <div
              className="h-2 rounded bg-yellow-400 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
      {/* Menu */}
      <div className="bg-[#23304d] rounded-xl flex flex-col overflow-hidden">
        {menuItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 px-5 py-3 text-blue-100 font-bold text-base cursor-pointer hover:bg-blue-800 border-b border-blue-900 last:border-b-0"
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
        <div
          className="flex items-center gap-3 px-5 py-3 text-blue-100 font-bold text-base cursor-pointer hover:bg-blue-800"
          onClick={onSignOut}
        >
          <span className="text-lg">
            <FaPowerOff />
          </span>
          <span>Sign Out</span>
        </div>
      </div>
    </div>
  );
};

export default UserSidebarMenu;
