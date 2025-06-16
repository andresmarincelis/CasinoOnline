import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';
import { type GameStrategy, type GameStrategyContext } from './GameStrategy';

export interface Chip {
  label: string;
  value: number;
  imageSrc?: string;
}

export interface GameContextInterface extends GameStrategyContext {
  selectedChip: Chip;
  totalBet: number;
  setSelectedChip: Dispatch<SetStateAction<Chip>>;
  setTotalBet: Dispatch<SetStateAction<number>>;
}

const GameContext = createContext<GameContextInterface>(
  {} as GameContextInterface
);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [totalBet, setTotalBet] = useState<number>(0);
  const [selectedChip, setSelectedChip] = useState<Chip>({
    label: '1K',
    value: 1000,
  });
  const [strategy, setStrategy] = useState<GameStrategy>({
    play: async () => {
      console.warn('No game strategy set');
    },
  });

  return (
    <GameContext.Provider
      value={{
        selectedChip,
        totalBet,
        setSelectedChip,
        setTotalBet,
        strategy,
        setStrategy,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
