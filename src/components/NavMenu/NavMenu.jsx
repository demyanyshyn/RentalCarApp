import { NavLink } from "react-router-dom";
import s from "./NavMenu.module.css";
import clsx from "clsx";

const NavMenu = () => {
  return (
    <nav>
      <ul className={s.menuList}>
        <li className={s.menuItem}>
          <NavLink
            className={({ isActive }) => clsx(s.link, isActive && s.active)}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className={s.menuItem}>
          <NavLink
            className={({ isActive }) => clsx(s.link, isActive && s.active)}
            to="/catalog"
          >
            Catalog
          </NavLink>
        </li>
        <li className={s.menuItem}>
          <NavLink
            className={({ isActive }) => clsx(s.link, isActive && s.active)}
            to="/favorites"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
