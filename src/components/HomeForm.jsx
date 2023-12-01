import React from "react";
import styles from "./home_form.module.css";
import rectangle from "/images/rectangle.png";
const HomeForm = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.heroShade}>
          <div className={styles.rectangleOutline}>
            <img src={rectangle} alt="" />
          </div>
          <div className={styles.HomeFormText}>
            <p>Notorious brings you a mysterious experience.</p>
            <p> Visit us to know more</p>
            <p>We look forward to hosting you</p>
            <form action="" className={styles.HomeFormInput} autoComplete="off">
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                className={styles.HomeFormInputField}
                // value=""
              />
              <button className={styles.HomeFormBtn}>SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeForm;
