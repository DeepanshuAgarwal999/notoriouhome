import React from "react";
import styles from "./contactus.module.css";
const ContactUs = () => {
  return (
    <section className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.Heading}>
          <p>If You have An Query. Please feel free to</p>
          <h1>connect With Us.</h1>
        </div>
        <main
          style={{
            padding: "10px 0px",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          {/* left portion */}
          <div
            className={styles.flexRow}
            style={{ width: "45%", marginLeft: "-100px" }}
          >
            <div>
              <h1 className={styles.contactInfo}>Contact Info</h1>
            </div>
            <div style={{ paddingBottom: "25px" }}>
              <div className={styles.flexCol}>
                <div
                  style={{
                    gap: "20px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <>
                    <p className={styles.itemHeading}>Contact Number</p>
                    <div className={styles.flexRow}>
                      <img
                        src={"/contactusIcons/whatsapp.png"}
                        alt=""
                        width={20}
                      />
                      <p style={{ lineHeight: "23px" }}>+91 8734-000008</p>
                    </div>
                  </>
                  <>
                    <p className={styles.itemHeading}>Email Address</p>
                    <div className={styles.flexRow}>
                      <img
                        src={"/contactusIcons/email.png"}
                        alt=""
                        width={20}
                      />
                      <p style={{ lineHeight: "23px" }}>
                        supportnotorious.jtown@gmail.com
                      </p>
                    </div>
                  </>{" "}
                  <>
                    <p className={styles.itemHeading}>Office Address</p>
                    <div className={styles.flexRow}>
                      <img
                        src="/contactusIcons/location.png"
                        alt=""
                        width={20}
                        style={{ alignSelf: "flex-start" }}
                      />
                      <p style={{ lineHeight: "23px" }}>
                        5th floor, One Park Side, 334 Lajpat Nagar, Jalandhar,
                        122017
                      </p>
                    </div>
                  </>
                </div>
              </div>
              <p className={styles.itemHeading}>Follow Us On</p>
              <div
                className={styles.flexRow}
                style={{ gap: "30px", marginTop: "20px" }}
              >
                <img src={"/contactusIcons/facebook-app-symbol.png"} alt="" />
                <img src={"/contactusIcons/instagram.png"} alt="" />
                <img src={"/contactusIcons/twitter.png"} alt="" />
                <img src={"/contactusIcons/linkedin.png"} alt="" />
                <img src={"/contactusIcons/youtube.png"} alt="" />
              </div>
            </div>
          </div>

          {/* right portion */}
          <div style={{ width: "55%", paddingRight: "3vw" }}>
            <form action="" className={styles.form}>
              <h1 className={styles.formHeading}>Contact Form</h1>
              <div className={styles.flexRow} style={{ gap: "20px" }}>
                <div className={styles.inputField}>
                  <input type="text" placeholder="Full Name" />
                </div>
                <div className={styles.inputField}>
                  <input type="text" placeholder="Mobile Number" />
                </div>
              </div>
              <div className={styles.inputField}>
                <input type="text" placeholder="Email Address" />
              </div>
              <div>
                <select id="dropdown" className={styles.customArrow}>
                  <option value="option1">Select Inquiry Reason</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              <textarea
                name=""
                id=""
                placeholder="Type Your Message Here (If Any)..."
                className={styles.textField}
              ></textarea>
              <button className={styles.submitBtn}>Submit</button>
            </form>
          </div>
        </main>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28015.221528783575!2d77.35542945!3d28.632678400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1701625560300!5m2!1sen!2sin"
          width="100%"
          height="400px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
