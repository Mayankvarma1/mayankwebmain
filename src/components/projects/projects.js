import React from "react";
import styles from "./styles.module.css";

function Projects() {
  return (
    <section id="projects">
      <div className={styles.heading_name}>Projects</div>
      <div className={styles.projects}>
        <ul className={styles.cards}>
          <li className={styles.cardBody}>
            <div className={styles.card}>
              <img
                src="/images/shopify.png"
                className={styles.card__image}
                alt=""
              />
              <div className={styles.card__overlay}>
                <div className={styles.card__header}>
                  <svg className={styles.card__arc} />
                  <img
                    className={styles.card__thumb}
                    src="/images/shopify.svg"
                    alt=""
                  />
                  <div className={styles.card__header_text}>
                    <h3 className={styles.card__title}>Shopify Projects</h3>
                    <span className={styles.card__status}>
                      Experience : 1 year 3 months
                    </span>
                  </div>
                </div>
                <p className={styles.card__description}>
                  Worked for UNA brands as a front end developer, handling
                  various clients for them, including Heavenluxe, Juju, Hendeer
                  etc.
                </p>
              </div>
            </div>
          </li>
          <li className={styles.cardBody}>
            <div className={styles.card}>
              <svg className={styles.card__arc} />
              <img
                src="/images/react.png"
                className={styles.card__image}
                alt=""
              />
              <div className={styles.card__overlay}>
                <div className={styles.card__header}>
                  <svg className={styles.card__arc}>
                    <path />
                  </svg>
                  <img
                    className={styles.card__thumb}
                    src="/images/react.svg"
                    alt=""
                  />
                  <div className={styles.card__header_text}>
                    <h3 className={styles.card__title}>React Projects</h3>
                    <span className={styles.card__status}>
                      Experience : 1 year
                    </span>
                  </div>
                </div>
                <p className={styles.card__description}>
                  Worked with the Front End Team at UNA Brands on many react
                  project, understood the underlying concepts of React, and
                  still learning.
                </p>
              </div>
            </div>
          </li>
          <li className={styles.cardBody}>
            <div className={styles.card}>
              <img
                src="/images/hcj.png"
                className={styles.card__image}
                alt=""
              />
              <div className={styles.card__overlay}>
                <div className={styles.card__header}>
                  <svg className={styles.card__arc} />
                  <img
                    className={styles.card__thumb}
                    src="/images/hcj.svg"
                    alt=""
                  />
                  <div className={styles.card__header_text}>
                    <h3 className={styles.card__title}>HTML, JS and CSS</h3>
                    <span className={styles.card__status}>Experience : 1 year 3 months</span>
                  </div>
                </div>
                <p className={styles.card__description}>
                  Have had a keen interest in website development from the start, so have worked on the UI/UX for more than a year in IT industry, and have a cumulative experience of 3 yeas.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
