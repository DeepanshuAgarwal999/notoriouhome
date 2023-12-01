import React from "react";
import styles from "./banner.module.css";

const Banner = ({ objectfit, bgImg }) => {
  console.log(objectfit);
  return (
    <section className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.textBox}>
          <div className={styles.logo}>
            <img src="/bannerImages/Vector.png" alt="" />
          </div>
          <div className={styles.aboutText}>
            <h1 className={styles.aboutLeftText}>
              <span>About</span> Notorious
            </h1>
            <p className={styles.aboutLeftContent}>
              'Notorious' isn't just a Rooftop Resto Bar and speakeasy; it's a
              journey through time and design.
            </p>
            <div className={styles.aboutBtn}>
              <button className={styles.menuBtn}>Reservation</button>
              <button className={styles.menuBtn}>Connect</button>
            </div>
          </div>
        </div>
        {/* <div className={styles.rightSection}>
          <img
            src="/bannerImages/notorious.png"
            alt=""
            style={{ width: "100%", height: "100vh"}}
          />
        </div> */}
        <div
          // className={styles.bgImage}
          style={{
            // objectFit: { objectfit },
            backgroundImage: `url(${bgImg})`,
            height: "100%",
            backgroundRepeat:"no-repeat",
            backgroundPosition: "right",
            backgroundSize: `${objectfit}` ,
            width: "60%",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Banner;
