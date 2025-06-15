import React from 'react';
import {
  FaSearch,
  FaDice,
  FaChartLine,
  FaRegCreditCard,
  FaExchangeAlt,
  FaShareAlt,
  FaLock,
  FaGift,
  FaUserFriends,
  FaFileAlt,
  FaMotorcycle,
  FaFlagCheckered,
  FaYoutube,
  FaChevronDown,
  FaChevronLeft,
  FaCrown,
  FaTrophy,
} from 'react-icons/fa';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-72 bg-[#18243a] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-blue-800">
        <span className="text-white font-extrabold text-lg tracking-wide">
          MENU
        </span>
        <button
          onClick={onClose}
          className="text-white hover:text-yellow-400 focus:outline-none"
          aria-label="Cerrar menú"
        >
          <FaChevronLeft size={22} />
        </button>
      </div>
      {/* Search */}
      <div className="px-5 py-4">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-300" />
          <input
            type="text"
            placeholder="Search for games..."
            className="w-full pl-10 pr-3 py-2 rounded bg-[#1a2540] text-white placeholder-blue-300 focus:outline-none"
          />
        </div>
      </div>
      {/* Casino/Sports Tabs */}
      <div className="px-5 flex gap-2 mb-4">
        <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-purple-600 text-white font-bold shadow relative">
          <FaCrown /> Casino
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-2 bg-purple-600 rounded-b-lg" />
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-[#23304d] text-blue-200 font-bold">
          <FaTrophy /> Sports
        </button>
      </div>
      {/* Sections */}
      <div className="flex-1 overflow-y-auto px-3 pb-6">
        {/* Popular Games */}
        <div className="bg-[#1a2540] rounded-xl mb-4 p-4">
          <div className="text-blue-200 font-bold text-xs mb-3 tracking-wider">
            POPULAR GAMES
          </div>
          <div className="flex flex-col gap-2">
            <SidebarItem icon={<FaDice />} label="Dice" />
            <SidebarItem icon={<FaChartLine />} label="Crash" />
            <SidebarItem
              icon={<span className="font-black text-lg">21</span>}
              label="BlackJack"
            />
            <SidebarItem icon={<FaRegCreditCard />} label="Baccarat" />
            <SidebarItem icon={<FaShareAlt />} label="War" />
            <SidebarItem
              icon={<FaCrown className="text-purple-400" />}
              label={<span className="font-bold text-white">Roulette</span>}
            />
          </div>
          <div className="flex justify-center mt-2">
            <FaChevronDown className="text-blue-300" />
          </div>
        </div>
        {/* Cashier */}
        <SidebarSection title="CASHIER">
          <SidebarItem icon={<FaGift />} label="Deposit" />
          <SidebarItem icon={<FaExchangeAlt />} label="Withdraw" />
          <SidebarItem icon={<FaExchangeAlt />} label="Exchange" />
          <SidebarItem icon={<FaShareAlt />} label="Transfer" />
          <SidebarItem icon={<FaLock />} label="Vault" />
        </SidebarSection>
        {/* Rewards */}
        <SidebarSection title="REWARDS">
          <SidebarItem icon={<FaGift />} label="Rakeback" />
          <SidebarItem icon={<FaUserFriends />} label="Referrals" />
          <SidebarItem icon={<FaFileAlt />} label="Earn OSRS" />
          <SidebarItem icon={<FaGift />} label="Bonus Code" />
          <SidebarItem icon={<FaMotorcycle />} label="Suzuki Raffle" />
          <SidebarItem icon={<FaFlagCheckered />} label="Weekly Race" />
          <SidebarItem icon={<FaYoutube />} label="Video Promotion" />
        </SidebarSection>
        {/* Features (placeholder) */}
      </div>
    </aside>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: React.ReactNode;
}
const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label }) => (
  <div className="flex items-center gap-3 text-blue-100 font-semibold text-base cursor-pointer hover:text-white transition">
    <span className="text-lg">{icon}</span>
    <span>{label}</span>
  </div>
);

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}
const SidebarSection: React.FC<SidebarSectionProps> = ({ title, children }) => (
  <div className="bg-[#1a2540] rounded-xl mb-4 p-4">
    <div className="text-blue-200 font-bold text-xs mb-3 tracking-wider">
      {title}
    </div>
    <div className="flex flex-col gap-2">{children}</div>
  </div>
);

export default Sidebar;
