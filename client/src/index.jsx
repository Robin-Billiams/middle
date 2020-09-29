import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: null
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    return axios.get('/middle')
    .then(data
      => this.setState({products: data})); //currently grabs all the products and stores them in products
  }

  render() {
    return <div className="grid-container">
      <div className="grid-item" id="image-display">
      </div>
      <div className="grid-item" id="product-select">
      </div>
    </div>;
  }
}

ReactDOM.render(<App />, document.getElementById('middle'));
