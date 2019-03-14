import api from 'api';
import actionTypes from 'modules/session/constants';

// Actions
export const fetchSignUpRequest = () => ({
  payload: {},
  type: actionTypes.FETCH_SIGN_UP_REQUEST,
});

export const fetchSignUpFailure = (error) => ({
  payload: {error},
  type: actionTypes.FETCH_SIGN_UP_FAILURE,
});

export const fetchSignUpSuccess = payload => ({
  payload,
  type: actionTypes.FETCH_SIGN_UP_SUCCESS,
});

// thunks

export const fetchSignUp = formData => {
  const thunk = dispatch => {

    dispatch(fetchSignUpRequest);

    return api.login.fetchSignUp(formData)
      .then(() => {
        dispatch(fetchSignUpSuccess());
      })
      .catch( error => {
        dispatch(fetchSignUpFailure(error))
      })
  };

  thunk.type = actionTypes.FETCH_SIGN_UP;
  return thunk;
};

export default fetchSignUp;
