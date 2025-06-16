import type { FC, MouseEvent } from 'react';

interface TableButtonProps {
  value: string | number;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  hideLabel?: boolean;
}

const TableButton: FC<TableButtonProps> = ({
  value,
  onClick,
  className = '',
  hideLabel = false,
}) => {
  return (
    <button
      style={{ color: hideLabel ? 'transparent' : 'white' }}
      onClick={onClick}
      className={`${className} transition-transform hover:scale-105 active:scale-95 hover:cursor-pointer hover:brightness-130`}
    >
      {value}
    </button>
  );
};

export default TableButton;
