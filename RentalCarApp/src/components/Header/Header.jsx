import clsx from "clsx";
import Logo from "../Logo/Logo";
import s from "./Header.module.css";

const Header = ({ childrens }) => {
  return (
    <>
      <header>
        <div className={clsx("container", s.headerContainer)}>
          <Logo />
        </div>
      </header>
      <main>{childrens}</main>
    </>
  );
};

export default Header;
