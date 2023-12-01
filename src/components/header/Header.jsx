import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import logo from "/images/Logo.svg";
import hamburger from "/images/hamburger.svg";
import Navbar from "./Navbar";

const Header = () => {
  const [state, setState] = useState(false);

  const boxStyleTop = {
    //  transform: `translateY(${translateY}%)`,
    transition: "transform 3s",
  };
  const changeState = () => {
    setState((prev) => !prev);
  };
  return (
    <div>
      <header className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <a href="#">
            <img src={logo} alt="Notorious" className={styles.logo} />
          </a>
          <div className={styles.headerBtn}>
            <button className={styles.resBtn}>Reservation</button>
            <button className={styles.hamburgerBtn} onClick={changeState}>
              <img src={hamburger} alt="menu" />
            </button>
          </div>
        </div>
      </header>
      <Navbar state={state} changeState={changeState} />
    </div>
  );
};

export default Header;
