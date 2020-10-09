import React from 'react';
import styles from '../styles.module.css';

const HoverGallery = (props) => (
  <div className={styles.gallery__container}>
    <div className={styles.gallery__containerInner}>
      <div className={styles.leftSection}>
        <div className={`${styles.zoom} ${styles.leftSection__top}`}>
        <img src={props.product.images[0]} alt="Cannot get image"/>
        </div>
        <div className="left-section-bottom">
          <div className={`${styles.zoom} ${styles.leftSection__bottomLeft}`}>
          <img src={props.product.images[1]} alt="Cannot get image"/>
          </div>
          <div className={`${styles.zoom} ${styles.leftSection__bottomRight}`}>
          <img src={props.product.images[2]} alt="Cannot get image"/>
          </div>
        </div>
      </div>
      <div className={styes.rightSection}>
        <div className={`${styles.zoom} ${styles.rightSection__top}`}>

          <div className={styles.rightSection__textWrapper}>
            <div className={styles.rightSection__headerWrapper}>
            {props.product.short_headers[2]}
             </div>

            <div className={styles.rightSection__captionWrapper}>
            <h3 className={styles.rightSection__code}>
              Boundless Design
              </h3>
              <p className="right-section-caption">
                {props.product.captions[4]}
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.zoom} ${styles.rightSection__bottom}`}>
            <img src={props.product.images[4]} alt="Cannot get image"/>
        </div>
      </div>
    </div>
  </div>
);

export default HoverGallery;
