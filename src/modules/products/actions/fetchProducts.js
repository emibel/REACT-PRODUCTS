import api from 'api';

import actionTypes from 'modules/products/constants';

// Actions

export const fetchProductsFailure = (error) => ({
  payload: { error },
  type: actionTypes.FETCH_PRODUCTS_LIST_FAILURE,
});

export const fetchProductsRequest = () => ({
  payload: {},
  type: actionTypes.FETCH_PRODUCTS_LIST_REQUEST,
});

export const fetchProductsSuccess = payload => ({
  payload,
  type: actionTypes.FETCH_PRODUCTS_LIST_SUCCESS,
});

// thunks

export const fetchProducts = () => {
  const thunk = dispatch => {
    dispatch(fetchProductsRequest());

    return api.products
      .fetchProducts()
      .then(response => {
        dispatch(fetchProductsSuccess({ products: response }));
        return response;
      })
      .catch(error => {
        dispatch(fetchProductsFailure( error ));
      });
  };

  thunk.type = actionTypes.FETCH_PRODUCTS_LIST;
  return thunk;
};

export default fetchProducts;
