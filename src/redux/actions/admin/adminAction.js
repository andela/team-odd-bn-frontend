import {
  ASSIGN_ROLE_SUCCESS, GET_ALL_ROLES, ADMIN_ERROR, NEW_ROLE_INPUT,
} from '../../actionTypes/adminActionTypes';
import { PAGINATION } from '../../actionTypes/profileActionTypes';
import {
  notificationError,
  notificationSuccess,
} from '../../../helpers/notificationPopUp';
import apiCall from '../../../helpers/apiCall';

const emptyError = {
  type: ADMIN_ERROR,
  status: 'success',
  error: {},
};
const triggerError = (error) => ({
  type: ADMIN_ERROR,
  status: 'error',
  error: error.response.data,
});
export const getRolesAction = () => async (dispatch) => {
  const HEADERS_REQUEST = {
    token: localStorage.getItem('token'),
  };
  const roles = await apiCall.get('/users/role', {
    headers: HEADERS_REQUEST,
  });
  dispatch({
    type: GET_ALL_ROLES,
    allRoles: roles.data,
  });
  dispatch(emptyError);
};
export const assignRole = (roleId, email) => async (dispatch) => {
  const HEADERS_REQUEST = {
    token: localStorage.getItem('token'),
  };
  try {
    const assignNewRole = await apiCall.put(`/users/role/${roleId}`, { email }, {
      headers: HEADERS_REQUEST,
    });
    dispatch({
      type: ASSIGN_ROLE_SUCCESS,
      payload: assignNewRole.data,
    });
    notificationSuccess(assignNewRole.data.message);
    dispatch(emptyError);
  } catch (error) {
    dispatch(triggerError(error));
    notificationError(error.response.data.message);
  }
};

export const newRoleInput = (newRoleId) => ({
  type: NEW_ROLE_INPUT,
  newRoleId,
});


export const paginationAction = (data) => {
  if (data.data.length < data.paginationEnd) {
    data.paginationStart = 0;
    data.paginationEnd = 5;
  }
  if (data.paginationEnd < 5) {
    data.paginationStart = data.data.length - 5;
    data.paginationEnd = data.data.length;
  }
  return {
    type: PAGINATION,
    payload: data,
  };
};
