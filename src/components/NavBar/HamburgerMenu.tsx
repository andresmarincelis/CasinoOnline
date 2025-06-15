import React from 'react';
import { FaBars } from 'react-icons/fa';

interface HamburgerMenuProps {
  onClick?: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onClick }) => (
  <button
    className="flex items-center justify-center p-2 text-white hover:bg-blue-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    onClick={onClick}
    aria-label="Open menu"
    type="button"
  >
    <FaBars size={24} />
  </button>
);

export default HamburgerMenu;
