import React from 'react';
import AddToCart from '../AddToCart/AddToCart';
import './ProductTile.css';

const statusMap = {
  'IN_STOCK': 'Free standard shipping',
  'OUT_OF_STOCK': 'Shipping temporarily out of stock'
};

const statusClasses = {
  'IN_STOCK': 'in-stock',
  'OUT_OF_STOCK': 'out-of-stock'
};

const cartButtonLabel = {
  'IN_STOCK': 'Add to cart',
  'OUT_OF_STOCK': 'Check stores'
}

const ProductTile = props => (
  <div className="d-flex product-list-item" key={props.tcin}>
    <div className="d-flex product-item-image">
      <img src={props.images[0].base_url + props.images[0].primary} />
    </div>
    <div className="d-flex product-item-title">{props.title}</div>
    <div className="d-flex product-item-brand">{props.brand}</div>
    <div className="d-flex product-item-price">{props.list_price.formatted_price}</div>
    <div className={`d-flex product-item-status ${statusClasses[props.availability_status]}`}>{statusMap[props.availability_status]}</div>
    <div className="cart-action-button-container">
      <AddToCart classNames={statusClasses[props.availability_status]} label={cartButtonLabel[props.availability_status]} />
    </div>
  </div>
);

export default ProductTile;
