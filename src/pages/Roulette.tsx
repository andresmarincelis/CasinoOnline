import { RouletteProvider } from '../contexts/RouletteContext';
import RouletteTable from '../components/roulette/RouletteTable';
import Wheel from '../components/roulette/Wheel';

export const Roulette = () => {
  return (
    <RouletteProvider>
      <div className="w-full flex flex-col items-center justify-center rounded-r-2xl py-4">
        <div className="my-10">
          <Wheel />
        </div>
        <RouletteTable />
      </div>
    </RouletteProvider>
  );
};
