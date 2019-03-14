import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { PRODUCT } from 'constants/props';
import productDefault from 'assets/productDefault.png';

import ListItem from 'UI/ListItem';
import currency from 'helpers/currency';
import styles from './ProductListItem.scss';

const propTypes = {
  product: PRODUCT.isRequired,
  className: PropTypes.string,
}

const defaultProps = {
  className: null,
}

const ProductListItem = ({product, className}) => (
  <ListItem className={classnames(styles['product-list-item'], className)}>
    <div className={styles.info}>
      <img src={product.image || productDefault } className={styles.image} alt="pro-img"/>
      <span key={`name-${product._id}`}>{product.name}</span>
    </div>
    <div key={`price-${product._id}`}>{currency(product.price)}</div>
  </ListItem>
)

ProductListItem.propTypes = propTypes;
ProductListItem.defaultProps = defaultProps;

export default ProductListItem;
