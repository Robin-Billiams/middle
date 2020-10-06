import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import BundleSelect from './components/BundleSelect.jsx';
import BundleImages from './components/BundleImages.jsx';
import PerksBanner from './components/PerksBanner.jsx';
import Carousel from './components/Carousel.jsx';
import HoverGallery from './components/HoverGallery.jsx';


class App extends React.Component {
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
    return axios.get('/middle/' + String(prodId))
    .then(data => this.setState({currentProduct: data.data, imageVisibility: [true, true, true, true]})); //currently grabs all the products and stores them in products
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
    return (<div className="grid-container">
      {this.state.currentProduct ?
      <div>
      <div className="frequent-products-container">
        <div className="frequent-products-title">
          <h2>Frequently Bought Together</h2>
        </div>
        <div className="grid-item" id="image-display">
          <BundleImages product={this.state.currentProduct} productsForDisplay={this.state.imageVisibility}/>
        </div>
        <div className="grid-item" id="product-select">
          <BundleSelect product={this.state.currentProduct} productChecked={this.changeVisibilityMatrix}/>
        </div>
        </div>
        <div className="grid-item" id="perks-banner">
          <PerksBanner product={this.state.currentProduct}/>
        </div>
        <div className="grid-item" id="carousel">
          <Carousel product={this.state.currentProduct} changeSlide={this.changeSlide} currentSlideImage={this.state.currentSlideImage}/>
        </div>
        <div className="grid-item" id="hover-gallery">
          <HoverGallery product={this.state.currentProduct}/>
        </div>
        </div>
      :
      null
      }
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('middle'));
