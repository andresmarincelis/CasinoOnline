const BetDisplay = ({ bets }) => {
  return (
    <pre className="mt-4 text-xs text-white bg-slate-800 p-2 rounded max-w-xl w-full overflow-x-auto">
      {JSON.stringify(bets, null, 2)}
    </pre>
  );
};

export default BetDisplay;
