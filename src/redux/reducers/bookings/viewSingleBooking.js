import {
  OPEN_SINGLE_BOOKING, GET_SINGLE_BOOKINGS_SUCCESS, GET_SINGLE_BOOKINGS_ERROR,
} from '../../actionTypes/bookingActionTypes';

const initialState = {
  openSingleBooking: false,
};

const openSingleBookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SINGLE_BOOKING:
      return {
        openSingleBooking: action.payload,
      };
    case GET_SINGLE_BOOKINGS_SUCCESS:
      return {
        ...state,
        payload: action.payload,
      };
    case GET_SINGLE_BOOKINGS_ERROR:
      return {
        payload: action.payload,
      };

    default:
      return state;
  }
};

export default openSingleBookingReducer;
