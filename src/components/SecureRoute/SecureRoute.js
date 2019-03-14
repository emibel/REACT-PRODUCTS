import React from 'react'
import { Redirect, Route } from 'react-router-dom';

import { PAGE_SIGN_IN } from 'constants/urls';
import { SESSION } from 'constants/props';

const propTypes = {
  session: SESSION
}

const defaultProps = {
  session: null
}

const SecureRoute = ({session, ...props}) => {
  if (!session || session.token === null) {
    return (<Redirect to={PAGE_SIGN_IN} />)
  }
  return (
    <Route exact {...props}/>
  )
}

SecureRoute.propTypes = propTypes;
SecureRoute.defaultProps = defaultProps;

export default SecureRoute;
