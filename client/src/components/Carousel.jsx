import React from 'react';

const Carousel = (props) => (
  <div className="carousel-container">
        {props.product.images.slice(4).map((image, i) => {
        return props.currentSlideImage === i ?
               <div className="carousel-slide">
                 <div className="slide-image-container">
                <img src={image} alt="Cannot get image" className="slide-image"/>
                </div>
                <div className="slide-text">
                  <div className="slide-text-header">{props.product.long_headers[i]}</div>
                  <div className="slide-text-caption">{props.product.captions[i + 3]}</div>
                </div>
               </div>
               :
               null
      })}


      <button className="button-prev" onClick={() => props.changeSlide(-1)}>Prev</button>
      <button className="button-next" onClick={() => props.changeSlide(1)}>Next</button>


  </div>
);

export default Carousel;
