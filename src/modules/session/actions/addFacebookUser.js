import actionTypes from 'modules/user/constants';

// Actions

export const addFacebookUserFailure = (error) => ({
  payload: { error },
  type: actionTypes.FETCH_ADD_USER_FAILURE,
});

export const addFacebookUserSuccess = payload => ({
  payload,
  type: actionTypes.FETCH_ADD_USER_SUCCESS,
});

// thunks

export const addFacebookUser = response => {
  const thunk = dispatch => {

    if (!response.id) {
      dispatch(addFacebookUserFailure());
      return null;
    }

    const user = {
      id: response.id,
      photo: response.picture && response.picture.data && response.picture.data.url,
      email: response.email,
      fullName: response.name,
      type: 'FACEBOOK',
    }

    dispatch(addFacebookUserSuccess(user));
    return user;
  };

  thunk.type = actionTypes.FETCH_ADD_USER;
  return thunk;
};

export default addFacebookUser;
