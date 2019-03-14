import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// actions
import productsActions from 'modules/products/actions';

// selectors
import productsSelector from 'modules/products/selectors';

import ProductsList from 'generics/ProductsList';

const mapStateToProps = state => ({
  products: productsSelector.products(state),
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: bindActionCreators(productsActions, dispatch).fetchProducts,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList);
