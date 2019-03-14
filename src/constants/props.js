import PropTypes from 'prop-types';

export const CHILDREN = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.func,
  PropTypes.node,
]);

export const SESSION = PropTypes.shape({
  id: PropTypes.string,
  photo: PropTypes.string,
  email: PropTypes.string,
  displayName: PropTypes.string,
})

export const PRODUCT = PropTypes.shape({
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  _id: PropTypes.string,
})

export const PRODUCTS = PropTypes.arrayOf(PRODUCT);
