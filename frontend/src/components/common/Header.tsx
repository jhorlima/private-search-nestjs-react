import { DrawerToggler } from "@components/common/Drawer";
import { MenuIcon } from "@components/common/Icons/MenuIcon";
import { Link } from "@tanstack/react-router";

export const Header = () => {
  return (
    <header className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Private Search
        </Link>
      </div>
      <div className="flex-none lg:invisible">
        <DrawerToggler className="btn btn-square btn-ghost">
          <MenuIcon />
        </DrawerToggler>
      </div>
    </header>
  );
};
