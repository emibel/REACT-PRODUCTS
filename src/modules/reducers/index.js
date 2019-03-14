import { combineReducers } from 'redux';
import form from 'modules/redux-form/reducers';
import products from 'modules/products/reducers';
import session from 'modules/session/reducers';

const rootReducer = combineReducers({
  form,
  products,
  session,
});

export default rootReducer;
