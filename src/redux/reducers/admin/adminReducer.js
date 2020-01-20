import {
  ASSIGN_ROLE_SUCCESS,
  GET_ALL_ROLES,
  ADMIN_ERROR,
  NEW_ROLE_INPUT,
} from '../../actionTypes/adminActionTypes';

const initialState = {
  error: null,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASSIGN_ROLE_SUCCESS:
      return {
        ...state,
        payload: action.payload,
      };
    case GET_ALL_ROLES:
      return { ...state, allRoles: action.allRoles };
    case ADMIN_ERROR:
      return { ...state, error: action.error };
    case NEW_ROLE_INPUT:
      return { ...state, newRoleId: action.newRoleId };
    default:
      return state;
  }
};

export default adminReducer;
