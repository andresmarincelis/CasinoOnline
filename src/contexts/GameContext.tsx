import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';

export interface Chip {
  label: string;
  value: number;
  imageSrc?: string;
}

export interface GameContextInterface {
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

  return (
    <GameContext.Provider
      value={{ selectedChip, totalBet, setSelectedChip, setTotalBet }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
