import { Outlet } from 'react-router';
import NavBar from '../components/navbar/NavBar';

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <div style={{ height: 'calc(100vh - 80px)' }} className="w-full mt-20">
        <Outlet />
      </div>
    </>
  );
}
