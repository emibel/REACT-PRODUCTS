import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LoginGoogle from 'generics/SocialLogin/LoginGoogle';

import userActions from 'modules/user/actions';
import userSelector from 'modules/user/selectors';

const mapStateToProps = state => ({
  user: userSelector.user(state),
});

const mapDispatchToProps = dispatch => ({
  addGoogleUser: bindActionCreators(userActions, dispatch).addGoogleUser,
  removeUser: bindActionCreators(userActions, dispatch).removeUser,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginGoogle);
