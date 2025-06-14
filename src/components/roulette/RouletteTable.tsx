import NumberRows from './NumberRows';
import ExternalBetsRow from './ExternalBetsRow';
import { dozens, externalBets, rows } from './utils';
import DozensRow from './DozenRow';
import { useRouletteContext } from '../../contexts/RouletteContext';

const RouletteTable = () => {
  const { bets, handleExternalBet, handleDoubleBets, handleStraightBet, play } =
    useRouletteContext();

  return (
    <div className="flex flex-col items-center">
      <table className="border-separate border-spacing-2">
        <tbody>
          <NumberRows
            rows={rows}
            onStraightBet={handleStraightBet}
            onColumnBet={(column) => handleDoubleBets('column', column)}
          />
          <DozensRow
            dozens={dozens}
            onDozenBet={(dozen) => handleDoubleBets('dozen', dozen)}
          />
          <ExternalBetsRow
            externalBets={externalBets}
            onExternalBet={handleExternalBet}
          />
        </tbody>
      </table>
      <button onClick={play}>Start</button>
      <pre className="mt-4 text-xs text-white bg-slate-800 p-2 rounded max-w-xl w-full overflow-x-auto">
        {JSON.stringify(bets, null, 2)}
      </pre>
    </div>
  );
};

export default RouletteTable;
