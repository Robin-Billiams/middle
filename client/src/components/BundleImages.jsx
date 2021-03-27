import React from 'react';
import ReactDOM from 'react-dom';
import {
  frequentProductsImages,
  frequentProductsImageAndSymbol,
  frequentProductsImage,
  frequentProductsSymbol,
  symbol,
  frequentProductsTotalContainer,
  frequentProductsTotalPriceLabel,
  frequentProductsTotalPriceValues,
  frequentProductsTotalPriceValuesFull,
  frequentProductsTotalPriceValuesOriginal,
  frequentProductsTotalPriceValueSave,
  frequentProductsButton
} from '../styles.module.css';

class BundleImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bundlePrice: 0,
    };

    this.changeBundlePrice = this.changeBundlePrice.bind(this);
  }

  changeBundlePrice(config) {
    let total = this.props.product.prices[0];
    for (let i = 1; i < config.length; i++) {
      if (config[i]) {
        total += this.props.product.prices[i];
      }
    }
    this.setState({
      bundlePrice: total
    });
  }

  componentWillMount() {
    this.changeBundlePrice(this.props.productsForDisplay);
  }

  componentWillReceiveProps(nextProps) {
    let total = nextProps.product.prices[0];
    for (let i = 1; i < nextProps.productsForDisplay.length; i++) {
      if (nextProps.productsForDisplay[i]) {
        total = Number((total + nextProps.product.prices[i]).toFixed(2));
      }
    }
    this.setState({
      bundlePrice: total
    });
  }


  render() {
    return (<div className={frequentProductsImages}>
      <span className={frequentProductsImageAndSymbol}>
        <span className={frequentProductsImage}>
      <img src={this.props.product.images[0]} alt="Cannot get image" width="100%" height="100%"/>
      </span>
      </span>

      {this.props.productsForDisplay[1] ?
      <span className={frequentProductsImageAndSymbol}>
      <span className={frequentProductsSymbol}>
      <div className={symbol} id='plus-1'>
        +
      </div>
      </span>

      <span className={frequentProductsImage}>
      <img src={this.props.product.images[1]} alt="Cannot get image" width="100%" height="100%"/>
      </span>
      </span>
      :
      null}

      {this.props.productsForDisplay[2] ?
      <span className={frequentProductsImageAndSymbol}>
      <span className={frequentProductsSymbol}>
      <div className={symbol} id='plus-2'>
        +
      </div>
      </span>

      <span className={frequentProductsImage}>
      <img src={this.props.product.images[2]} alt="Cannot get image" width="100%" height="100%"/>
      </span>
      </span>
      :
      null}

      {this.props.productsForDisplay[3] ?
      <span className={frequentProductsImageAndSymbol}>
      <span className={frequentProductsSymbol}>
      <div className={symbol} id='plus-3'>
        +
      </div>
      </span>

      <span className={frequentProductsImage}>
      <img src={this.props.product.images[3]} alt="Cannot get image" width="100%" height="100%"/>
      </span>
      </span>
      :
      null}

      <span className={frequentProductsImageAndSymbol}>
      <span className={frequentProductsSymbol}>
      <div className={symbol}>
        =
      </div>
      </span>

      <span className={frequentProductsTotalContainer}>
        <div>
          <div className={frequentProductsTotalPriceLabel}>Total Price
          </div>
          <div className={frequentProductsTotalPriceValues}>
            <span id="bundleprice">${this.state.bundlePrice}</span>
            <span className={frequentProductsTotalPriceValuesFull}>
              <div className={frequentProductsTotalPriceValuesOriginal}>$1,000,000.00</div>
              <div className={frequentProductsTotalPriceValueSave}>Save $500.00</div>
            </span>
          </div>
          <button className={frequentProductsButton}>BUY TOGETHER</button>
        </div>
      </span>
      </span>
    </div>);
  }
}
export default BundleImages;
