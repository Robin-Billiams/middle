import React from 'react';
import styles from '../styles.module.css';

const TextSection = (props) => (
  <div className={styles.textSection__wrapper}>
    <div className={styles.textSection__header_wrapper}>
      <h2 className={styles.textSection__header}>
        {props.product.long_headers[8]}
      </h2>
    </div>

  <div className={styles.textSection__caption_wrapper}>
    <h3 className={styles.textSection__code}>
       Q60T QLED
    </h3>
    <p className={styles.textSection__caption}>
    {props.product.captions[4]}
    </p>
  </div>
</div>
);

export default TextSection;
