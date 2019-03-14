import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';

import configureStore from 'modules/store/configureStore';
import Routes from 'components/Routes';
import Header from 'generics/Header';

const history = createBrowserHistory();

const store = configureStore({ history });

const Application = () => (
  <Provider store={store}>
    <Header />
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>
);

export default Application;
