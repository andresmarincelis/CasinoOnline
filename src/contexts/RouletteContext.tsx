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
  handleExternalBet: (betType: BetType, amount: number) => void;
  handleDoubleBets: (
    type: 'column' | 'dozen',
    columnOrDozen: ColumnOrDozenType,
    amount: number
  ) => void;
  handleStraightBet: (number: number, amount: number) => void;
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

  const handleExternalBet = (betType: BetType, amount: number) => {
    setBets((prev) => {
      const idx = prev.findIndex((b) => b.betType === betType);
      if (idx !== -1) {
        const updated = [...prev];
        updated[idx] = {
          ...updated[idx],
          betAmount: updated[idx].betAmount + amount,
        };
        return updated;
      }
      return [
        ...prev,
        {
          betType,
          betAmount: amount,
        },
      ];
    });
  };

  const handleDoubleBets = (
    type: 'column' | 'dozen',
    columnOrDozen: ColumnOrDozenType,
    amount: number
  ) => {
    setBets((prev) => {
      const idx = prev.findIndex(
        (b) => b.betType === type && b.columnOrDozen === columnOrDozen
      );
      if (idx !== -1) {
        const updated = [...prev];
        updated[idx] = {
          ...updated[idx],
          betAmount: updated[idx].betAmount + amount,
        };
        return updated;
      }
      return [
        ...prev,
        {
          betType: type,
          betAmount: amount,
          columnOrDozen,
        },
      ];
    });
  };

  const handleStraightBet = (number: number, amount: number) => {
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
            amount: straightBet.betNumbers[numIdx].amount + amount,
          };
        } else {
          straightBet.betNumbers.push({ number, amount });
        }
        const updated = [...prev];
        updated[straightIdx] = straightBet;
        return updated;
      }
      return [
        ...prev,
        {
          betType: 'straight',
          betAmount: amount,
          betNumbers: [{ number, amount }],
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
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJxS25Xd3BEd3NucFc2UTNzcSIsImVtYWlsIjoiZGllZ29jZXJkYWNlbGlzQGhvdG1haWwuY29tIiwiaWF0IjoxNzQ5OTQyODA3LCJleHAiOjE3NDk5NDY0MDd9.hKBcBM5JSY7xegS2q3YSnRo68kZ-W1gYynl6Byy7Vvo`,
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
