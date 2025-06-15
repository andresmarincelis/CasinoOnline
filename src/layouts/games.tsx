import { Outlet } from 'react-router';
import BetSidebar from '../components/bet-sidebar/BetSidebar';
import { GameProvider } from '../contexts/GameContext';

export default function GamesLayout() {
  return (
    <GameProvider>
      <div
        className="w-full flex justify-center items-start rounded-r-2xl"
        style={{ minHeight: 'calc(100vh - 80px)' }}
      >
        <div className="w-full max-w-7xl flex rounded-l-2xl rounded-r-2xl bg-[#1a3350] mt-5">
          <div className="flex-shrink-0" style={{ width: 340 }}>
            <BetSidebar />
          </div>
          <div className="flex-1 rounded-r-2xl">
            <Outlet />
          </div>
        </div>
      </div>
    </GameProvider>
  );
}
