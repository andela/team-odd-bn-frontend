import getAllBookingReducer from '../../redux/reducers/bookings/getAllBookingReducers';

import {
GET_ALL_BOOKINGS_ERROR, GET_ALL_BOOKINGS_SUCCESS
} from '../../redux/actionTypes/bookingActionTypes';

describe('Get all Bookings Reducer Test Suite ', () => {
  it('Should return default state', () => {
    const initialState = getAllBookingReducer(undefined, {});
    expect(initialState).toEqual({
      allBookings: null,
      allBookingsError: null,
    });
  });

  it('Should handle GET_ALL_BOOKINGS_SUCCESS ', () => {
    const successAction = {
      type: GET_ALL_BOOKINGS_SUCCESS,
      payload: {
        message: 'All bookings have been retrieved successfully!',
      },
    };
    const returnedState = getAllBookingReducer(undefined, successAction);
    expect(returnedState).toEqual({
      allBookings: successAction.payload,
      allBookingsError: null,
    });
  });

  it('Should handle GET_ALL_BOOKINGS_ERROR ', () => {
    const successAction = {
      type: GET_ALL_BOOKINGS_ERROR,
      payload: {
        message: 'Unable to retrieve all bookings!',
      },
    };
    const returnedState = getAllBookingReducer(undefined, successAction);
    expect(returnedState).toEqual({
      allBookings: null,
      allBookingsError: successAction.payload,
    });
  });
});
