import TableButton from './TableButton';

interface DozensRowProps {
  dozens: Array<{ label: string; columnOrDozen: '1' | '2' | '3' }>;
  onDozenBet: (dozen: '1' | '2' | '3') => void;
}

const DozensRow = ({ dozens, onDozenBet }: DozensRowProps) => {
  return (
    <tr>
      <td></td>
      {dozens.map((dozen) => (
        <td key={dozen.label} colSpan={4} className="p-0">
          <TableButton
            value={dozen.label}
            onClick={() => onDozenBet(dozen.columnOrDozen)}
            className="bg-blue-900 text-white w-full h-10 rounded-md"
          />
        </td>
      ))}
      <td></td>
    </tr>
  );
};

export default DozensRow;
