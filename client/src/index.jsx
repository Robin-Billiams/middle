import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import BundleSelect from './components/BundleSelect.jsx';
import BundleImages from './components/BundleImages.jsx';
import Carousel from './components/Carousel.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: null,
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
    return axios.get('/middle')
    .then(data => this.setState({products: data.data, currentProduct: data.data[0], imageVisibility: [true, true, true, true]})); //currently grabs all the products and stores them in products
  }

  changeSlide(delta) {
    if (delta === -1 && this.state.currentSlideImage > 0) {
      let newImage = this.state.currentSlideImage - 1;
      this.setState({
        currentSlideImage: newImage
      });
    }
    if (delta === 1 && this.state.currentSlideImage < 9) {
      let newImage = this.state.currentSlideImage + 1;
      this.setState({
        currentSlideImage: newImage
      });
    }
  }


  render() {
    return (<div className="grid-container">
      {this.state.currentProduct ?
      <div id="bundle">
        <div>
          Frequently Bought Together
        </div>
        <div className="grid-item" id="image-display">
          <BundleImages product={this.state.currentProduct} productsForDisplay={this.state.imageVisibility}/>
        </div>
        <div className="grid-item" id="product-select">
          <BundleSelect product={this.state.currentProduct} productChecked={this.changeVisibilityMatrix}/>
        </div>
        <div className="grid-item" id="carousel">
          <Carousel product={this.state.currentProduct} changeSlide={this.changeSlide} currentSlideImage={this.state.currentSlideImage}/>
        </div>
      </div>
      :
      null
      }
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('middle'));
