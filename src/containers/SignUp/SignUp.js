import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SignUp from 'generics/SignUp';

import sessionActions from 'modules/session/actions';

const mapDispatchToProps = dispatch => ({
  fetchSignUp: bindActionCreators(sessionActions, dispatch).fetchSignUp,
});

export default connect(
  null,
  mapDispatchToProps,
)(SignUp);
