import React from "react";

interface BetBoxProps {
  label: string;
  amount: number;
  onClick: () => void;
}

const BetBox: React.FC<BetBoxProps> = ({ label, amount, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-32 h-32 bg-blue-800 rounded-lg flex flex-col items-center justify-center text-white cursor-pointer"
    >
      <div className="text-sm">{label}</div>
      <div className="text-xl font-bold">{amount}</div>
    </div>
  );
};

export default BetBox;
