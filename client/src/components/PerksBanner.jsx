import React from 'react';

const PerksBanner = (props) => (
  <div>
    <span className="perks-box 0">{props.product.short_headers[0]}</span>

    <span className="perks-box 1">
    <div className="perks-box-header">{props.product.short_headers[1]}</div>
    <div className="perks-box-caption">{props.product.captions[0]}</div>
    </span>

    <span className="perks-box 2">
    <div className="perks-box-header">{props.product.short_headers[2]}</div>
    <div className="perks-box-caption">{props.product.captions[2]}</div>
    </span>

    <span className="perks-box 3">
    <div className="perks-box-header">{props.product.short_headers[3]}</div>
    <div className="perks-box-caption">{props.product.captions[3]}</div>
    </span>
  </div>
);

export default PerksBanner;
