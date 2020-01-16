import requestsReducers from '../../../redux/reducers/tripReducers/requestsReducers';
import initialState from '../../../redux/store/initialState';
import {
  signupSuccessAction, signupInputAction, signupErrorAction, spinnerStatusAction,
} from '../../../__mocks__/auth/authMock';


describe('Signup Tests ', () => {
  it('Should handle signup success', () => {
    const newState = requestsReducers(initialState.trips.requests, {
      type: 'FETCH_REQUESTS_SUCCESS',
      payload: {
        message: 'Updated your password successful',
      },
    });
    expect(newState).toEqual({
      requestCommentsData: {},
      requestsData: { message: 'Updated your password successful' },
      requestsError: {},
      singleRequestData: {},

    });
  });
  it('Should handle signup success', () => {
    const newState = requestsReducers(initialState.trips.requests, {
      type: 'FETCH_SINGLE_REQUEST_SUCCESS',
      payload: {
        message: 'Updated your password successful',
      },
    });
    expect(newState).toEqual({
      requestCommentsData: {},
      requestsData: [],
      requestsError: {},
      singleRequestData: { message: 'Updated your password successful' },

    });
  });
  it('Should handle signup success', () => {
    const newState = requestsReducers(initialState.trips.requests, {
      type: 'FETCH_COMMENTS_SUCCESS',
      payload: {
        message: 'Updated your password successful',
      },
    });
    expect(newState).toEqual({
      requestCommentsData: { message: 'Updated your password successful' },
      requestsData: [],
      requestsError: {},
      singleRequestData: {},

    });
  });
  it('Should update signup error', () => {
    const newState = requestsReducers(initialState.trips.requests, {
      type: 'FETCH_REQUESTS_ERROR',
      payload: {
        message: 'Updated your password successful',
      },
    });
    expect(newState).toEqual({
      requestCommentsData: { },
      requestsData: [],
      requestsError: { message: 'Updated your password successful' },
      singleRequestData: {},

    });
  });
});
