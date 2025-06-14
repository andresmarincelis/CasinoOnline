import TableButton from './TableButton';

const ExternalBetsRow = ({ externalBets, handleExternalBetWithChip }) => {
  return (
    <tr>
      <td></td>
      {externalBets.map(({ label, betType }) => (
        <td key={label} colSpan={2} className="p-0">
          <TableButton
            value={label}
            onClick={(e) => handleExternalBetWithChip(betType, e.currentTarget)}
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
