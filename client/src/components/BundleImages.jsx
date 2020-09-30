import React from 'react';
import ReactDOM from 'react-dom';

class BundleImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bundlePrice: this.props.product.prices[0] + this.props.product.prices[1] + this.props.product.prices[2] + this.props.product.prices[3]
    };
  }



  render() {
    return (<div>
      <span>
      <img src={this.props.product.images[0]} alt="Cannot get image" width="100" height="100"/>
      </span>

      <span>
      <img src="https://i.imgur.com/Sbaiqsx.png" alt="Cannot get image" width="90" height="100"/>
      </span>

      <span>
      <img src={this.props.product.images[1]} alt="Cannot get image" width="100" height="100"/>
      </span>

      <span>
      <img src="https://i.imgur.com/Sbaiqsx.png" alt="Cannot get image" width="90" height="100"/>
      </span>

      <span>
      <img src={this.props.product.images[2]} alt="Cannot get image" width="100" height="100"/>
      </span>

      <span>
      <img src="https://i.imgur.com/Sbaiqsx.png" alt="Cannot get image" width="90" height="100"/>
      </span>


      <span>
      <img src={this.props.product.images[3]} alt="Cannot get image" width="100" height="100"/>
      </span>

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
