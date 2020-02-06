import apiCall from '../../../helpers/apiCall';
import { MARK_ALL_AS_READ_ERROR, MARK_ALL_AS_READ_SUCCESS } from '../../actionTypes/notificationActionTypes';

const markAllAsRead = (notificationIds) => async (dispatch) => {
  const API_URL = '/notifications/markRead';
  const HEADERS_REQUEST = {
    token: localStorage.getItem('token'),
  };

  try {
    const markAllAsReadData = await apiCall.patch(API_URL, { notificationIds }, { headers: HEADERS_REQUEST });
    return dispatch({
      type: MARK_ALL_AS_READ_SUCCESS,
      payload: markAllAsReadData.data,
    });
  } catch (error) {
    return dispatch({
      type: MARK_ALL_AS_READ_ERROR,
      payload: error.response.data,
    });
  }
};

export default markAllAsRead;
