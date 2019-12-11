import React from 'react';
import './AddToCart.css';

const AddToCart = props => (
  <button className={`cart-action-button ${props.classNames || ''}`}>{props.label}</button>
);

export default AddToCart;
