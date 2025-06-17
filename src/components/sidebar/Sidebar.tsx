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
import SidebarSection from './SidebarSection';
import SidebarItem from './SidebarItem';
import { useState } from 'react';
import { useNavigate } from 'react-router';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const popularGames = [
  { icon: <FaDice />, label: 'Dice' },
  { icon: <FaChartLine />, label: 'Crash' },
  { icon: <span className="font-black text-lg">21</span>, label: 'BlackJack' },
  { icon: <FaRegCreditCard />, label: 'Baccarat' },
  { icon: <FaShareAlt />, label: 'War' },
  { icon: <FaCrown />, label: 'Roulette' },
];

const cashierItems = [
  { icon: <FaGift />, label: 'Deposit' },
  { icon: <FaExchangeAlt />, label: 'Withdraw' },
  { icon: <FaExchangeAlt />, label: 'Exchange' },
  { icon: <FaShareAlt />, label: 'Transfer' },
  { icon: <FaLock />, label: 'Vault' },
];

const rewardsItems = [
  { icon: <FaGift />, label: 'Rakeback' },
  { icon: <FaUserFriends />, label: 'Referrals' },
  { icon: <FaFileAlt />, label: 'Earn OSRS' },
  { icon: <FaGift />, label: 'Bonus Code' },
  { icon: <FaMotorcycle />, label: 'Suzuki Raffle' },
  { icon: <FaFlagCheckered />, label: 'Weekly Race' },
  { icon: <FaYoutube />, label: 'Video Promotion' },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState<string>(
    window.location.pathname.split('/')[1]
  );

  return (
    <aside
      className={`h-full bg-[#18243a] shadow-2xl flex flex-col shrink-0 transition-all duration-300 ease-in-out overflow-hidden
        ${isOpen ? 'w-72 opacity-100' : 'w-0 opacity-0'}`}
    >
      <div className="w-72">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4">
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
              {popularGames.map(({ icon, label }) => (
                <SidebarItem
                  key={label}
                  icon={icon}
                  label={label}
                  selected={currentTab === label.toLowerCase()}
                  onClick={() => {
                    onClose();
                    setCurrentTab(label.toLowerCase());
                    navigate(`/${label.toLowerCase()}`);
                  }}
                />
              ))}
            </div>
            <div className="flex justify-center mt-2">
              <FaChevronDown className="text-blue-300" />
            </div>
          </div>
          {/* Cashier */}
          <SidebarSection title="CASHIER">
            {cashierItems.map(({ icon, label }) => (
              <SidebarItem
                key={label}
                icon={icon}
                label={label}
                selected={currentTab === label.toLowerCase()}
              />
            ))}
          </SidebarSection>
          {/* Rewards */}
          <SidebarSection title="REWARDS">
            {rewardsItems.map(({ icon, label }) => (
              <SidebarItem
                key={label}
                icon={icon}
                label={label}
                selected={currentTab === label.toLowerCase()}
              />
            ))}
          </SidebarSection>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
