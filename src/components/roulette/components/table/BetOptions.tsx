import TableButton from './TableButton';

const bets = [
  [{ label: '1 to 12' }, { label: '13 to 24' }, { label: '25 to 36' }],
  [
    { label: '1 to 18' },
    { label: 'Even' },
    { label: 'Red', color: 'bg-red-500' },
    { label: 'Black', color: 'bg-slate-800' },
    { label: 'Odd' },
    { label: '19 to 36' },
  ],
];

const BetOptions = () => (
  <div className="flex flex-col gap-2 mt-4">
    <div className="flex gap-2">
      {bets[0].map((bet) => (
        <TableButton
          key={bet.label}
          value={bet.label}
          className="bg-blue-900 text-white w-36 h-10 rounded-md border border-blue-300"
        />
      ))}
    </div>
    <div className="flex gap-2">
      {bets[1].map((bet) => (
        <TableButton
          key={bet.label}
          value={bet.label}
          className={`${
            bet.color || 'bg-blue-900'
          } text-white w-24 h-10 rounded-md border border-blue-300`}
        />
      ))}
    </div>
  </div>
);

export default BetOptions;
