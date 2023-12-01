import React from "react";
import styles from "./gallery.module.css";
import rectangle18 from "/galleryimages/Rectangle18.png";
import rectangle21 from "/galleryimages/Rectangle21.png";
import rectangle23 from "/galleryimages/Rectangle23.png";
import rectangle27 from "/galleryimages/Rectangle27.png";
import rectangle19 from "/galleryimages/Rectangle19.png";
import rectangle25 from "/galleryimages/Rectangle25.png";
import rectangle29 from "/galleryimages/Rectangle29.png";
import rectangle26 from "/galleryimages/Rectangle26.png";
import rectangle20 from "/galleryimages/Rectangle20.png";
import rectangle30 from "/galleryimages/Rectangle30.png";
import rectangle31 from "/galleryimages/Rectangle31.png";
import rectangle24 from "/galleryimages/Rectangle24.png";
import rectangle22 from "/galleryimages/Rectangle22.png";

const Gallery = () => {
  return (
    <section className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.row}>
          <img
            src={rectangle18}
            alt=""
            style={{ width: "19%", height: "100%" }}
          />
          <img
            src={rectangle21}
            alt=""
            style={{ width: "15%", height: "100%" }}
          />
          <img
            src={rectangle23}
            alt=""
            style={{ width: "35%", height: "100%" }}
          />
          <img
            src={rectangle27}
            alt=""
            style={{ width: "28%", height: "100%" }}
          />
        </div>
        <div className={styles.row}>
          <img
            src={rectangle19}
            alt=""
            style={{ width: "36%", height: "100%" }}
          />
          <img
            src={rectangle25}
            alt=""
            style={{ width: "20%", height: "100%" }}
          />
          <img
            src={rectangle26}
            alt=""
            style={{ width: "20%", height: "100%" }}
          />
          <img
            src={rectangle29}
            alt=""
            style={{ width: "21%", height: "100%" }}
          />
        </div>
        <div className={styles.row}>
          <img
            src={rectangle20}
            alt=""
            style={{ width: "18%", height: "100%" }}
          />
          <img
            src={rectangle22}
            alt=""
            style={{ width: "17%", height: "100%" }}
          />
          <img
            src={rectangle24}
            alt=""
            style={{ width: "36%", height: "100%" }}
          />
          <img
            src={rectangle30}
            alt=""
            style={{ width: "11%", height: "100%" }}
          />
          <img
            src={rectangle31}
            alt=""
            style={{ width: "14%", height: "100%" }}
          />
        </div>
        <div className={styles.shade}></div>
        <div className={styles.centerContent}>
          <h1 className={styles.Heading}>
            <span>See Our Gallery</span>
            <br />
            Specialized Photos & Videos We Have
          </h1>
          <p className={styles.textContent}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem.
          </p>
          <button className={styles.visitBtn}>Visit Gallery</button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
