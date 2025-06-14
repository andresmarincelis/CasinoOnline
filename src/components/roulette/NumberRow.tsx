import TableButton from './TableButton';
import { getColor } from './utils';

export const NumberRow = ({
  row,
  rowIdx,
  handleStraightBetWithChip,
  handleDoubleBetWithChip,
}) => {
  return (
    <tr>
      {rowIdx === 0 && (
        <td rowSpan={3} className="align-middle p-0">
          <TableButton
            value={0}
            onClick={(e) => handleStraightBetWithChip(0, e.currentTarget)}
            className="bg-green-500 text-white text-lg font-bold w-16 h-[120px] rounded-md"
          />
        </td>
      )}
      {row.map((n) => (
        <td key={n} className="p-0">
          <TableButton
            value={n}
            onClick={(e) => handleStraightBetWithChip(n, e.currentTarget)}
            className={`${getColor(
              n
            )} text-white text-lg font-bold w-14 h-10 rounded-md`}
          />
        </td>
      ))}
      <td className="p-0">
        <TableButton
          value="2:1"
          onClick={(e) =>
            handleDoubleBetWithChip(
              'column',
              (3 - rowIdx).toString() as '1' | '2' | '3',
              e.currentTarget
            )
          }
          className="bg-blue-900 text-white w-14 h-10 rounded-md border border-blue-300"
        />
      </td>
    </tr>
  );
};
