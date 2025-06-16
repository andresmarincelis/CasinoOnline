import { useRouletteContext } from '../../contexts/RouletteContext';
import TableButton from './TableButton';

const ExternalBetsRow = ({ externalBets, handleExternalBetWithChip }) => {
  const { chipPositions } = useRouletteContext();
  return (
    <tr>
      <td></td>
      {externalBets.map(({ label, betType }) => {
        const hasChip = chipPositions.some(
          (chip) => chip.id === `external-${betType}`
        );

        return (
          <td key={label} colSpan={2} className="p-0">
            <TableButton
              hideLabel={hasChip}
              value={label}
              onClick={(e) =>
                handleExternalBetWithChip(betType, e.currentTarget)
              }
              className={`${
                label === 'Red'
                  ? 'bg-red-500'
                  : label === 'Black'
                  ? 'bg-slate-700'
                  : 'bg-blue-900'
              } text-white w-full h-10 rounded-md`}
            />
          </td>
        );
      })}
    </tr>
  );
};

export default ExternalBetsRow;
