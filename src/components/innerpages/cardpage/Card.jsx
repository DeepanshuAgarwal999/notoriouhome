import React from "react";
import styles from "./card.module.css";
const Card = ({ bgImg, dateColor, borderColor, date, title, text }) => {
  const divStyle = bgImg
    ? {
        backgroundImage: `url(${bgImg})`,
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }
    : {
        backgroundColor: "transparent",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
      };

  return (
    <div className={styles.Container} style={{ borderColor: borderColor }}>
      <div style={divStyle}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "93%",
            paddingTop: "20px",
          }}
        >
          <h2 className={`${styles.dateHeading}`} style={{ color: dateColor }}>
            {date}
          </h2>
          <div className={styles.text}>
            <h2>{title}</h2>
            <p>{text}</p>
            <a href="#" className={styles.readMore}>
              Read More...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
