import apiCall from '../../helpers/apiCall';
import { GET_ALL_USERS_SUCCESS, GET_ALL_USERS_ERROR } from '../actionTypes/profileActionTypes';

export const getManagers = () => async (dispatch) => {
  const API_URL = '/users/all';
  const HEADERS_REQUEST = {
    token: localStorage.getItem('token'),
  };
  try {
    const getAllUsers = await apiCall.get(API_URL, { headers: HEADERS_REQUEST });
    return dispatch({
      type: GET_ALL_USERS_SUCCESS,
      payload: getAllUsers.data,
    });
  } catch (error) {
    return dispatch({
      type: GET_ALL_USERS_ERROR,
      payload: error.response.data,
    });
  }
};

export default getManagers;
