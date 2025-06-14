import type { FC, MouseEvent } from 'react';

interface TableButtonProps {
  value: string | number;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const TableButton: FC<TableButtonProps> = ({
  value,
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} transition-transform hover:scale-105 active:scale-95`}
    >
      {value}
    </button>
  );
};

export default TableButton;
