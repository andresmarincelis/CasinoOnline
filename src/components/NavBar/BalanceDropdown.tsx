import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useWalletContext } from '../../contexts/WalletContext';
import { formatNumberShort } from '../../utils/formatNumber';

interface BalanceDropdownProps {
  onClick?: () => void;
}

const BalanceDropdown: React.FC<BalanceDropdownProps> = () => {
  const { wallet } = useWalletContext();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        className="flex items-center gap-3 bg-[#2a395b] rounded-xl px-4 py-2 shadow hover:bg-blue-900 transition focus:outline-none min-w-[140px]"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open balance menu"
        type="button"
      >
        <img
          src={
            'https://images.seeklogo.com/logo-png/32/1/tether-usdt-logo-png_seeklogo-323175.png'
          }
          alt="USDT"
          className="w-7 h-7 rounded-full bg-white p-1"
        />
        <div className="flex flex-col items-start">
          <span className="text-white font-bold text-base leading-5">
            {formatNumberShort(wallet.balance)}
          </span>
          <span className="text-blue-200 text-xs font-semibold leading-4">
            USDT
          </span>
        </div>
        <span className="ml-2">
          <FaChevronDown className="text-blue-200 text-lg" />
        </span>
      </button>
      {/* Dropdown futuro aquí si lo necesitas */}
    </div>
  );
};

export default BalanceDropdown;
