import { GET_ALL_BOOKINGS_ERROR, GET_ALL_BOOKINGS_SUCCESS } from '../../actionTypes/bookingActionTypes';
import apiCall from '../../../helpers/apiCall';


export const getAllBookings = () => async (dispatch) => {
  const API_URL = '/bookings';
  const HEADERS_REQUEST = {
    token: localStorage.getItem('token'),
  };
  try {
    const getAllBookingsData = await apiCall.get(API_URL, { headers: HEADERS_REQUEST });
    dispatch({
      type: GET_ALL_BOOKINGS_SUCCESS,
      payload: getAllBookingsData.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_BOOKINGS_ERROR,
      payload: error.response.data,
    });
  }
};

export default getAllBookings;
