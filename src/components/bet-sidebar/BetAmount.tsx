interface BetAmountProps {
  amount: string; // Ejemplo: "238.68K"
  currency?: string; // Ejemplo: "RS3"
}

const BetAmount = ({ amount, currency = 'RS3' }: BetAmountProps) => {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-bold text-blue-200 tracking-wider">
          BET AMOUNT
        </span>
        <span className="text-xs text-blue-200 font-bold">{currency}</span>
      </div>
      <div className="bg-[#1a2540] rounded-lg px-4 py-3 flex items-center mb-2">
        <span className="text-yellow-400 text-xl mr-2">🪙</span>
        <span className="text-yellow-300 font-bold text-lg">{amount}</span>
      </div>
      <button className="w-full bg-green-400 hover:bg-green-500 text-white font-bold py-3 rounded-lg text-lg shadow transition">
        Bet
      </button>
    </div>
  );
};

export default BetAmount;
