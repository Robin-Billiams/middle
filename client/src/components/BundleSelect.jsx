import React from 'react';

const BundleSelect = (props) => (
  <div>
        <span><input type="checkbox" id="product0" name="product0" value="product0"/></span>
        <span>This item: {props.product.recc_prod_names[0]}</span>
        <span>${props.product.prices[0]}</span><br/>

        <span><input type="checkbox" id="product1" name="product1" value="product1"/></span>
        <span>{props.product.recc_prod_names[1]}</span>
        <span>${props.product.prices[1]}</span><br/>

        <span><input type="checkbox" id="product2" name="product2" value="product2"/></span>
        <span>{props.product.recc_prod_names[2]}</span>
        <span>${props.product.prices[2]}</span><br/>

        <span><input type="checkbox" id="product3" name="product3" value="product3"/></span>
        <span>{props.product.recc_prod_names[3]}</span>
        <span>${props.product.prices[3]}</span><br/>
  </div>
);


export default BundleSelect;
