import React from "react";
import styles from "./ourmenu.module.css";
import img1 from "/images/img1.png";
import img2 from "/images/img2.png";
import img3 from "/images/img3.png";
const OurMenu = () => {
  return (
    <section className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.leftSection}>
          <div className={styles.shade}>
            <div style={{position:"relative"}}>
              <img src={img1} alt="" className={styles.leftImg1} />
              <button className={styles.menuBtn}>View Menu</button>
            </div>
            <div>
              <img src={img2} alt="" className={styles.leftImg1} />
            </div>
            <div>
              <img src={img3} alt="" className={styles.leftImg1} />
            </div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.Heading}>
            <h4 className={styles.Heading1}>Our Menus</h4>
            <h4>Specialized</h4>
            <h4>We Have</h4>
          </div>
          <div className={styles.textContent}>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMenu;
