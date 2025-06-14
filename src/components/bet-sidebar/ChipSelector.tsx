import Chip from './Chip';
import chipBlue from '../../assets/chip_blue.png';
import chipBlack from '../../assets/chip_black.png';
import chipPurple from '../../assets/chip_purple.png';
import chipOrange from '../../assets/chip_orange.png';
import type { SelectedChip } from '../../App';

export interface ChipSelectorProps {
  selectedChip: SelectedChip;
  setSelectedChip: (chip: SelectedChip) => void;
}

const chips: SelectedChip[] = [
  { label: '10K', imageSrc: chipBlue, value: 10000 },
  { label: '100K', imageSrc: chipBlack, value: 100000 },
  { label: '1M', imageSrc: chipPurple, value: 1000000 },
  { label: '10M', imageSrc: chipOrange, value: 10000000 },
];

const ChipSelector = ({ selectedChip, setSelectedChip }: ChipSelectorProps) => {
  return (
    <div className="grid grid-cols-4 gap-3">
      {chips.map((chip, idx) => (
        <div className="flex justify-center items-center" key={chip.label}>
          <Chip
            label={chip.label}
            imageSrc={chip.imageSrc}
            selected={selectedChip.label === chip.label}
            onClick={() => setSelectedChip(chips[idx])}
          />
        </div>
      ))}
    </div>
  );
};

export default ChipSelector;
