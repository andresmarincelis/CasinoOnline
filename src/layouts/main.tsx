import { Outlet } from 'react-router';
import NavBar from '../components/navbar/NavBar';
import { useState } from 'react';
import Sidebar from '../components/sidebar/Sidebar';

export default function MainLayout() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <div className="flex flex-col h-screen">
      <NavBar setShowSidebar={setShowSidebar} />
      <div className="flex flex-1 mt-20">
        <Sidebar isOpen={showSidebar} onClose={() => setShowSidebar(false)} />
        <main className="flex-1 transition-all duration-300 ease-in-out">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
