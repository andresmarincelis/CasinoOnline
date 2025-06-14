import React from "react";
import BetBox from "../betbox/BetBox";

interface BetPanelProps {
  bets: {
    main: number;
    luckyLadies: number;
    perfectPairs: number;
    twentyOneThree: number;
  };
  onBet: (box: keyof BetPanelProps["bets"]) => void;
  onUndo: () => void;
  onClear: () => void;
}

const BetPanel: React.FC<BetPanelProps> = ({
  bets,
  onBet,
  onUndo,
  onClear,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <BetBox
          label="Main Bet"
          amount={bets.main}
          onClick={() => onBet("main")}
        />
        <BetBox
          label="Lucky Ladies"
          amount={bets.luckyLadies}
          onClick={() => onBet("luckyLadies")}
        />
        <BetBox
          label="Perfect Pairs"
          amount={bets.perfectPairs}
          onClick={() => onBet("perfectPairs")}
        />
        <BetBox
          label="21+3"
          amount={bets.twentyOneThree}
          onClick={() => onBet("twentyOneThree")}
        />
      </div>
      <div className="flex gap-4">
        <button
          onClick={onUndo}
          className="px-4 py-2 bg-gray-600 text-white rounded"
        >
          Undo
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-600 text-white rounded"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default BetPanel;
