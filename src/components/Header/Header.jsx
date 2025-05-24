import clsx from "clsx";
import Logo from "../Logo/Logo";
import NavMenu from "../NavMenu/NavMenu";
import s from "./Header.module.css";

const Header = ({ children }) => {
  return (
    <>
      <header>
        <div className={clsx("container", s.headerContainer)}>
          <Logo />
          <NavMenu />
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Header;
