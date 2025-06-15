import { useRef } from 'react';
import Chip from './Chip';
import {
  useRouletteContext,
  type BetType,
} from '../../contexts/RouletteContext';
import { dozens, externalBets, rows } from './utils';
import { NumberRow } from './NumberRow';
import DozenRow from './DozenRow';
import ExternalBetsRow from './ExternalBetsRow';
import { useGameContext } from '../../contexts/GameContext';

const RouletteTable = () => {
  const tableRef = useRef<HTMLTableElement>(null);

  const { selectedChip } = useGameContext();
  const {
    handleExternalBet,
    handleDoubleBets,
    handleStraightBet,
    chipPositions,
    setChipPositions,
  } = useRouletteContext();

  const addChip = (element: HTMLElement, amount: number, id: string) => {
    const rect = element.getBoundingClientRect();
    const tableRect = tableRef.current?.getBoundingClientRect();

    if (tableRect) {
      const position = {
        x: rect.left - tableRect.left + rect.width / 2,
        y: rect.top - tableRect.top + rect.height / 2,
      };

      setChipPositions((prev) => {
        const existingChip = prev.find((chip) => chip.id === id);
        if (existingChip) {
          return prev.map((chip) =>
            chip.id === id ? { ...chip, amount: chip.amount + amount } : chip
          );
        }
        return [...prev, { id, amount, position }];
      });
    }
  };

  const handleStraightBetWithChip = (number: number, element: HTMLElement) => {
    handleStraightBet(number, selectedChip.value);
    addChip(element, selectedChip.value, `straight-${number}`);
  };

  const handleDoubleBetWithChip = (
    type: 'column' | 'dozen',
    value: '1' | '2' | '3',
    element: HTMLElement
  ) => {
    handleDoubleBets(type, value, selectedChip.value);
    addChip(element, selectedChip.value, `${type}-${value}`);
  };

  const handleExternalBetWithChip = (
    betType: BetType,
    element: HTMLElement
  ) => {
    handleExternalBet(betType, selectedChip.value);
    addChip(element, selectedChip.value, `external-${betType}`);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <table ref={tableRef} className="border-separate border-spacing-2">
          <tbody>
            {rows.map((row, rowIdx) => (
              <NumberRow
                key={rowIdx}
                row={row}
                rowIdx={rowIdx}
                handleStraightBetWithChip={handleStraightBetWithChip}
                handleDoubleBetWithChip={handleDoubleBetWithChip}
              />
            ))}
            <DozenRow
              dozens={dozens}
              handleDoubleBetWithChip={handleDoubleBetWithChip}
            />
            <ExternalBetsRow
              externalBets={externalBets}
              handleExternalBetWithChip={handleExternalBetWithChip}
            />
          </tbody>
        </table>
        {chipPositions.map((chip) => (
          <Chip key={chip.id} amount={chip.amount} position={chip.position} />
        ))}
      </div>
    </div>
  );
};

export default RouletteTable;
