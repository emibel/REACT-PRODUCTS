import initialState from 'modules/store/initialState.json';
import actionTypes from 'modules/session/constants';

const session = (
  state = initialState.session,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.FETCH_SIGN_IN_FAILURE:
    case actionTypes.SIGN_OUT_SUCCESS:
    case actionTypes.FETCH_SIGN_IN_REQUEST:
    case actionTypes.FETCH_REMOVE_SESSION_SUCCESS:
      return null;

    case actionTypes.FETCH_SIGN_IN_SUCCESS:
      return {...payload};

    default:
      return state;
  }
};

export default session;
