import Chip from './Chip';
import chipBlue from '../../assets/chip_blue.png';
import chipBlack from '../../assets/chip_black.png';
import chipPurple from '../../assets/chip_purple.png';
import chipOrange from '../../assets/chip_orange.png';
import {
  useGameContext,
  type Chip as ChipType,
} from '../../contexts/GameContext';

const chips: ChipType[] = [
  { label: '1K', imageSrc: chipPurple, value: 1000 },
  { label: '10K', imageSrc: chipBlue, value: 10000 },
  { label: '50K', imageSrc: chipOrange, value: 50000 },
  { label: '100K', imageSrc: chipBlack, value: 100000 },
];

const ChipSelector = () => {
  const { selectedChip, setSelectedChip } = useGameContext();

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
