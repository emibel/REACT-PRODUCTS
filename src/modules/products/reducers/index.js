import initialState from 'modules/store/initialState.json';
import actionTypes from 'modules/products/constants';

const products = (
  state = initialState.products,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.FETCH_PRODUCTS_LIST_FAILURE:
      return [];

    case actionTypes.FETCH_PRODUCTS_LIST_SUCCESS:
    case actionTypes.LOAD_PROSPECT_LIST_REQUEST:
      return [...payload.products];

    default:
      return state
  }
};

export default products;
