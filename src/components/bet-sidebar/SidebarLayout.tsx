import { type ReactNode } from 'react';
import BetSidebar from './BetSidebar';

const WithSidebarLayout = ({ children }: { children: ReactNode }) => (
  <div className="flex min-h-screen max-h-screen bg-[#1a2540]">
    <BetSidebar />
    <div className="flex-1 flex justify-center items-start">{children}</div>
  </div>
);

export default WithSidebarLayout;
