import { SIGNOUT_FAILURE, SIGNOUT_SUCCESS } from '../actionTypes/signoutActionTypes';

const signoutUser = (state = {}, action) => {
  switch (action.type) {
    case SIGNOUT_SUCCESS:
      return {
        ...state,
        isLogged: action.payload,
      };

    case SIGNOUT_FAILURE:
      return {
        ...state,
        isLogged: action.payload,
      };

    default:
      return state;
  }
};

export default signoutUser;
