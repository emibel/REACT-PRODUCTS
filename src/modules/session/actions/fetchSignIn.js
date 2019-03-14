import api from 'api';
import actionTypes from 'modules/session/constants';
import {replace} from 'react-router-redux';
import { PAGE_HOME } from 'constants/urls';
import { setAuthorizationToken } from 'api/constants';

// Actions
export const fetchSignInRequest = () => ({
  payload: {},
  type: actionTypes.FETCH_SIGN_IN_REQUEST,
});

export const fetchSignInFailure = (error) => ({
  payload: { error },
  type: actionTypes.FETCH_SIGN_IN_FAILURE,
});

export const fetchSignInSuccess = payload => ({
  payload,
  type: actionTypes.FETCH_SIGN_IN_SUCCESS,
});

// thunks

export const fetchSignIn = formData => {
  const thunk = dispatch => {

    dispatch(fetchSignInRequest);

    return api.login.fetchSignIn(formData)
      .then( response => {
        const user = response && {
          id: response._id,
          email: response.email,
          displayName: response.displayName,
          token: response.token,
        }
        dispatch(fetchSignInSuccess(user));
        setAuthorizationToken(user.token);
        dispatch(replace(PAGE_HOME))
        return user;
      })
      .catch( error => {
        dispatch(fetchSignInFailure(error))
      })
  };

  thunk.type = actionTypes.FETCH_SIGN_IN;
  return thunk;
};

export default fetchSignIn;
