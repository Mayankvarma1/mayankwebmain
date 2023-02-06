import React from "react";
import styles from "./styles.module.css";

function Footer() {
  return (
    <>
      <footer>
        <ul className={styles.socials}>
          <li>
            <a href="https://www.facebook.com/1imitl3ss">
              <i class="fa fa-facebook"></i>
            </a>
          </li>

          <li>
            <a href="mailto:mozart.ver009@gmail.com">
              <i class="fa fa-google-plus"></i>
            </a>
          </li>

          <li>
            <a href="https://www.youtube.com/@LimitlessMusic">
              <i class="fa fa-youtube"></i>
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/mayank-varma-16770715b">
              <i class="fa fa-linkedin-square"></i>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
