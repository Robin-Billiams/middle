import React from 'react';
import {
perksContainer,
perksBox0,
perksBox0Inner,
perksBoxtopics,
perksBox,
perksBoxheader,
perksBoxcaption,
perksBoxlearnmore,
perksBox2,
perksBox3
} from '../styles.module.css';

const PerksBanner = (props) => (

  <div className={perksContainer}>
    <div className={perksBox0}>
      <h3 className={perksBox0Inner}>{props.product.short_headers[0]}</h3>
    </div>

    <div className={perksBoxtopics}>
    <div className={perksBox}>
    <div className={perksBoxheader}>{props.product.short_headers[1]}</div>
    <div className={perksBoxcaption}>{props.product.captions[0]}</div>
    <a className={perksBoxlearnmore}>LEARN MORE</a>
    </div>

    <div className={`${perksBox} ${perksBox2}`}>
    <div className={perksBoxheader}>{props.product.short_headers[2]}</div>
    <div className={perksBoxcaption}>{props.product.captions[2]}</div>
    <a className={perksBoxlearnmore}>LEARN MORE</a>
    </div>

    <div className={`${perksBox} ${perksBox3}`}>
    <div className={perksBoxheader}>{props.product.short_headers[3]}</div>
    <div className={perksBoxcaption}>{props.product.captions[3]}</div>
    <a className={perksBoxlearnmore}>LEARN MORE</a>
    </div>
    </div>
  </div>
);

export default PerksBanner;
