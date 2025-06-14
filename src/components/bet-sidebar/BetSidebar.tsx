import ChipSelector from './ChipSelector';
import Tabs from './Tabs';
import BetAmount from './BetAmount';
import VolumeControl from './VolumeControl';
import type { SelectedChip } from '../../App';

export interface BetSidebarProps {
  selectedChip: SelectedChip;
  setSelectedChip: (chip: SelectedChip) => void;
}

const BetSidebar = ({ selectedChip, setSelectedChip }: BetSidebarProps) => {
  return (
    <aside className="w-[340px] bg-[#14213d] rounded-2xl p-6 flex flex-col justify-between min-h-screen shadow-lg">
      {/* Tabs */}
      <div>
        <Tabs />

        {/* Bet Presets */}
        <div className="mb-4">
          <div className="text-xs font-bold text-blue-200 mb-1 tracking-wider">
            BET PRESETS
          </div>
          <select
            className="w-full bg-[#1a2540] text-blue-200 rounded px-3 py-2 text-sm outline-none cursor-not-allowed"
            disabled
          >
            <option>No Presets</option>
          </select>
        </div>

        {/* Pick Chip Size */}
        <div className="mb-4">
          <div className="text-xs font-bold text-blue-200 mb-2 tracking-wider">
            PICK CHIP SIZE
          </div>
          <ChipSelector
            selectedChip={selectedChip}
            setSelectedChip={setSelectedChip}
          />
        </div>

        {/* Bet Amount */}
        <BetAmount amount="238.68K" currency="RS3" />
      </div>

      <VolumeControl />
    </aside>
  );
};

export default BetSidebar;
