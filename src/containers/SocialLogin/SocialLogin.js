import { connect } from 'react-redux';

// selectors
import loginSelector from 'modules/user/selectors';

import SocialLogin from 'generics/SocialLogin';

const mapStateToProps = state => ({
  login: loginSelector.login(state),
});

export default connect(
  mapStateToProps,
)(SocialLogin);
