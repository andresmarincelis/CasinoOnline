import { useState } from 'react';

interface TabsProps {
  onTabChange?: (tab: 'Manual' | 'Auto') => void;
}

const Tabs = ({ onTabChange }: TabsProps) => {
  const [active, setActive] = useState<'Manual' | 'Auto'>('Manual');

  const handleTabClick = (tab: 'Manual' | 'Auto') => {
    setActive(tab);
    onTabChange?.(tab);
  };

  return (
    <div className="flex mb-6">
      <button
        className={`flex-1 py-2 rounded-lg font-bold border-2 shadow-inner transition
          ${
            active === 'Manual'
              ? 'bg-[#14213d] text-white border-blue-400'
              : 'bg-[#22325c] text-blue-200 border-transparent'
          }`}
        onClick={() => handleTabClick('Manual')}
        type="button"
      >
        Manual
      </button>
      <button
        className={`flex-1 py-2 rounded-lg font-bold ml-2 transition
          ${
            active === 'Auto'
              ? 'bg-[#14213d] text-white border-blue-400 border-2 shadow-inner'
              : 'bg-[#22325c] text-blue-200 border-transparent'
          }`}
        onClick={() => handleTabClick('Auto')}
        type="button"
      >
        Auto
      </button>
    </div>
  );
};

export default Tabs;
