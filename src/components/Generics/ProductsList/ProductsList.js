import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { PRODUCTS } from 'constants/props';

import ProductListItem from 'generics/ProductListItem';

import List from 'UI/List';

const propTypes = {
  products: PRODUCTS,
  fetchProducts: PropTypes.func.isRequired,
}

const defaultProps = {
  products: []
}

const ProductsList = ({products, fetchProducts}) => {

  useEffect(() => {
    fetchProducts();
  }, []);

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

ProductsList.propTypes=propTypes;
ProductsList.defaultProps=defaultProps;

export default ProductsList;
