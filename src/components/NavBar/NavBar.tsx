import React, { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import HamburgerMenu from './HamburgerMenu';
import BalanceDropdown from './BalanceDropdown';
import CashierButton from './CashierButton';
import UserDropdownMenu from './user/UserDropdownMenu';
import Logo from './Logo';

const NavBar: React.FC = () => {
  const username = 'xxmb';
  const usdt = 0.0;

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <nav className="fixed top-0 w-full h-20 bg-[#111F36] z-10 flex items-center justify-between px-4">
        <div className="flex items-center space-x-3">
          <HamburgerMenu onClick={() => setSidebarOpen(true)} />
          <div className="flex flex-col">
            <Logo />
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <BalanceDropdown balance={usdt} />
          <CashierButton />
          <UserDropdownMenu username={username} progress={70} />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
