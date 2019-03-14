import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SignIn from 'generics/SignIn';

import sessionActions from 'modules/session/actions';

const mapDispatchToProps = dispatch => ({
  fetchSignIn: bindActionCreators(sessionActions, dispatch).fetchSignIn,
});

export default connect(
  null,
  mapDispatchToProps,
)(SignIn);
