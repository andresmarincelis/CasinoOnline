import { useState } from 'react';

const VolumeControl = () => {
  const [volume, setVolume] = useState(50);

  return (
    <div className="flex items-center mt-8">
      <span className="text-white mr-2 text-lg">🔈</span>
      <input
        type="range"
        min={0}
        max={100}
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
        className="w-full accent-blue-500"
        aria-label="Volume"
      />
    </div>
  );
};

export default VolumeControl;
