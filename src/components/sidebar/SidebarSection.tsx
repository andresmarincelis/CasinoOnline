interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}
const SidebarSection: React.FC<SidebarSectionProps> = ({ title, children }) => (
  <div className="bg-[#1a2540] rounded-xl mb-4 p-4">
    <div className="text-blue-200 font-bold text-xs mb-3 tracking-wider">
      {title}
    </div>
    <div className="flex flex-col gap-2">{children}</div>
  </div>
);

export default SidebarSection;
