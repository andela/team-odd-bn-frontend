import bookAccommodationReducer from '../../../redux/reducers/bookings/bookAccommodationReducer';
import initialState from '../../../redux/store/initialState';
import {
  signupSuccessAction, signupInputAction, signupErrorAction, spinnerStatusAction,
} from '../../../__mocks__/auth/authMock';


describe('Book accommodation test', () => {
  it('Should handle booking success', () => {
    const newState = bookAccommodationReducer({}, {
      type: 'BOOK_ACCOMMODATION_SUCCESS',
      payload: {
        message: 'Updated your password successful',
      },
    });
    expect(newState).toEqual({
      bookAccommodationData: {
        message: 'Updated your password successful',
      },
    });
  });
  it('Should handle booking error', () => {
    const newState = bookAccommodationReducer({}, {
      type: 'BOOK_ACCOMMODATION_ERROR',
      payload: {
        message: 'Updated your password successful',
      },
    });
    expect(newState).toEqual({
      bookAccommodationError: {
        message: 'Updated your password successful',
      },
    });
  });
  it('Should handle updating accommodation input', () => {
    const newState = bookAccommodationReducer({}, {
      type: 'UPDATE_INPUT',
      payload: {
        message: 'Updated your password successful',
      },
    });
    expect(newState).toEqual({
      bookAccommodationInput: {
        message: 'Updated your password successful',
      },
    });
  });
});
