import React from 'react';
import { FaFeatherAlt } from 'react-icons/fa';

const Logo: React.FC = () => (
  <div className="flex items-center space-x-2">
    <span className="text-yellow-400 text-2xl">
      <FaFeatherAlt />
    </span>
    <span className="text-white font-extrabold text-xl tracking-wide">
      RUNECHAT
    </span>
  </div>
);

export default Logo;
