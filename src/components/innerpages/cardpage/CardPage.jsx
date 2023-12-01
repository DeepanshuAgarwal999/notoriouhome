import React from "react";
import styles from "./cardpage.module.css";
import Card from "./Card";
const CardPage = () => {
  const cardData = [
    {
      bgImg: "/images/Maskgroup.png",
      dateColor: "#E4AC4C",
      borderColor: "#e4ac4c",
      date: "29 oct, 2023",
      title: "Neque porro quisquam est qui dolorem",
      text: "",
    },
    {
      bgImg: "",
      dateColor: "",
      borderColor: "#383838",
      date: "29 oct, 2023",
      title: "Neque porro quisquam est qui dolorem",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.",
    },
    {
      bgImg: "",
      dateColor: "",
      borderColor: "#383838",
      date: "29 oct, 2023",
      title: "Neque porro quisquam est qui dolorem",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.",
    },
    {
      bgImg: "",
      dateColor: "",
      borderColor: "#383838",
      date: "29 oct, 2023",
      title: "Neque porro quisquam est qui dolorem",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.",
    },
    {
      bgImg: "",
      dateColor: "",
      borderColor: "#383838",
      date: "29 oct, 2023",
      title: "Neque porro quisquam est qui dolorem",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.",
    },
    {
      bgImg: "",
      dateColor: "",
      borderColor: "#383838",
      date: "29 oct, 2023",
      title: "Neque porro quisquam est qui dolorem",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.",
    },
    {
      bgImg: "",
      dateColor: "",
      borderColor: "#383838",
      date: "29 oct, 2023",
      title: "Neque porro quisquam est qui dolorem",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.",
    },
    {
      bgImg: "",
      dateColor: "",
      borderColor: "#383838",
      date: "29 oct, 2023",
      title: "Neque porro quisquam est qui dolorem",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.",
    },
    {
      bgImg: "",
      dateColor: "",
      borderColor: "#383838",
      date: "29 oct, 2023",
      title: "Neque porro quisquam est qui dolorem",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.",
    },
  ];
  return (
    <section className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.Heading}>
          <h1>
            Organized <span>Events</span> By Notorious
          </h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem.
          </p>
        </div>
        <div className={styles.cardSection}>
          {cardData.map((item, index) => (
            <Card
              key={index}
              bgImg={item.bgImg}
              dateColor={item.dateColor}
              borderColor={item.borderColor}
              date={item.date}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardPage;
