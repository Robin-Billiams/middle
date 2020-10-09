import React from 'react';
import slideButtonNext from './svg/slideButtonNext.svg';

import {
carouselContainer,
carouselSlide,
carouselSlideImageContainer,
carouselSlideImage,
carouselSlideText,
carouselSlideTextHeader,
carouselSlideTextCaption,
buttonPrev,
buttonNext,
hidden,
slideButton
} from '../styles.module.css';

import ProgressBar from './ProgressBar.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 7, //slide interval
      barPercentage: 0,
      msPassed: 0 //tracks ms per interval
    };

    this.startTimer = this.startTimer.bind(this);
    this.progressBarInterval = this.progressBarInterval.bind(this);
    this.timeSlidesAndBar = this.timeSlidesAndBar.bind(this);
  }


  progressBarInterval() { //called every 10 ms
    let currProgress = this.state.barPercentage;
    let newTime = this.state.msPassed;
    this.setState({
      barPercentage: currProgress + 1 / this.state.time, //increment state var
      msPassed: newTime + 10 //increment ms by 10 because function is called every 10
    });
  }

  startTimer() { //upon first render and upon manual click
    this.setState({
      barPercentage: 0, //reset bar
      msPassed: 0 //reset time
    }, () => {
      this.timer = setInterval(this.timeSlidesAndBar, 10); //begin interval
    });
  }

  timeSlidesAndBar() { //if msPassed
    if (this.state.msPassed === 7000) { //every 7s
      this.props.changeSlide(1); //change slide
      this.setState({ //reset bar
        barPercentage: 0,//first reset bar
        msPassed: 0 //reset time
      });
    }
    if (this.state.msPassed % 10 === 0) { //every 10 ms
      this.progressBarInterval();
    }
  }


componentDidMount() {
  this.startTimer();
}

componentWillUnmount() {
  clearInterval(this.timer);
}

  render() {
    return (
        <div className={carouselContainer}>
        {this.props.product.images.slice(4).map((image, i) => {
        return this.props.currentSlideImage === i ?
               <div className={carouselSlide}>
                 <div className={carouselSlideImageContainer}>
                <img src={image} alt="Cannot get image" className={carouselSlideImage}/>
                </div>
                <div className={carouselSlideText}>
                  <div className={carouselSlideTextHeader}>{this.props.product.long_headers[i]}</div>
                  <div className={carouselSlideTextCaption}>{this.props.product.captions[i + 3]}</div>
                </div>
               </div>
               :
               null
      })}
      <button className={buttonPrev} onClick={() => {this.props.changeSlide(-1); clearInterval(this.timer); this.startTimer();}}>
      &#60;

      </button>

      <button className={buttonNext} onClick={() => {this.props.changeSlide(1); clearInterval(this.timer); this.startTimer();}}>
      &#62;
      </button>

      <ProgressBar progress={this.state.barPercentage}/>
  </div>
    );
  }
}

export default Carousel;
