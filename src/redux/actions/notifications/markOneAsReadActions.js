import apiCall from '../../../helpers/apiCall';
import { MARK_ONE_AS_READ_ERROR, MARK_ONE_AS_READ_SUCCESS } from '../../actionTypes/notificationActionTypes';

const markOneAsRead = (notificationId) => async (dispatch) => {
  const API_URL = '/notifications/markRead';
  const HEADERS_REQUEST = {
    token: localStorage.getItem('token'),
  };

  try {
    const markOneAsReadData = await apiCall.patch(API_URL, { notificationIds: [notificationId] }, { headers: HEADERS_REQUEST });
    return dispatch({
      type: MARK_ONE_AS_READ_SUCCESS,
      payload: markOneAsReadData.data,
    });
  } catch (error) {
    return dispatch({
      type: MARK_ONE_AS_READ_ERROR,
      payload: error.response.data,
    });
  }
};

export default markOneAsRead;
