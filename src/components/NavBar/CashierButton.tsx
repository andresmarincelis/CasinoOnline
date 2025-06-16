import React from 'react';
import { FaGift } from 'react-icons/fa';

interface CashierButtonProps {
  onClick?: () => void;
}

const CashierButton: React.FC<CashierButtonProps> = ({ onClick }) => (
  <button
    className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-2 rounded-xl shadow text-base transition focus:outline-none ml-3 min-w-[120px]"
    onClick={onClick}
    type="button"
  >
    <span className="text-2xl">
      <FaGift />
    </span>
    <span>Cashier</span>
  </button>
);

export default CashierButton;
