import TableButton from './TableButton';

const rows = [
  [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
  [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
  [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
];

const getColor = (n: number) => {
  if (n === 0) return 'bg-green-500';
  const reds = [
    1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
  ];
  return reds.includes(n) ? 'bg-red-500' : 'bg-slate-700';
};

const NumberGrid = () => (
  <div className="flex flex-col items-start gap-4">
    {/* Zona de números */}
    <div className="flex flex-row items-start gap-2">
      {/* Número 0 vertical al costado */}
      <div className="flex flex-col justify-center h-[132px] mr-2">
        <TableButton
          value={0}
          className="bg-green-500 text-white text-lg font-bold w-16 h-full rounded-md"
        />
      </div>

      {/* Números en filas horizontales */}
      <div className="flex flex-col gap-2">
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className="flex flex-row gap-2">
            {row.map((n) => (
              <TableButton
                key={n}
                value={n}
                className={`${getColor(
                  n
                )} text-white text-lg font-bold w-14 h-10 rounded-md`}
              />
            ))}
            {/* Botón "2:1" al final de cada fila */}
            <TableButton
              value="2:1"
              className="bg-blue-900 text-white w-14 h-10 rounded-md border border-blue-300"
            />
          </div>
        ))}
      </div>
    </div>

    {/* Fila de docenas */}
    <div className="flex flex-row justify-between self-start pl-[80px] bg-red-500 w-full pr-16">
      <TableButton
        value="1 to 12"
        className="bg-blue-900 text-white w-[32%] h-10 rounded-md"
      />
      <TableButton
        value="13 to 24"
        className="bg-blue-900 text-white w-[32%] h-10 rounded-md"
      />
      <TableButton
        value="25 to 36"
        className="bg-blue-900 text-white w-[32%] h-10 rounded-md"
      />
    </div>

    {/* Fila de apuestas externas */}
    <div className="flex flex-row gap-2 self-start pl-[80px]">
      {['1 to 18', 'Even', 'Red', 'Black', 'Odd', '19 to 36'].map((label) => (
        <TableButton
          key={label}
          value={label}
          className={`${
            label === 'Red'
              ? 'bg-red-500'
              : label === 'Black'
              ? 'bg-slate-700'
              : 'bg-blue-900'
          } text-white w-[90px] h-10 rounded-md`}
        />
      ))}
    </div>
  </div>
);

export default NumberGrid;
