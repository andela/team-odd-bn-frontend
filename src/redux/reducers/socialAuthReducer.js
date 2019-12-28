import { SOCIAL_AUTH_SUCCESS } from '../actionTypes/socialAuthActionType';

const socialAuth = (state = false, action) => {
  switch (action.type) {
    case SOCIAL_AUTH_SUCCESS:
      return {
        type: SOCIAL_AUTH_SUCCESS,
        payload: action.payload,
      };

    default:
      return state;
  }
};

export default socialAuth;
