import React from 'react';
import styles from '../styles.module.css';

const PerksBanner = (props) => (
  <div className={styles.perks__container}>
    <div className={styles.perksBox__0}>
      <h3 className={styles.perksBox__0__inner}>{props.product.short_headers[0]}</h3>
    </div>

    <div className={styles.perksBox__topics}>
    <div className={styles.perksBox}>
    <div className={styles.perksBox__header}>{props.product.short_headers[1]}</div>
    <div className={styles.perksBox__caption}>{props.product.captions[0]}</div>
    <a className={styles.perksBox__learn_more}>LEARN MORE</a>
    </div>

    <div className={`${styles.perksBox} ${styles.perksBox__2}`}>
    <div className={styles.perksBox__header}>{props.product.short_headers[2]}</div>
    <div className={styles.perksBox__caption}>{props.product.captions[2]}</div>
    <a className={styles.perksBox__learn_more}>LEARN MORE</a>
    </div>

    <div className={`${styles.perksBox} ${styles.perksBox__3}`}>
    <div className={styles.perksBox__header}>{props.product.short_headers[3]}</div>
    <div className={styles.perksBox__caption}>{props.product.captions[3]}</div>
    <a className={styles.perksBox__learn_more}>LEARN MORE</a>
    </div>
    </div>
  </div>
);

export default PerksBanner;
