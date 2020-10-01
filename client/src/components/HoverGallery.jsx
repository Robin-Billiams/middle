import React from 'react';

const HoverGallery = (props) => (
  <div>
    <div>
      <div className="left-section">
        <div className="zoom left-section-top">
        <img src={props.product.images[0]} alt="Cannot get image" width="100" height="100"/>
        </div>
        <div className="zoom left-section-bottom">
        <img src={props.product.images[1]} alt="Cannot get image" width="100" height="100"/>
        </div>
      </div>
      <div className="right-section">
        <div className="zoom right-section-top">
        <img src={props.product.images[2]} alt="Cannot get image" width="100" height="100"/>
        </div>
        <div className="zoom right-section-bottom">
          <span className="zoom right-section-bottom-left">
            <img src={props.product.images[3]} alt="Cannot get image" width="100" height="100"/>
          </span>
          <span className="zoom right-section-bottom-right">
          <img src={props.product.images[4]} alt="Cannot get image" width="100" height="100"/>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default HoverGallery;
