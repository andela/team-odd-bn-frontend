import openSingleBookingReducer from '../../../redux/reducers/bookings/viewSingleBooking';
import {
  getSingleBookingAction,
  getSingleBookingErrorAction,
  getSingleBookingApiAction,
  openModalAction,
} from '../../../__mocks__/booking/booking';

describe('Get single booking reducer', () => {
  it('Should act on GET_SINGLE_BOOKINGS_SUCCESS', () => {
    const triggerState = openSingleBookingReducer({}, getSingleBookingAction);
    expect(triggerState).toEqual({
      payload: getSingleBookingAction.payload,
    });
  });
  it('Should act on GET_SINGLE_BOOKINGS_ERROR', () => {
    const triggerState = openSingleBookingReducer({}, getSingleBookingErrorAction);
    expect(triggerState).toEqual({
      payload: getSingleBookingErrorAction.payload,
    });
  });
  it('Should act on OPEN_SINGLE_BOOKING', () => {
    const triggerState = openSingleBookingReducer({}, openModalAction);
    expect(triggerState).toEqual({
      openSingleBooking: openModalAction.payload,
    });
  });
});
