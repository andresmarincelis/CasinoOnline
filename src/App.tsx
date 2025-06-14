import RouletteTable from './components/roulette/RouletteTable';
import Wheel from './components/roulette/Wheel';
import { RouletteProvider } from './contexts/RouletteContext';

function App() {
  return (
    <RouletteProvider>
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div>
          <Wheel />
        </div>
        <RouletteTable />
      </div>
    </RouletteProvider>
  );
}

export default App;
