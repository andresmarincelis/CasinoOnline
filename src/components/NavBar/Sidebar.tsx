import React from 'react';
import { FaTimes } from 'react-icons/fa';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-blue-900 shadow-lg z-40 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className="flex items-center justify-between px-4 py-4 border-b border-blue-800">
        <span className="text-white font-bold text-lg">MENU</span>
        <button
          onClick={onClose}
          className="text-white hover:text-yellow-400 focus:outline-none"
          aria-label="Cerrar menú"
        >
          <FaTimes size={22} />
        </button>
      </div>
      {/* Aquí puedes agregar el contenido del sidebar */}
      <div className="p-4 text-white">
        {/* Ejemplo de secciones */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search for games..."
            className="w-full px-3 py-2 rounded bg-blue-800 text-white placeholder-gray-400 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <button className="w-full mb-2 py-2 rounded bg-purple-600 hover:bg-purple-700 font-semibold">
            Casino
          </button>
          <button className="w-full py-2 rounded bg-blue-700 hover:bg-blue-800 font-semibold">
            Sports
          </button>
        </div>
        {/* Puedes seguir agregando más secciones aquí */}
      </div>
    </aside>
  );
};

export default Sidebar;
