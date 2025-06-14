import React from 'react';

type TableButtonProps = {
  value: string | number;
  className?: string;
  onClick?: () => void;
};

const TableButton: React.FC<TableButtonProps> = ({
  value,
  className = '',
  onClick,
}) => (
  <button
    className={`flex items-center justify-center font-semibold transition-all select-none cursor-pointer hover:brightness-150 hover:opacity-90 ${className}`}
    onClick={onClick}
    type="button"
  >
    {value}
  </button>
);

export default TableButton;
