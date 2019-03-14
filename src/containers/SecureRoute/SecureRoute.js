import { connect } from 'react-redux';

import SecureRoute from 'components/SecureRoute';

import sessionSelector from 'modules/session/selectors';

const mapStateToProps = state => ({
  session: sessionSelector.session(state),
});

export default connect(
  mapStateToProps,
)(SecureRoute);
