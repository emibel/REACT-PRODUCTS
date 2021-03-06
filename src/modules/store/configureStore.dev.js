import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import { loadState, saveState } from './../../modules/localStorage';
import rootReducer from '../reducers';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const configureStore = ({ history }) => {
  const initialState = loadState();

  const middlewares = applyMiddleware(
    createLogger({ collapsed: true }),
    routerMiddleware(history),
    thunk,
  );

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(middlewares),
  );

  store.subscribe(() => {
    saveState(store.getState());
  });

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index'); // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
