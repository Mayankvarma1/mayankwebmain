import React from "react";
import styles from "./styles.module.css";

function AboutMe() {
  return (
    <>
      <section id="aboutMe" className={styles.main}>
        <img src="/images/mayank.png" className={styles.image_Styles} />
        <div className={styles.introduction}>
          <div class={styles.container}>
            <p className={styles.greetings}>Hello 👋 !! I'm</p>
            <div class={styles.animation}>
              <div class={styles.first}>
                <div>Mayank Varma.</div>
              </div>
              <div class={styles.second}>
                <div>a Web Developer.</div>
              </div>
              <div class={styles.third}>
                <div>a Musician.</div>
              </div>
              <div class={styles.forth}>
                <div>a Gamer.</div>
              </div>
            </div>
          </div>
          <div className={styles.element}>
              <div className={styles.image_box}>
                <div className={styles.right_image_box}>
            <span className={styles.description}>
                  UI/UX Developer with 1 year and 3 months of experience
                  creating streamlined and intuitive controls through
                  programming and design. Talented at creating graphics for
                  websites and user interfaces using ReactJS, HTML, Material UI,
                  AntD, Tailwind, JavaScript and CSS. Consistently employed
                  understanding of user psychology throughout design process.
            </span>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
