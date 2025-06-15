import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import Logo from './Logo';
import Balance from './Balance';
import UserMenu from './UserMenu';
import Sidebar from './Sidebar';

const NavBar: React.FC = () => {
  // Valores de ejemplo, puedes conectar con tu lógica de estado/contexto
  const rs3 = 0.02;
  const osrs = 0.16;
  const usdt = 0.0;
  const username = 'xxmb';

  // Estado para el sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <nav className="fixed top-0 w-full h-20 bg-blue-950 z-10 flex items-center justify-between px-4">
        {/* Izquierda: Menú hamburguesa y logo */}
        <div className="flex items-center space-x-3">
          <HamburgerMenu onClick={() => setSidebarOpen(true)} />
          <div className="flex flex-col">
            <Logo />
            <Balance rs3={rs3} osrs={osrs} />
          </div>
        </div>
        {/* Derecha: UserMenu */}
        <div className="flex items-center">
          <UserMenu username={username} usdt={usdt} />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
