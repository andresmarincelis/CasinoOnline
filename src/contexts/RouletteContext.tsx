import axios from 'axios';
import { createContext, useContext, useState } from 'react';

export type ColumnOrDozenType = '1' | '2' | '3';
export type BetType =
  | 'low'
  | 'high'
  | 'even'
  | 'odd'
  | 'red'
  | 'black'
  | 'straight'
  | 'dozen'
  | 'column';

interface Bet {
  betType: BetType;
  betAmount: number;
  columnOrDozen?: ColumnOrDozenType;
  betNumbers?: { number: number; amount: number }[];
}

export interface RouletteContextInterface {
  bets: Bet[];
  winningNumber: number | null;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  handleExternalBet: (betType: BetType) => void;
  handleDoubleBets: (
    type: 'column' | 'dozen',
    columnOrDozen: ColumnOrDozenType
  ) => void;
  handleStraightBet: (number: number) => void;
  play: () => Promise<void>;
}

const RouletteContext = createContext<RouletteContextInterface>(
  {} as RouletteContextInterface
);

export const RouletteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [bets, setBets] = useState<Bet[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [winningNumber, setWinningNumber] = useState<number | null>(null);

  const handleExternalBet = (betType: BetType) => {
    setBets((prev) => {
      const idx = prev.findIndex((b) => b.betType === betType);
      if (idx !== -1) {
        const updated = [...prev];
        updated[idx] = {
          ...updated[idx],
          betAmount: updated[idx].betAmount + 30000,
        };
        return updated;
      }
      return [
        ...prev,
        {
          betType,
          betAmount: 30000,
        },
      ];
    });
  };

  const handleDoubleBets = (
    type: 'column' | 'dozen',
    columnOrDozen: '1' | '2' | '3'
  ) => {
    setBets((prev) => {
      const idx = prev.findIndex(
        (b) => b.betType === type && b.columnOrDozen === columnOrDozen
      );
      if (idx !== -1) {
        const updated = [...prev];
        updated[idx] = {
          ...updated[idx],
          betAmount: updated[idx].betAmount + 10000,
        };
        return updated;
      }
      return [
        ...prev,
        {
          betType: type,
          betAmount: 10000,
          columnOrDozen,
        },
      ];
    });
  };

  const handleStraightBet = (number: number) => {
    setBets((prev) => {
      const straightIdx = prev.findIndex((b) => b.betType === 'straight');
      if (straightIdx !== -1) {
        const straightBet = {
          ...prev[straightIdx],
          betNumbers: [...prev[straightIdx].betNumbers!],
        };
        const numIdx = straightBet.betNumbers.findIndex(
          (n) => n.number === number
        );
        if (numIdx !== -1) {
          straightBet.betNumbers[numIdx] = {
            ...straightBet.betNumbers[numIdx],
            amount: straightBet.betNumbers[numIdx].amount + 10000,
          };
        } else {
          straightBet.betNumbers.push({ number, amount: 10000 });
        }
        const updated = [...prev];
        updated[straightIdx] = straightBet;
        return updated;
      }
      return [
        ...prev,
        {
          betType: 'straight',
          betAmount: 10000,
          betNumbers: [{ number, amount: 10000 }],
        },
      ];
    });
  };

  const play = async () => {
    if (!bets.length) return;
    const response = await axios.post(
      'http://localhost:3002/roulette/start',
      { bets },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJxS25Xd3BEd3NucFc2UTNzcSIsImVtYWlsIjoiZGllZ29jZXJkYWNlbGlzQGhvdG1haWwuY29tIiwiaWF0IjoxNzQ5OTM3Nzc5LCJleHAiOjE3NDk5NDEzNzl9.z1Oc7nJZC3Q8IacxlIyUEvTb5tCppauW9UrsAE6wNaE`,
        },
      }
    );
    const data = response.data;
    setWinningNumber(data.winningNumber);
    setBets([]);
    setLoading(false);
  };

  return (
    <RouletteContext.Provider
      value={{
        bets,
        winningNumber,
        handleExternalBet,
        handleDoubleBets,
        handleStraightBet,
        play,
        loading,
        setLoading,
      }}
    >
      {children}
    </RouletteContext.Provider>
  );
};

export const useRouletteContext = () => useContext(RouletteContext);
