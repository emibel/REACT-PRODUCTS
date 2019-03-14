import actionTypes from 'modules/session/constants';

// Actions
export const removeUserRequest = () => ({
  payload: {},
  type: actionTypes.FETCH_REMOVE_USER_REQUEST,
});

export const removeUserFailure = error => ({
  payload: { error },
  type: actionTypes.FETCH_REMOVE_USER_FAILURE,
});

export const removeUserSuccess = payload => ({
  payload,
  type: actionTypes.FETCH_REMOVE_USER_SUCCESS,
});

// thunks

export const removeUser = () => {
  const thunk = dispatch => {
    dispatch(removeUserSuccess());
    return;
  };

  thunk.type = actionTypes.FETCH_REMOVE_USER;
  return thunk;
};

export default removeUser;
