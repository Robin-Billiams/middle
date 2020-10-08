import React from 'react';

const BundleSelect = (props) => (
  <div className="frequent-products-select">
        <div className="frequent-products-select-option">
        <span className="frequent-products-select-option-checkbox" >
        {/* <label for="product0">Do Something</label> */}
          <input type="checkbox" id="product0" name="product0" value="product0" checked readOnly/>
        <span className="checkmark"></span>
        </span>
        <span className="frequent-products-item-name">This item: {props.product.recc_prod_names[0]}</span>
        <span className="frequent-products-item-price">${props.product.prices[0]}</span>
        </div>

        <div className="frequent-products-select-option">
        <span className="frequent-products-select-option-checkbox" >
        {/* <label for="product1">Do Something</label> */}
          <input type="checkbox" id="product1" name="product1" value="product1" defaultChecked onChange={(e) => props.productChecked(1)}/>
        <span className="checkmark"></span>
        </span>
        <span className="frequent-products-item-name">{props.product.recc_prod_names[1]}</span>
        <span className="frequent-products-item-price">${props.product.prices[1]}</span>
        </div>

        <div className="frequent-products-select-option">
        <span className="frequent-products-select-option-checkbox" >
        {/* <label for="product2">Do Something</label> */}
          <input type="checkbox" id="product2" name="product2" value="product2" defaultChecked onChange={(e) => props.productChecked(2)}/>
        <span className="checkmark"></span>
        </span>
        <span className="frequent-products-item-name">{props.product.recc_prod_names[2]}</span>
        <span className="frequent-products-item-price">${props.product.prices[2]}</span>
        </div>

        <div className="frequent-products-select-option">
        <span className="frequent-products-select-option-checkbox" >
        {/* <label for="product3">Do Something</label> */}
          <input type="checkbox" id="product3" name="product3" value="product3" defaultChecked onChange={(e) => props.productChecked(3)}/>
        <span className="checkmark"></span>
        </span>
        <span className="frequent-products-item-name">{props.product.recc_prod_names[3]}</span>
        <span className="frequent-products-item-price">${props.product.prices[3]}</span>
        </div>
  </div>
);


export default BundleSelect;
