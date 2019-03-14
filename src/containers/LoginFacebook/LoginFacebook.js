import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LoginFacebook from 'generics/SocialLogin/LoginFacebook';

import userActions from 'modules/user/actions';
import userSelector from 'modules/user/selectors';

const mapStateToProps = state => ({
  user: userSelector.user(state),
});

const mapDispatchToProps = dispatch => ({
  addFacebookUser: bindActionCreators(userActions, dispatch).addFacebookUser,
  removeUser: bindActionCreators(userActions, dispatch).removeUser,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFacebook);
