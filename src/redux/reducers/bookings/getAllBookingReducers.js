import {
  GET_ALL_BOOKINGS_ERROR, GET_ALL_BOOKINGS_SUCCESS,
} from '../../actionTypes/bookingActionTypes';

const initialState = {
  allBookings: null,
  allBookingsError: null,
};

const getAllBookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BOOKINGS_SUCCESS:
      return {
        ...state,
        allBookings: action.payload,
        allBookingsError: null,
      };
    case GET_ALL_BOOKINGS_ERROR:
      return {
        ...state,
        allBookings: null,
        allBookingsError: action.payload,
      };
    default:
      return state;
  }
};

export default getAllBookingsReducer;
