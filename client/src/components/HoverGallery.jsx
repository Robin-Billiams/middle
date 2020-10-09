import React from 'react';
import {
  galleryContainer,
  galleryContainerInner,
  leftSection,
  zoom,
  leftSectionTop,
  leftSectionBottom,
  leftSectionBottomLeft,
  leftSectionBottomRight,
  rightSection,
  rightSectionTop,
  rightSectionTextWrapper,
  rightSectionHeaderWrapper,
  rightSectionCaptionWrapper,
  rightSectionCode,
  rightSectionBottom
} from '../styles.module.css';

const HoverGallery = (props) => (
  <div className={galleryContainer}>
    <div className={galleryContainerInner}>
      <div className={leftSection}>
        <div className={`${zoom} ${leftSectionTop}`}>
        <img src={props.product.images[0]} alt="Cannot get image" width="100%" height ="100%"/>
        </div>
        <div className={leftSectionBottom}>
          <div className={`${zoom} ${leftSectionBottomLeft}`}>
          <img src={props.product.images[1]} alt="Cannot get image" width="100%" height ="100%"/>
          </div>
          <div className={`${zoom} ${leftSectionBottomRight}`}>
          <img src={props.product.images[2]} alt="Cannot get image" width="100%" height ="100%"/>
          </div>
        </div>
      </div>
      <div className={rightSection}>
        <div className={`${zoom} ${rightSectionTop}`}>

          <div className={rightSectionTextWrapper}>
            <div className={rightSectionHeaderWrapper}>
            {props.product.short_headers[2]}
             </div>

            <div className={rightSectionCaptionWrapper}>
            <h3 className={rightSectionCode}>
              Boundless Design
              </h3>
              <p className="right-section-caption">
                {props.product.captions[4]}
              </p>
            </div>
          </div>
        </div>
        <div className={`${zoom} ${rightSectionBottom}`}>
            <img src={props.product.images[4]} alt="Cannot get image" width="100%" height ="100%"/>
        </div>
      </div>
    </div>
  </div>
);

export default HoverGallery;
