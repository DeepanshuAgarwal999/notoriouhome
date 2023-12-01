import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import logo from "/images/Logo.svg";
const navItems = [
  {
    name: "home",
    url: "/",
  },
  {
    name: "story",
    url: "/",
  },
  {
    name: "menu",
    url: "/",
  },
  {
    name: "gallery",
    url: "/",
  },
  {
    name: "events",
    url: "/",
  },
  {
    name: "reservation",
    url: "/",
  },
  {
    name: "contact us",
    url: "/",
  },
];
const Navbar = ({ state, changeState }) => {
  return (
    <header
      className={`${styles.outerContainerNav} ${
        state === true ? styles.showNav : styles.hideNav
      }`}
    >
      <div className={styles.innerContainer}>
        <a href="#">
          <img src={logo} alt="Notorious" className={styles.logo} />
        </a>
        <div className={styles.headerBtn}>
          <button className={styles.resBtn}>Reservation</button>
          <button className={styles.navbarCloseBtn} onClick={changeState}>
            X
          </button>
        </div>
      </div>
      {/* nav */}
      <nav className={styles.navContainer}>
        <div className={styles.navLinks}>
          {navItems?.map((item) => (
            <a href={item.url} key={item.name}>
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
