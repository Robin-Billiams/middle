import React from 'react';
import {
frequentProductsSelect,
frequentProductsSelectOption,
frequentProductsItemName,
frequentProductsItemPrice,
} from '../styles.module.css';

const BundleSelect = (props) => (
  <div className={frequentProductsSelect}>
        <div className={frequentProductsSelectOption}>
        <span className="frequent-products-select-option-checkbox" >
          <input type="checkbox" id="product0" name="product0" value="product0" checked readOnly/>
        <span className="checkmark"></span>
        </span>
        <span className={frequentProductsItemName}>This item: {props.product.recc_prod_names[0]}</span>
        <span className={frequentProductsItemPrice}>${props.product.prices[0]}</span>
        </div>

        <div className={frequentProductsSelectOption}>
        <span className="frequent-products-select-option-checkbox" >
          <input type="checkbox" id="product1" name="product1" value="product1" defaultChecked onChange={(e) => props.productChecked(1)}/>
        <span className="checkmark"></span>
        </span>
        <span className={frequentProductsItemName}>{props.product.recc_prod_names[1]}</span>
        <span className={frequentProductsItemPrice}>${props.product.prices[1]}</span>
        </div>

        <div className={frequentProductsSelectOption}>
        <span className="frequent-products-select-option-checkbox" >
          <input type="checkbox" id="product2" name="product2" value="product2" defaultChecked onChange={(e) => props.productChecked(2)}/>
        <span className="checkmark"></span>
        </span>
        <span className={frequentProductsItemName}>{props.product.recc_prod_names[2]}</span>
        <span className={frequentProductsItemPrice}>${props.product.prices[2]}</span>
        </div>

        <div className={frequentProductsSelectOption}>
        <span className="frequent-products-select-option-checkbox" >
          <input type="checkbox" id="product3" name="product3" value="product3" defaultChecked onChange={(e) => props.productChecked(3)}/>
        <span className="checkmark"></span>
        </span>
        <span className={frequentProductsItemName}>{props.product.recc_prod_names[3]}</span>
        <span className={frequentProductsItemPrice}>${props.product.prices[3]}</span>
        </div>
  </div>
);


export default BundleSelect;
