import TableButton from './TableButton';
import { getColor } from './utils';

interface NumberRowsProps {
  rows: number[][];
  onStraightBet: (number: number) => void;
  onColumnBet: (column: '1' | '2' | '3') => void;
}

const NumberRows = ({ rows, onStraightBet, onColumnBet }: NumberRowsProps) => {
  return (
    <>
      {rows.map((row, rowIdx) => (
        <tr key={rowIdx}>
          {rowIdx === 0 && (
            <td rowSpan={3} className="align-middle p-0">
              <TableButton
                value={0}
                onClick={() => onStraightBet(0)}
                className="bg-green-500 text-white text-lg font-bold w-16 h-[120px] rounded-md"
              />
            </td>
          )}
          {row.map((n) => (
            <td key={n} className="p-0">
              <TableButton
                value={n}
                onClick={() => onStraightBet(n)}
                className={`${getColor(
                  n
                )} text-white text-lg font-bold w-14 h-10 rounded-md`}
              />
            </td>
          ))}
          <td className="p-0">
            <TableButton
              value="2:1"
              onClick={() =>
                onColumnBet((3 - rowIdx).toString() as '1' | '2' | '3')
              }
              className="bg-blue-900 text-white w-14 h-10 rounded-md border border-blue-300"
            />
          </td>
        </tr>
      ))}
    </>
  );
};

export default NumberRows;
