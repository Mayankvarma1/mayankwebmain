import React, { useState } from "react";
import styles from "./styles.module.css";

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.name}>Mayank Varma</div>
            <div className={styles.icon}>
              <button onClick={() => setToggle(!toggle)}>
                <i class="fa fa-bars" aria-hidden="true" />
              </button>
            </div>
          </div>
          <ul className={styles.headerRightDesk}>
            <a href="#" style={{ border: "none" }}>
              <li>About Me</li>
            </a>
            <a href="#projects" style={{ border: "none" }}>
              <li>Projects</li>
            </a>
            <div class={styles.dropdown}>
              <li class={styles.dropbtn}>Socials</li>
              <div class={styles.dropdown_content}>
                <a href="https://www.linkedin.com/in/mayank-varma-16770715b/">
                  LinkedIn
                </a>
                <a href="https://www.instagram.com/1imitl3ss">Instagram</a>
                <a href="https://www.youtube.com/@LimitlessMusic">YouTube</a>
              </div>
            </div>
            <a
              href="/assets/MayankVarmaResume.pdf"
              download="MayankVarmaResume"
              target="_blank"
            >
              <li>Download CV</li>
            </a>
          </ul>
          {toggle && (
            <ul className={styles.headerRightMob}>
              <a href="#" style={{ border: "none" }}>
                <li>About Me</li>
              </a>
              <a href="#projects" style={{ border: "none" }}>
                <li>Projects</li>
              </a>
              <div class={styles.dropdown}>
                <li class={styles.dropbtn}>Socials</li>
                <div class={styles.dropdown_content}>
                  <a href="https://www.linkedin.com/in/mayank-varma-16770715b/">
                    LinkedIn
                  </a>
                  <a href="https://www.instagram.com/1imitl3ss">Instagram</a>
                  <a href="https://www.youtube.com/@LimitlessMusic">YouTube</a>
                </div>
              </div>
              <a
                href="/assets/MayankVarmaResume.pdf"
                download="MayankVarmaResume"
                target="_blank"
              >
                <li>Download CV</li>
              </a>
            </ul>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
