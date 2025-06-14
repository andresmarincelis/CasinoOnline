import React, { type ReactNode } from 'react';
import BetSidebar from './BetSidebar';
import type { SelectedChip } from '../../App';

interface WithSidebarLayoutProps {
  children: ReactNode;
  selectedChip: SelectedChip;
  setSelectedChip: (chip: SelectedChip) => void;
}

const WithSidebarLayout: React.FC<WithSidebarLayoutProps> = ({
  children,
  selectedChip,
  setSelectedChip,
}: WithSidebarLayoutProps) => (
  <div className="flex min-h-screen max-h-screen bg-[#1a2540]">
    <BetSidebar selectedChip={selectedChip} setSelectedChip={setSelectedChip} />
    <div className="flex-1 flex justify-center items-start">{children}</div>
  </div>
);

export default WithSidebarLayout;
