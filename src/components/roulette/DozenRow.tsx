import { useRouletteContext } from '../../contexts/RouletteContext';
import TableButton from './TableButton';

const DozenRow = ({ dozens, handleDoubleBetWithChip }) => {
  const { chipPositions } = useRouletteContext();

  return (
    <tr>
      <td></td>
      {dozens.map((dozen) => {
        const hasChip = chipPositions.some(
          (chip) => chip.id === `dozen-${dozen.columnOrDozen}`
        );
        return (
          <td key={dozen.label} colSpan={4} className="p-0">
            <TableButton
              hideLabel={hasChip}
              value={dozen.label}
              onClick={(e) =>
                handleDoubleBetWithChip(
                  'dozen',
                  dozen.columnOrDozen,
                  e.currentTarget
                )
              }
              className="bg-blue-900 text-white w-full h-10 rounded-md"
            />
          </td>
        );
      })}
      <td></td>
    </tr>
  );
};

export default DozenRow;
