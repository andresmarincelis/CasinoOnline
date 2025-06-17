import HamburgerMenu from './HamburgerMenu';
import Logo from './Logo';
import UserDropdownMenu from './user/UserDropdownMenu';
import BalanceDropdown from './BalanceDropdown';
import CashierButton from './CashierButton';

const NavBar = ({
  setShowSidebar,
}: {
  setShowSidebar: (show: boolean) => void;
}) => {
  const username = 'xxmb';

  return (
    <>
      <nav className="fixed top-0 w-full h-20 bg-blue-950 z-10 flex items-center justify-between px-4">
        {/* Izquierda: Menú hamburguesa y logo */}
        <div className="flex items-center space-x-3">
          <HamburgerMenu onClick={() => setShowSidebar(true)} />
          <div className="flex flex-col">
            <Logo />
          </div>
        </div>
        {/* Derecha: BalanceDropdown, CashierButton, UserDropdownMenu */}
        <div className="flex items-center space-x-3">
          <BalanceDropdown />
          <CashierButton />
          <UserDropdownMenu username={username} progress={70} />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
