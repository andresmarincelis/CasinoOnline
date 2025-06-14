interface ChipProps {
  label: string;
  color?: string;
  borderColor?: string;
  textColor?: string;
  selected?: boolean;
  onClick?: () => void;
  imageSrc?: string;
}

const Chip = ({
  label,
  color = '',
  borderColor = '',
  textColor = 'text-white',
  selected = false,
  onClick,
  imageSrc,
}: ChipProps) => {
  return (
    <button
      className={`
        w-12 h-12 rounded-full border-1
        ${borderColor} ${color} ${textColor}
        flex items-center justify-center font-bold text-xs
        transition ring-2 overflow-hidden
        relative
        ${selected ? 'ring-yellow-400' : 'ring-transparent'}
      `}
      onClick={onClick}
      type="button"
    >
      {imageSrc ? (
        <>
          <img
            src={imageSrc}
            alt={label}
            className="w-full h-full object-contain absolute inset-0"
          />
          <span className="relative z-10 text-white text-xs font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] select-none">
            {label}
          </span>
        </>
      ) : (
        label
      )}
    </button>
  );
};

export default Chip;
