import clsx from "clsx";
import s from "./Logo.module.css";

const Logo = () => {
  return (
    <div>
      <span className={s.logo}>Rental</span>
      <span className={clsx(s.logo, s.logoAccent)}>Car</span>
    </div>
  );
};

export default Logo;
