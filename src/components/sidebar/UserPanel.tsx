import React from 'react';
import UserSidebarMenu from './UserSidebarMenu';
import { FaChevronRight } from 'react-icons/fa';

interface UserPanelProps {
  isOpen: boolean;
  onClose: () => void;
  username: string;
  progress?: number;
}

const UserPanel: React.FC<UserPanelProps> = ({
  isOpen,
  onClose,
  username,
  progress,
}) => {
  return (
    <aside
      className={`fixed top-0 right-0 h-full w-80 bg-[#23304d] z-50 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      {/* Botón de cerrar */}
      <div className="flex justify-end p-4">
        <button
          onClick={onClose}
          className="text-blue-200 hover:text-yellow-400 focus:outline-none"
          aria-label="Cerrar panel de usuario"
        >
          <FaChevronRight size={22} />
        </button>
      </div>
      <UserSidebarMenu username={username} progress={progress} />
    </aside>
  );
};

export default UserPanel;
