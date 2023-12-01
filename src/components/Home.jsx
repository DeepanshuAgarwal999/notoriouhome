import React from "react";
import styles from "./home.module.css";
import heroLogo from "/images/heroLogo.svg";
import aboutimg from "/images/aboutimg.svg";  
import outline from "/images/outline.png";
import nlogo from "/images/nlogo.svg";
const Home = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.heroShade}>
          <div className={styles.heroHeading}>
            <img src={heroLogo} alt="" />
            <p className={styles.heroText}>
              'Notorious' isn't just a Rooftop RestoBar and speakeasy; it's a
              journey through time and design.
            </p>
          </div>
          <div className={styles.heroHeadingBtn}>
            <button className={styles.resBtn}>Reservation</button>
            <button>Connect</button>
          </div>
        </div>
      </div>
      {/* about Nutorious */}
      <section className={styles.aboutSection}>
        <img src={nlogo} alt="" className={styles.nLogo} />
        <div className={styles.aboutLeft}>
          <div className={styles.aboutLeftShade}>
          </div>
            <img src={outline} alt="" className={styles.outline} />
            <div className={styles.aboutText}>
              <h1 className={styles.aboutLeftText}>
                <span>About</span> Notorious
              </h1>
              <p className={styles.aboutLeftContent}>
                Notorious' is a dazzling architectural and interior design
                masterpiece that graces the vibrant city of Jalandhar. This
                Rooftop RestoBar and speakeasy is a testament to the fusion of
                botanical aesthetics, pastel elegance, and timeless
                craftsmanship.
              </p>
              <div className={styles.aboutBtn}>
                <button className={styles.menuBtn}>Read More</button>
              </div>
            </div>
        </div>
        <div className={styles.aboutRight}>
          {/* <img src={aboutimg} alt="" /> */}
          <div className={styles.aboutRightInside}>
            <div className={styles.aboutShade}></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
