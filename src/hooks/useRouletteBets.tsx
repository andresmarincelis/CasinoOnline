import { useState } from 'react';

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
  columnOrDozen?: '1' | '2' | '3';
  betNumbers?: Array<{ number: number; amount: number }>;
}

export const useRouletteBets = () => {
  const [bets, setBets] = useState<Bet[]>([]);

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

  return {
    bets,
    handleExternalBet,
    handleDoubleBets,
    handleStraightBet,
  };
};
