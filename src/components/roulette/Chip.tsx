import { getChipImage } from './utils';
import { formatNumberShort } from '../../utils/formatNumber';

interface ChipProps {
  amount: number;
  position: { x: number; y: number };
}

const Chip = ({ amount, position }: ChipProps) => {
  return (
    <div
      className="absolute"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }}
    >
      <img
        src={getChipImage(amount)}
        alt={`Chip ${amount}`}
        className="w-10 h-10 select-none"
        draggable={false}
        style={{ userSelect: 'none', pointerEvents: 'none' }}
      />
      <div
        className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold"
        style={{ userSelect: 'none', pointerEvents: 'none' }}
      >
        {formatNumberShort(amount)}
      </div>
    </div>
  );
};

export default Chip;
