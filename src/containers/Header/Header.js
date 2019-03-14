// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// actions
// import productsActions from 'modules/products/actions';

// selectors
import loginSelector from 'modules/login/selectors';

import Header from 'generics/Header';

const mapStateToProps = state => ({
  login: loginSelector.login(state),
});

// const mapDispatchToProps = dispatch => ({
//   fetchProducts: bindActionCreators(productsActions, dispatch).fetchProducts,
// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Header);
