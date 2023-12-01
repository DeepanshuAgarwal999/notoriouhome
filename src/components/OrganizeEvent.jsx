import React from "react";
import styles from "./organizeEvent.module.css";
import maskgroup from "/images/Maskgroup.png";
import scrollimg1 from "/images/scrollimg1.png";
import scrollimg2 from "/images/scrollimg2.png";
import rectangle18 from "/galleryimages/Rectangle18.png";
import rectangle24 from "/galleryimages/Rectangle24.png";
const OrganizeEvent = () => {
  return (
    <section className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.Heading}>
          <h1>Organized Events</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem.
          </p>
        </div>
        <main className={styles.container}>
          <div className={styles.leftContainer}>
            <img src={maskgroup} alt="" />
            <div>
              <h2>29 Oct, 2023</h2>
              <h3>Neque porro quisquam est qui dolorem</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem.
              </p>
              <a href="">Read More....</a>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className={styles.card}>
                <div className={styles.imgContainer}>
                  <img src={scrollimg1} alt="" />
                </div>
                <h2>29 Oct, 2023</h2>
                <h3>Neque porro quisquam est qui dolorem</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem. lorem100
                </p>
                <a href="">Read More....</a>
              </div>
              <div className={styles.card}>
                <div className={styles.imgContainer}>
                  <img src={scrollimg2} alt="" />
                </div>
                <h2>29 Oct, 2023</h2>
                <h3>Neque porro quisquam est qui dolorem</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem. lorem100
                </p>
                <a href="">Read More....</a>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "40px",
              }}
            >
              <div className={styles.card}>
                <div className={styles.imgContainer}>
                  <img src={rectangle24} alt="" />
                </div>
                <h2>29 Oct, 2023</h2>
                <h3>Neque porro quisquam est qui dolorem</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem. lorem100
                </p>
                <a href="">Read More....</a>
              </div>
              <div className={styles.card}>
                <div className={styles.imgContainer}>
                  <img src={rectangle18} alt="" />
                </div>
                <h2>29 Oct, 2023</h2>
                <h3>Neque porro quisquam est qui dolorem</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem. lorem100
                </p>
                <a href="">Read More....</a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default OrganizeEvent;
