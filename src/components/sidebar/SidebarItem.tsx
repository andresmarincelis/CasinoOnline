interface SidebarItemProps {
  icon: React.ReactNode;
  label: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
}
const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  selected,
  onClick,
}) => (
  <div
    onClick={onClick}
    className="flex items-center gap-3 text-blue-100 font-semibold text-base cursor-pointer hover:text-white transition"
  >
    <span className={`text-lg ${selected && 'text-purple-400'}`}>{icon}</span>
    <span>{label}</span>
  </div>
);

export default SidebarItem;
