import * as types from '../actionTypes/accommodationActionTypes';
import apiCall from '../../helpers/apiCall';
import { notificationError } from '../../helpers/notificationPopUp';

export const returnData = (actioName, data) => ({
  type: actioName,
  payload: data,
});


const singleAccommodation = (id) => async (dispatch) => {
  const HEADERS_REQUEST = {
    token: localStorage.getItem('token'),
  };
  const API_URL = `/accommodations/${id}`;
  try {
    const getaccomodations = await apiCall.get(API_URL, { headers: HEADERS_REQUEST });
    const { data } = await getaccomodations.data;
    return dispatch(returnData(types.VIEW_SINGLE_ACCOMMODATION_SUCCESS, data));
  } catch (error) {
    if (error.response) {
      const { message } = error.response.data;
      notificationError(message);
      return dispatch(returnData(types.VIEW_SINGLE_ACCOMMODATION_ERROR, [message]));
    }
    if (error.request) {
      notificationError("oops! You don't have stable network");
      return dispatch(returnData(types.VIEW_SINGLE_ACCOMMODATION_ERROR, ['Network Error']));
    }
    notificationError('oops! Server is down');
    return dispatch(returnData(types.VIEW_SINGLE_ACCOMMODATION_ERROR, ['Server Error']));
  }
};

export default singleAccommodation;
