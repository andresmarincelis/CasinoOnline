import { useState } from 'react';
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

const externalBets = [
  { label: '1 to 18', betType: 'low' },
  { label: 'Even', betType: 'even' },
  { label: 'Red', betType: 'red' },
  { label: 'Black', betType: 'black' },
  { label: 'Odd', betType: 'odd' },
  { label: '19 to 36', betType: 'high' },
];

const dozens: { label: string; columnOrDozen: '1' | '2' | '3' }[] = [
  { label: '1 to 12', columnOrDozen: '1' },
  { label: '13 to 24', columnOrDozen: '2' },
  { label: '25 to 36', columnOrDozen: '3' },
];

const NumberGrid = () => {
  const [bets, setBets] = useState<any[]>([]);

  const handleExternalBet = (betType: string) => {
    setBets((prev) => {
      const idx = prev.findIndex((b) => b.betType === betType);
      if (idx !== -1) {
        // Ya existe, acumula el monto
        const updated = [...prev];
        updated[idx] = {
          ...updated[idx],
          betAmount: updated[idx].betAmount + 30000,
        };
        return updated;
      }
      // No existe, agrega nueva
      return [
        ...prev,
        {
          betType,
          betAmount: 30000,
        },
      ];
    });
  };

  const handleDoubleBets = (
    type: 'column' | 'dozen',
    columnOrDozen: '1' | '2' | '3'
  ) => {
    setBets((prev) => {
      const idx = prev.findIndex(
        (b) => b.betType === type && b.columnOrDozen === columnOrDozen
      );
      if (idx !== -1) {
        // Ya existe, acumula el monto
        const updated = [...prev];
        updated[idx] = {
          ...updated[idx],
          betAmount: updated[idx].betAmount + 10000,
        };
        return updated;
      }
      // No existe, agrega nueva
      return [
        ...prev,
        {
          betType: type,
          betAmount: 10000,
          columnOrDozen,
        },
      ];
    });
  };

  const handleStraightBet = (number: number) => {
    setBets((prev) => {
      // Busca si ya existe una apuesta 'straight'
      const straightIdx = prev.findIndex((b) => b.betType === 'straight');
      if (straightIdx !== -1) {
        // Copia profunda de betNumbers
        const straightBet = {
          ...prev[straightIdx],
          betNumbers: [...prev[straightIdx].betNumbers],
        };
        const numIdx = straightBet.betNumbers.findIndex(
          (n: any) => n.number === number
        );
        if (numIdx !== -1) {
          // Suma el amount al número existente
          straightBet.betNumbers[numIdx] = {
            ...straightBet.betNumbers[numIdx],
            amount: straightBet.betNumbers[numIdx].amount + 10000,
          };
        } else {
          // Agrega el número nuevo
          straightBet.betNumbers.push({ number, amount: 10000 });
        }
        // Actualiza el array de apuestas
        const updated = [...prev];
        updated[straightIdx] = straightBet;
        return updated;
      }
      // No existe apuesta straight, crea una nueva
      return [
        ...prev,
        {
          betType: 'straight',
          betAmount: 10000,
          betNumbers: [{ number, amount: 10000 }],
        },
      ];
    });
  };

  return (
    <div className="flex flex-col items-center">
      <table className="border-separate border-spacing-2">
        <tbody>
          {/* Filas de números */}
          {rows.map((row, rowIdx) => (
            <tr key={rowIdx}>
              {rowIdx === 0 && (
                <td rowSpan={3} className="align-middle p-0">
                  <TableButton
                    value={0}
                    onClick={() => handleStraightBet(0)}
                    className="bg-green-500 text-white text-lg font-bold w-16 h-[120px] rounded-md"
                  />
                </td>
              )}
              {row.map((n) => (
                <td key={n} className="p-0">
                  <TableButton
                    value={n}
                    onClick={() => handleStraightBet(n)}
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
                    handleDoubleBets(
                      'column',
                      (3 - rowIdx).toString() as '1' | '2' | '3'
                    )
                  }
                  className="bg-blue-900 text-white w-14 h-10 rounded-md border border-blue-300"
                />
              </td>
            </tr>
          ))}

          {/* Fila de docenas */}
          <tr>
            {/* Celda vacía bajo el 0 */}
            <td></td>
            {dozens.map((dozen) => (
              <td key={dozen.label} colSpan={4} className="p-0">
                <TableButton
                  value={dozen.label}
                  onClick={() => handleDoubleBets('dozen', dozen.columnOrDozen)}
                  className="bg-blue-900 text-white w-full h-10 rounded-md"
                />
              </td>
            ))}
            {/* Celda vacía donde estaban los "2:1" */}
            <td></td>
          </tr>

          {/* Fila de apuestas externas */}
          <tr>
            <td></td>
            {externalBets.map(({ label, betType }) => (
              <td key={label} colSpan={2} className="p-0">
                <TableButton
                  value={label}
                  onClick={() => handleExternalBet(betType)}
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
        </tbody>
      </table>
      {/* Debug: mostrar apuestas guardadas */}
      <pre className="mt-4 text-xs text-white bg-slate-800 p-2 rounded max-w-xl w-full overflow-x-auto">
        {JSON.stringify(bets, null, 2)}
      </pre>
    </div>
  );
};

export default NumberGrid;
