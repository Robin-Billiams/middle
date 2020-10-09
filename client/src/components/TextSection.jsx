import React from 'react';
import {
textSectionWrapper,
textSectionHeaderWrapper,
textSectionHeader,
textSectionCaptionWrapper,
textSectionCode,
textSectionCaption
} from '../styles.module.css';

const TextSection = (props) => (
  <div className={textSectionWrapper}>
    <div className={textSectionHeaderWrapper}>
      <h2 className={textSectionHeader}>
        {props.product.long_headers[8]}
      </h2>
    </div>

  <div className={textSectionCaptionWrapper}>
    <h3 className={textSectionCode}>
       Q60T QLED
    </h3>
    <p className={textSectionCaption}>
    {props.product.captions[4]}
    </p>
  </div>
</div>
);

export default TextSection;
