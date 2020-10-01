import React from 'react';

const Carousel = (props) => (
  <div className="carousel-container">
        {props.product.images.slice(4).map((image, i) => {
        return props.currentSlideImage === i ?

               <div className="carousel slide fade">
                 <div>
                <img src={image} alt="Cannot get image" width="500" height="600"/>
                </div>
                <div className="text">
                  <div>{props.product.long_headers[i]}</div>
                  <div>{props.product.captions[i + 3]}</div>
                </div>
               </div>
               :
               null
      })}
      <button onClick={() => props.changeSlide(-1)}>Prev</button>
      <button onClick={() => props.changeSlide(1)}>Next</button>

  </div>
);

export default Carousel;
