import type { BetType } from '../../contexts/RouletteContext';
import blueChip from '../../assets/blue_chip.png';
import blackChip from '../../assets/black_chip.png';
import pinkChip from '../../assets/pink_chip.png';
import greenChip from '../../assets/green_chip.png';
import lightChip from '../../assets/light_chip.png';

export const rouletteWheelNumbers = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24,
  16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26,
];

export const rows: number[][] = [
  [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
  [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
  [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
];

export const getColor = (n: number): string => {
  if (n === 0) return 'bg-green-500';
  const reds = [
    1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
  ];
  return reds.includes(n) ? 'bg-red-500' : 'bg-slate-700';
};

export const externalBets: { label: string; betType: BetType }[] = [
  { label: '1 to 18', betType: 'low' },
  { label: 'Even', betType: 'even' },
  { label: 'Red', betType: 'red' },
  { label: 'Black', betType: 'black' },
  { label: 'Odd', betType: 'odd' },
  { label: '19 to 36', betType: 'high' },
];

export const dozens: { label: string; columnOrDozen: '1' | '2' | '3' }[] = [
  { label: '1 to 12', columnOrDozen: '1' },
  { label: '13 to 24', columnOrDozen: '2' },
  { label: '25 to 36', columnOrDozen: '3' },
];

export const getChipImage = (amount: number): string => {
  if (amount >= 1000000) return blackChip;
  if (amount >= 100000) return greenChip;
  if (amount >= 50000) return pinkChip;
  if (amount >= 10000) return blueChip;
  return lightChip;
};
