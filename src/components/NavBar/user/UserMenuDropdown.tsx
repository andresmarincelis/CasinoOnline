import React from 'react';
import {
  FaCog,
  FaBook,
  FaFutbol,
  FaUserFriends,
  FaGift,
  FaExchangeAlt,
  FaShareAlt,
  FaTicketAlt,
  FaHeadphones,
  FaMotorcycle,
  FaFlagCheckered,
  FaFutbol as FaCustomSports,
  FaPowerOff,
} from 'react-icons/fa';
import UserMenuItem from './UserMenuItem';

interface UserMenuDropdownProps {
  open: boolean;
  onClose: () => void;
}

const menuItems: { icon: React.ReactNode; label: string }[] = [
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

const UserMenuDropdown: React.FC<UserMenuDropdownProps> = ({
  open,
  onClose,
}) => (
  <div
    className={`absolute right-0 mt-2 w-72 bg-[#23304d] rounded-xl shadow-2xl z-50 overflow-hidden border border-blue-900 transition-all duration-200
      ${
        open
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
    style={{ minWidth: 260 }}
  >
    {menuItems.map((item) => (
      <UserMenuItem
        key={item.label}
        icon={item.icon}
        label={item.label}
        onClick={onClose}
      />
    ))}
    <UserMenuItem icon={<FaPowerOff />} label="Sign Out" onClick={onClose} />
  </div>
);

export default UserMenuDropdown;
