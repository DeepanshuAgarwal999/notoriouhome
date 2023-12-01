import React from "react";
import styles from "./footer.module.css";
import fb from "/images/Facebook.svg";
import insta from "/images/insta.svg";
import twitter from "/images/twitter.svg";
import logo from "/images/Logo.svg";
import phone from "/images/phone.png";
import location from "/images/location.png";
import email from "/images/email.png";
import clock from "/images/clock.png";
const Footer = () => {
  return (
    <footer className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <main className={styles.footerItems}>
          <div className={styles.footerIcons}>
            <a href="#">
              <img src={fb} alt="" className={styles.fb} />
            </a>
            <a href="#">
              <img src={insta} alt="" className={styles.insta} />
            </a>
            <a href="#">
              <img src={twitter} alt="" className={styles.twitter} />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={logo} className={styles.centerLogo} alt="" />
            </a>
          </div>
          <div className={styles.getDirection}>
            <img src={location} alt="location" />
            <a href="#">Get Direction</a>
          </div>
        </main>
        <div className={styles.footerCenterItems}>
          <div className={styles.footerCenterFirst}>
            <p className={styles.address}>
              <img
                src={location}
                width={18}
                height={18}
                alt=""
                className={styles.icon}
              />
              &nbsp;5th floor, One Park Side, 334 Lajpat Nagar, Jalandhar
            </p>
            <p>
              <img src={phone} width={14} height={14} alt="" />
              &nbsp; <a href="">+91 8734-000008</a>
            </p>
            <p>
              <img src={email} width={14} height={12} alt="" />
              &nbsp; <a href="#">info@notoious.co</a>
            </p>
          </div>
          <div className={styles.footerCenterSecond}>
            <span className={styles.address}>
              <img
                src={clock}
                width={18}
                height={18}
                alt=""
                className={styles.icon}
              />
              &nbsp;
              <span>
                Opening Hours, Monday - Friday ( 10:00 AM - 09:00 PM ),
              </span>
            </span>
            <span>&nbsp;Saturday - Sunday ( 10:00 AM - 00:00 PM )</span>
          </div>
        </div>
        <div className={styles.footerEnding}>
          <p className={styles.endItems}>
            <span>&copy; 2023 All Right Reserved</span>
            <span> | </span>
            <span>The Notorious</span>
            <span> | </span>
            <span>Privacy Policy</span>
            <span> | </span>
            <span>Terms & Conditions</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
