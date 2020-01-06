import { SIGNOUT_FAILURE, SIGNOUT_SUCCESS } from '../actionTypes/signoutActionTypes';
import { SIGNIN_SUCCESS } from '../actionTypes/authActionTypes';
import apiCall from '../../helpers/apiCall';

const signoutUser = () => async (dispatch) => {
  const API_URL = 'users/logout';
  const HEADERS_REQUEST = {
    token: localStorage.getItem('token'),
  };
  try {
    await apiCall.patch(API_URL, '', { headers: HEADERS_REQUEST });
    await localStorage.clear();
    dispatch({
      type: SIGNIN_SUCCESS,
      payload: { data: '' },
    });
    return dispatch({
      type: SIGNOUT_SUCCESS,
      payload: true,
    });
  } catch (error) {
    return dispatch({
      type: SIGNOUT_FAILURE,
      payload: false,
    });
  }
};

export default signoutUser;
