import Chip from './Chip';
import lightChip from '../../assets/light_chip.png';
import blueChip from '../../assets/blue_chip.png';
import greenChip from '../../assets/green_chip.png';
import blackChip from '../../assets/black_chip.png';
import pinkChip from '../../assets/pink_chip.png';

import {
  useGameContext,
  type Chip as ChipType,
} from '../../contexts/GameContext';

const chips: ChipType[] = [
  { label: '1K', imageSrc: lightChip, value: 1000 },
  { label: '10K', imageSrc: blueChip, value: 10000 },
  { label: '50K', imageSrc: pinkChip, value: 50000 },
  { label: '100K', imageSrc: greenChip, value: 100000 },
  { label: '1M', imageSrc: blackChip, value: 1000000 },
];

const ChipSelector = () => {
  const { selectedChip, setSelectedChip } = useGameContext();

  return (
    <div className="grid grid-cols-4 gap-3">
      {chips?.map((chip, idx) => (
        <div className="flex justify-center items-center" key={chip?.label}>
          <Chip
            label={chip?.label}
            imageSrc={chip?.imageSrc}
            selected={selectedChip?.label === chip?.label}
            onClick={() => setSelectedChip(chips[idx])}
          />
        </div>
      ))}
    </div>
  );
};

export default ChipSelector;
