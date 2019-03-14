import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import UserInfo from 'generics/UserInfo';

import sessionSelector from 'modules/session/selectors';
import sessionActions from 'modules/session/actions';

const mapStateToProps = state => ({
  session: sessionSelector.session(state),
});

const mapDispatchToProps = dispatch => ({
  signOut: bindActionCreators(sessionActions, dispatch).signOut,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserInfo);
