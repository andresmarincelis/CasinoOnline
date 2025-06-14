import React from "react";

interface ChipPickerProps {
  chips: number[];
  selectedChip: number | null;
  onSelectChip: (chip: number) => void;
}

const ChipPicker: React.FC<ChipPickerProps> = ({
  chips,
  selectedChip,
  onSelectChip,
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {chips.map((chip) => (
        <button
          key={chip}
          onClick={() => onSelectChip(chip)}
          className={`w-12 h-12 rounded-full border-2 border-white text-white font-bold ${
            selectedChip === chip ? "ring-4 ring-yellow-400" : ""
          }`}
          style={{ backgroundColor: "#1e3a8a" }}
        >
          {chip >= 1_000_000
            ? `${chip / 1_000_000}M`
            : chip >= 1_000
            ? `${chip / 1_000}K`
            : chip}
        </button>
      ))}
    </div>
  );
};

export default ChipPicker;
