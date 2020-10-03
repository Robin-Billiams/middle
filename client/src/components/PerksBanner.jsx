import React from 'react';

const PerksBanner = (props) => (
  <div className="perks-container">
    <div className="perks-container-inner">
    <div className="perks-box-0">
      <h3 className="perks-box-0-inner">{props.product.short_headers[0]}</h3>
      </div>

    <div className="perks-box-topics">
    <div className="perks-box">
    <div className="perks-box-header">{props.product.short_headers[1]}</div>
    <div className="perks-box-caption">{props.product.captions[0]}</div>
    </div>

    <div className="perks-box">
    <div className="perks-box-header">{props.product.short_headers[2]}</div>
    <div className="perks-box-caption">{props.product.captions[2]}</div>
    </div>

    <div className="perks-box">
    <div className="perks-box-header">{props.product.short_headers[3]}</div>
    <div className="perks-box-caption">{props.product.captions[3]}</div>
    </div>
    </div>
    </div>
  </div>
);

export default PerksBanner;
