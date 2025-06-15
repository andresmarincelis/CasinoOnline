import { type ReactNode } from 'react';
import BetSidebar from './BetSidebar';

const WithSidebarLayout = ({ children }: { children: ReactNode }) => (
  <div className="flex bg-[#1a2540]" style={{ height: 'calc(100vh - 80px)' }}>
    <BetSidebar />
    <div className="flex-1 flex justify-center items-start">{children}</div>
  </div>
);

export default WithSidebarLayout;
