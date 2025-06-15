import React from 'react';

interface BalanceProps {
  rs3: number;
  osrs: number;
}

const Balance: React.FC<BalanceProps> = ({ rs3, osrs }) => (
  <div className="flex flex-col text-xs text-yellow-300 font-semibold leading-tight ml-1">
    <span>
      RS3 <span className="text-yellow-100">{rs3.toFixed(3)}</span>
    </span>
    <span>
      OSRS <span className="text-yellow-100">{osrs.toFixed(3)}</span>
    </span>
  </div>
);

export default Balance;
