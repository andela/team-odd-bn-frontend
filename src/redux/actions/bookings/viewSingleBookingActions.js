import {
  OPEN_SINGLE_BOOKING,
  GET_SINGLE_BOOKINGS_SUCCESS,
  GET_SINGLE_BOOKINGS_ERROR,
} from '../../actionTypes/bookingActionTypes';
import apiCall from '../../../helpers/apiCall';

// eslint-disable-next-line import/prefer-default-export
export const openSingleBooking = (payload) => ({
  type: OPEN_SINGLE_BOOKING,
  payload,
});

export const getSingleBooking = (id) => async (dispatch) => {
  const API_URL = `/bookings/${id}`;
  const HEADERS_REQUEST = {
    token: localStorage.getItem('token'),
  };
  try {
    const getSingleBookingData = await apiCall.get(API_URL, {
      headers: HEADERS_REQUEST,
    });

    dispatch({
      type: GET_SINGLE_BOOKINGS_SUCCESS,
      payload: getSingleBookingData.data,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_BOOKINGS_ERROR,
      payload: error.response.data,
    });
  }
};
