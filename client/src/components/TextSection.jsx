import React from 'react';

const TextSection = (props) => (
  <div className="text-section-wrapper">
    <div className="text-section-header-wrapper">
      <h2 className="text-section-header">
        {props.product.long_headers[8]}
      </h2>
    </div>

  <div className="text-section-caption-wrapper">
    <h3 className="text-section-code">
       Q60T QLED
    </h3>
    <p className="text-section-caption">
    {props.product.captions[4]}
    </p>
  </div>
</div>
);

export default TextSection;
