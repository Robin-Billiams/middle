import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import BundleSelect from './components/BundleSelect.jsx';
import BundleImages from './components/BundleImages.jsx';
import PerksBanner from './components/PerksBanner.jsx';
import Carousel from './components/Carousel.jsx';
import HoverGallery from './components/HoverGallery.jsx';
import TextSection from './components/TextSection.jsx';

import styles from './styles.module.css';

const server = 'http://localhost:4000/middle/';


class MiddleModule extends React.Component {
  constructor() {
    super();
    this.state = {
      currentProduct: null,
      imageVisibility: null,
      bundlePrice: null,
      currentSlideImage: 0
    };
    this.getProducts = this.getProducts.bind(this);
    this.changeVisibilityMatrix = this.changeVisibilityMatrix.bind(this);
    this.changeSlide = this.changeSlide.bind(this);
  }

  changeVisibilityMatrix(x) {
    let newConfig = this.state.imageVisibility.slice();
    newConfig[x] = !newConfig[x];
    this.setState({
      imageVisibility: newConfig
    });
  }

  componentWillMount() {
    this.getProducts();
  }


  getProducts() {
    let prodId = 0;
    if (window.location.search) {
      prodId = window.location.search.slice(1);
    }
    return axios.get(server + String(prodId))
    .then(data => this.setState({currentProduct: data.data, imageVisibility: [true, true, true, true]}));
  }

  changeSlide(delta) {
    if (delta === -1 && this.state.currentSlideImage > 0) {
      let newImage = this.state.currentSlideImage - 1;
      this.setState({
        currentSlideImage: newImage
      });
    } else if (delta === 1 && this.state.currentSlideImage < 9) {
      let newImage = this.state.currentSlideImage + 1;
      this.setState({
        currentSlideImage: newImage
      });
    } else if (delta === -1 && this.state.currentSlideImage === 0) {
      this.setState({
        currentSlideImage: 9
      });
    } else {
      this.setState({
        currentSlideImage: 0
      });
    }
  }


  render() {
    return (<div>
      {this.state.currentProduct ?
      <div>
      <div className={styles.frequentProducts}>
        <div className={styles.frequentProducts__title}>
          <h2>Frequently Bought Together</h2>
        </div>
        <div className="image-display">
          <BundleImages product={this.state.currentProduct} productsForDisplay={this.state.imageVisibility}/>
        </div>
        <div className="product-select">
          <BundleSelect product={this.state.currentProduct} productChecked={this.changeVisibilityMatrix}/>
        </div>
        </div>
        <div className={styles.perksBanner}>
          <PerksBanner product={this.state.currentProduct}/>
        </div>
        <div className={styles.textSection}>
          <TextSection product={this.state.currentProduct}/>
        </div>
        <div className={styles.carousel}>
          <Carousel product={this.state.currentProduct} changeSlide={this.changeSlide} currentSlideImage={this.state.currentSlideImage}/>
        </div>
        <div className={styles.hoverGallery}>
          <HoverGallery product={this.state.currentProduct}/>
        </div>
        </div>
      :
      null
      }
    </div>);
  }
}

ReactDOM.render(<MiddleModule />, document.getElementById('middle'));
