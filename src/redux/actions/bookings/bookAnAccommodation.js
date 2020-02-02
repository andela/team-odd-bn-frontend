import { BOOK_ACCOMMODATION_SUCCESS, BOOK_ACCOMMODATION_ERROR, UPDATE_INPUT } from '../../actionTypes/bookingActionTypes';
import apiCall from '../../../helpers/apiCall';
import {
  notificationSuccess, notificationError,
} from '../../../helpers/notificationPopUp';

export const bookAccommodationAction = (data) => async (dispatch) => {
  const API_URL = '/bookings';
  const HEADERS_REQUEST = {
    token: localStorage.getItem('token'),
  };
  try {
    const bookAccommodationSuccess = await apiCall
      .post(API_URL, data, { headers: HEADERS_REQUEST });
    notificationSuccess(bookAccommodationSuccess.data.message);
    dispatch({
      type: BOOK_ACCOMMODATION_SUCCESS,
      payload: bookAccommodationSuccess.data,
    });
  } catch (error) {
    notificationError('Ooops wrong details');
    dispatch({
      type: BOOK_ACCOMMODATION_ERROR,
      payload: error.response.data,
    });
  }
};

export const updateBookAccommodationInput = (data) => ({
  type: UPDATE_INPUT,
  payload: data,
});
