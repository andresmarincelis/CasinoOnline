import { GameProvider } from './contexts/GameContext';
import { Roulette } from './pages/Roulette';

function App() {
  return (
    <GameProvider>
      <Roulette />
    </GameProvider>
  );
}

export default App;
