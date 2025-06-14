import { useState } from 'react';
import WithSidebarLayout from './components/bet-sidebar/SidebarLayout';
import RouletteTable from './components/roulette/RouletteTable';
import Wheel from './components/roulette/Wheel';
import { RouletteProvider } from './contexts/RouletteContext';

export interface SelectedChip {
  label: string;
  value: number;
  imageSrc?: string;
}

function App() {
  const [selectedChip, setSelectedChip] = useState<SelectedChip>({
    label: '10K',
    value: 10000,
  });

  return (
    <RouletteProvider>
      <WithSidebarLayout
        selectedChip={selectedChip}
        setSelectedChip={setSelectedChip}
      >
        <div className="w-full h-screen flex flex-col items-center justify-center">
          <div>
            <Wheel />
          </div>
          <RouletteTable selectedChip={selectedChip} />
        </div>
      </WithSidebarLayout>
    </RouletteProvider>
  );
}

export default App;
