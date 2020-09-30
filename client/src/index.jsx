import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import BundleSelect from './components/BundleSelect.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: null,
      currentProduct: null
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentWillMount() {
    this.getProducts();
  }

  getProducts() {
    return axios.get('/middle')
    .then(data => this.setState({products: data.data, currentProduct: data.data[0]}, () => console.log(this.state.currentProduct.recc_prod_names[0]))); //currently grabs all the products and stores them in products
  }

  render() {
    return (<div className="grid-container">
      {this.state.currentProduct ?
      <div>
      <div className="grid-item" id="image-display">
      </div>
      <div className="grid-item" id="product-select">
        <BundleSelect product={this.state.currentProduct}/>
      </div>
      </div>
      :
      null
      }
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('middle'));
