import { RouletteProvider } from '../contexts/RouletteContext';
import WithSidebarLayout from '../components/bet-sidebar/SidebarLayout';
import RouletteTable from '../components/roulette/RouletteTable';
import Wheel from '../components/roulette/Wheel';

export const Roulette = () => {
  return (
    <RouletteProvider>
      <WithSidebarLayout>
        <div className="w-full h-screen flex flex-col items-center justify-center">
          <div>
            <Wheel />
          </div>
          <RouletteTable />
        </div>
      </WithSidebarLayout>
    </RouletteProvider>
  );
};
