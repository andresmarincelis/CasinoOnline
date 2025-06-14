import TableButton from './TableButton';

interface ExternalBetsRowProps {
  externalBets: Array<{ label: string; betType: string }>;
  onExternalBet: (betType: string) => void;
}

const ExternalBetsRow = ({
  externalBets,
  onExternalBet,
}: ExternalBetsRowProps) => {
  return (
    <tr>
      <td></td>
      {externalBets.map(({ label, betType }) => (
        <td key={label} colSpan={2} className="p-0">
          <TableButton
            value={label}
            onClick={() => onExternalBet(betType)}
            className={`${
              label === 'Red'
                ? 'bg-red-500'
                : label === 'Black'
                ? 'bg-slate-700'
                : 'bg-blue-900'
            } text-white w-full h-10 rounded-md`}
          />
        </td>
      ))}
    </tr>
  );
};

export default ExternalBetsRow;
