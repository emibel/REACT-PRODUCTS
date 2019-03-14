import React, { Component } from 'react'

import ProductListItem from 'generics/ProductListItem';
import { PRODUCTS } from 'constants/props';

import List from 'UI/List';
// import styles from './ProductsList.scss';

const propTypes = {
  products: PRODUCTS
}

const defaultProps = {
  products: []
}

class ProductsList extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products } = this.props;

    return (
      <List>
        {products.map( product =>
          <ProductListItem
            key={product._id}
            product={product}
          />
        )}
      </List>
    );
  }
}

ProductsList.propTypes=propTypes;
ProductsList.defaultProps=defaultProps;

export default ProductsList;
