import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles.module.css';

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
    return (<div className={styles.frequentProducts__images}>
      <span className={styles.frequentProducts__imageAndSymbol}>
        <span className={styles.frequentProducts__image}>
      <img src={this.props.product.images[0]} alt="Cannot get image"/>
      </span>
      </span>

      {this.props.productsForDisplay[1] ?
      <span className={styles.frequentProducts__imageAndSymbol}>
      <span className={styles.frequentProducts__symbol}>
      <div className={styles.symbol} id='plus-1'>
        +
      </div>
      </span>

      <span className={styles.frequentProducts__image}>
      <img src={this.props.product.images[1]} alt="Cannot get image"/>
      </span>
      </span>
      :
      null}

      {this.props.productsForDisplay[2] ?
      <span className={styles.frequentProducts__imageAndSymbol}>
      <span className={styles.frequentProducts__symbol}>
      <div className={styles.symbol} id='plus-2'>
        +
      </div>
      </span>

      <span className={styles.frequentProducts__image}>
      <img src={this.props.product.images[2]} alt="Cannot get image"/>
      </span>
      </span>
      :
      null}

      {this.props.productsForDisplay[3] ?
      <span className={styles.frequentProducts__imageAndSymbol}>
      <span className={styles.frequentProducts__symbol}>
      <div className={styles.symbol} id='plus-3'>
        +
      </div>
      </span>

      <span className={styles.frequentProducts__image}>
      <img src={this.props.product.images[3]} alt="Cannot get image"/>
      </span>
      </span>
      :
      null}

      <span className={styles.frequentProducts__imageAndSymbol}>
      <span className={styles.frequentProducts__symbol}>
      <div className={styles.symbol}>
        =
      </div>
      </span>

      <span className={styles.frequentProducts__totalContainer}>
        <div>
          <div className={styles.frequentProducts__totalPriceLabel}>Total Price
          </div>
          <div className={styles.frequentProducts__totalPriceValues}>
            <span>${this.state.bundlePrice}</span>
            <span className={styles.frequentProducts__totalPriceValuesFull}>
              <div className={styles.frequentProducts__totalPriceValuesOriginal}>$1,000,000.00</div>
              <div className={styles.frequentProducts__totalPriceValueSave}>Save $500.00</div>
            </span>
          </div>
          <button className={styles.frequentProducts__button}>BUY TOGETHER</button>
        </div>
      </span>
      </span>
    </div>);
  }
}
export default BundleImages;
