import React, { Component } from 'react';
import ProductTile from '../ProductTile/ProductTile';
import './ProductGridContainer.css';

class ProductGridContainer extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    fetch('https://jsoneditoronline.herokuapp.com/v1/docs/0ccb593c878e42e89f0e2cd8eb31e42a')
    .then(res => res.json())
    .then(res => {
      const products = JSON.parse(res.data).search_response.items.Item;
      this.setState({ products });
    });
  }

  render() {
    const productItems = this.state.products.map(productItem => (
      <ProductTile key={productItem.tcin} {...productItem} />
    ));
    return (
      <>
        <h1 className="product-list-header">Products</h1>
        <div className="product-list-container">
          {productItems}
        </div>
      </>
    );
  }
}

export default ProductGridContainer;
