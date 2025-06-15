import React, { useRef, useState, useEffect } from 'react';
import UserMenuButton from './UserMenuButton';
import UserMenuDropdown from './UserMenuDropdown';

interface UserDropdownMenuProps {
  username: string;
  progress?: number;
  onSignOut?: () => void;
}

const UserDropdownMenu: React.FC<UserDropdownMenuProps> = ({
  username,
  progress = 70,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Cerrar el menú al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <UserMenuButton
        username={username}
        progress={progress}
        onClick={() => setOpen((v) => !v)}
      />
      <UserMenuDropdown open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default UserDropdownMenu;
