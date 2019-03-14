import actionTypes from 'modules/session/constants';
import {replace} from 'react-router-redux';

// Actions
export const signOutRequest = () => ({
  payload: {},
  type: actionTypes.SIGN_OUT_REQUEST,
});

export const signOutFailure = (error) => ({
  payload: { error },
  type: actionTypes.SIGN_OUT_FAILURE,
});

export const signOutSuccess = payload => ({
  payload,
  type: actionTypes.SIGN_OUT_SUCCESS,
});

// thunks

export const signOut = () => {
  const thunk = dispatch => {

    dispatch(signOutRequest());
    dispatch(signOutSuccess());
    dispatch(replace('/sign-in'))
  };

  thunk.type = actionTypes.SIGN_OUT;
  return thunk;
};

export default signOut;
