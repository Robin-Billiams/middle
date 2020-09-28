import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    return axios.get('/middle').then(data => console.log(data));
  }

  render() {
    return <div></div>;
  }
}

ReactDOM.render(<App />, document.getElementById('middle'));
