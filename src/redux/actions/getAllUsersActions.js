import apiCall from '../../helpers/apiCall';
import { GET_ALL_USERS_SUCCESS, GET_ALL_USERS_ERROR } from '../actionTypes/profileActionTypes';

export const getManagers = () => async (dispatch) => {
  const HEADERS_REQUEST = {
    token: localStorage.getItem('token'),
  };
  try {
    const getAllUsers = await apiCall.get('/users/all', {
      headers: HEADERS_REQUEST,
    });
    dispatch({
      type: GET_ALL_USERS_SUCCESS,
      payload: getAllUsers.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_USERS_ERROR,
      payload: error.response.data,
    });
  }
};

export default getManagers;
