import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import styles from "./navbar.module.css";
import { Container } from "@mui/material";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search placeholder={"Seach An album or song of your choice"} />
      <Button children={"Give Feedback"} />
    </nav>
  );
};

export default Navbar;
