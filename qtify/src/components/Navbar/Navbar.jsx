import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search />
      <Button children={"Give Feedback"} />
    </nav>
  );
};

export default Navbar;
