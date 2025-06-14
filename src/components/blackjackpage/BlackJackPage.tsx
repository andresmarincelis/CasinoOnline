import React, { useState } from "react";
import ChipPicker from "../chipPicket/ChipPicket";
import BetPanel from "../betpanel/BetPanel";
import BetAmount from "../betamount/BetAmount";

const BlackjackPage: React.FC = () => {
  const chips = [
    10_000, 100_000, 1_000_000, 10_000_000, 100_000_000, 1_000_000_000,
  ];
  const [selectedChip, setSelectedChip] = useState<number | null>(null);

  const [bets, setBets] = useState({
    main: 0,
    luckyLadies: 0,
    perfectPairs: 0,
    twentyOneThree: 0,
  });

  const [history, setHistory] = useState<keyof (typeof bets)[]>([]);

  const handleBet = (box: keyof typeof bets) => {
    if (selectedChip) {
      setBets((prev) => ({ ...prev, [box]: prev[box] + selectedChip }));
      setHistory((prev) => [...prev, box]);
    }
  };

  const handleUndo = () => {
    const last = history.pop();
    if (last) {
      setBets((prev) => ({
        ...prev,
        [last]: Math.max(0, prev[last] - (selectedChip || 0)),
      }));
      setHistory([...history]);
    }
  };

  const handleClear = () => {
    setBets({ main: 0, luckyLadies: 0, perfectPairs: 0, twentyOneThree: 0 });
    setHistory([]);
  };

  const handlePlaceBet = () => {
    alert("Bets placed: " + JSON.stringify(bets));
  };

  const totalBet = Object.values(bets).reduce((sum, val) => sum + val, 0);

  return (
    <div className="flex h-screen bg-blue-950 text-white">
      <div className="w-1/3 p-6 flex flex-col gap-6">
        <ChipPicker
          chips={chips}
          selectedChip={selectedChip}
          onSelectChip={setSelectedChip}
        />
        <BetPanel
          bets={bets}
          onBet={handleBet}
          onUndo={handleUndo}
          onClear={handleClear}
        />
        <BetAmount total={totalBet} onPlaceBet={handlePlaceBet} />
      </div>
      <div className="w-2/3 p-6 flex items-center justify-center">
        <div className="text-center">
          <p className="uppercase text-sm">Insurance pays 2 to 1</p>
          <h1 className="text-2xl font-bold my-2">Blackjack pays 3 to 2</h1>
          <p className="uppercase text-sm">
            Dealer must draw to 16 and stand on 17
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlackjackPage;
