import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PageSignIn from 'components/PageSignIn';
import PageSignUp from 'components/PageSignUp';
import PageProducts from 'components/PageProducts';
import SecureRoute from 'containers/SecureRoute';

import { PAGE_SIGN_IN, PAGE_SIGN_UP } from 'constants/urls';
// , PAGE_PRODUCTS 

const Routes = () => (
  <Switch>
    <Route exact path={PAGE_SIGN_IN} component={PageSignIn} />
    <Route exact path={PAGE_SIGN_UP} component={PageSignUp} />
    <SecureRoute exact path={'/'} component={PageProducts} />
    {/* <SecureRoute exact path={PAGE_PRODUCTS} component={PageProducts} /> */}
  </Switch>
)

export default Routes;
