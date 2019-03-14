import actionTypes from 'modules/user/constants';

// Actions

export const addGoogleUserFailure = (error) => ({
  payload: { error },
  type: actionTypes.FETCH_ADD_USER_FAILURE,
});

export const addGoogleUserSuccess = payload => ({
  payload,
  type: actionTypes.FETCH_ADD_USER_SUCCESS,
});

// thunks

export const addGoogleUser = response => {
  const thunk = dispatch => {

    const user = response && {
      id: response.w3.Eea,
      photo: response.w3.Paa,
      email: response.w3.U3,
      fullName: response.w3.ig,
      firstName: response.w3.ofa,
      lastName: response.w3.wea,
      type: 'GOOGLE',
    }

    dispatch(addGoogleUserSuccess(user));
    return user;
  };

  thunk.type = actionTypes.FETCH_ADD_USER;
  return thunk;
};

export default addGoogleUser;
