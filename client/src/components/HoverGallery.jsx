import React from 'react';

const HoverGallery = (props) => (
  <div className="gallery-container">
    <div className="gallery-container-inner">
      <div className="left-section">
        <div className="zoom left-section-top">
        <img src={props.product.images[0]} alt="Cannot get image"/>
        </div>
        <div className="left-section-bottom">
          <div className="zoom left-section-bottom-left">
          <img src={props.product.images[1]} alt="Cannot get image"/>
          </div>
          <div className="zoom left-section-bottom-right">
          <img src={props.product.images[2]} alt="Cannot get image"/>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="zoom right-section-top">

          <div className="right-section-text-wrapper">
            <div className="right-section-header-wrapper">
            {props.product.short_headers[2]}
             </div>

            <div className="right-section-caption-wrapper">
            <h3 className="right-section-code">
              Boundless Design
              </h3>
              <p className="right-section-caption">
                {props.product.captions[4]}
              </p>
            </div>
          </div>
        </div>
        <div className="zoom right-section-bottom">
            <img src={props.product.images[4]} alt="Cannot get image"/>
        </div>
      </div>
    </div>
  </div>
);

export default HoverGallery;
