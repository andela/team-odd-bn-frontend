import apiCall from '../../../helpers/apiCall';
import { SPINNER_STATUS, GET_ALL_NOTIFICATIONS_ERROR, GET_ALL_NOTIFICATIONS_SUCCESS } from '../../actionTypes/notificationActionTypes';

export const updateSpinnerStatus = (value) => ({
  type: SPINNER_STATUS,
  spinner: value,
});

const getAllNotifications = () => async (dispatch) => {
  const API_URL = '/users/notification';
  const HEADERS_REQUEST = {
    token: localStorage.getItem('token'),
  };

  try {
    const getAllNotificationsData = await apiCall.get(API_URL, { headers: HEADERS_REQUEST });

    dispatch(updateSpinnerStatus(false));
    return dispatch({
      type: GET_ALL_NOTIFICATIONS_SUCCESS,
      payload: getAllNotificationsData.data.data,
    });
  } catch (error) {
    dispatch(updateSpinnerStatus(false));
    return dispatch({
      type: GET_ALL_NOTIFICATIONS_ERROR,
      payload: error.response.data,
    });
  }
};

export default getAllNotifications;
