import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import BundleSelect from './components/BundleSelect.jsx';
import BundleImages from './components/BundleImages.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: null,
      currentProduct: null,
      imageVisibility: null,
      bundlePrice: null
    };
    this.getProducts = this.getProducts.bind(this);
    this.changeVisibilityMatrix = this.changeVisibilityMatrix.bind(this);
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

  // changeBundlePrice(config) {
  //   console.log('test');
  //   let total = this.props.product.prices[0];
  //   for (let i = 1; i < config.length; i++) {
  //     if (config[i]) {
  //       total += this.props.product.prices[i];
  //     }
  //   }
  //   this.setState({
  //     bundlePrice: total
  //   });
  // }



  render() {
    return (<div className="grid-container">
      {this.state.currentProduct ?
      <div id="bundle">
        <div className="grid-item" id="image-display">
          <BundleImages product={this.state.currentProduct} productsForDisplay={this.state.imageVisibility}/>
        </div>
        <div className="grid-item" id="product-select">
          <BundleSelect product={this.state.currentProduct} productChecked={this.changeVisibilityMatrix}/>
        </div>
      </div>
      :
      null
      }
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('middle'));
