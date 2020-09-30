import React from 'react';
import ReactDOM from 'react-dom';

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
    return (<div>
      <span>
      <img src={this.props.product.images[0]} alt="Cannot get image" width="100" height="100"/>
      </span>

      {this.props.productsForDisplay[1] ?
      <span>
      <span id='plus-1'>
      <img src="https://i.imgur.com/Sbaiqsx.png" alt="Cannot get image" width="90" height="100"/>
      </span>

      <span>
      <img src={this.props.product.images[1]} alt="Cannot get image" width="100" height="100"/>
      </span>
      </span>
      :
      null}

      {this.props.productsForDisplay[2] ?
      <span>
      <span id='plus-2'>
      <img src="https://i.imgur.com/Sbaiqsx.png" alt="Cannot get image" width="90" height="100"/>
      </span>

      <span>
      <img src={this.props.product.images[2]} alt="Cannot get image" width="100" height="100"/>
      </span>
      </span>
      :
      null}

      {this.props.productsForDisplay[3] ?
      <span>
      <span id='plus-3'>
      <img src="https://i.imgur.com/Sbaiqsx.png" alt="Cannot get image" width="90" height="100"/>
      </span>

      <span>
      <img src={this.props.product.images[3]} alt="Cannot get image" width="100" height="100"/>
      </span>
      </span>
      :
      null}

      <span>
      <img src="https://i.imgur.com/5K5Cpby.png" alt="Cannot get image" width="90" height="100"/>
      </span>

      <div>
        <div>
          <div>Total Price</div>
          <div>
            <span>${this.state.bundlePrice}</span>
            <span>
              <div>$9000</div>
              <div>Save $500.00</div>
            </span>
          </div>
          <button>BUY TOGETHER</button>
        </div>
      </div>
    </div>);
  }
}
export default BundleImages;
