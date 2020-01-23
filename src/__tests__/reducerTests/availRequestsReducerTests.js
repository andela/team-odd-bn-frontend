import availRequestsReducers from '../../redux/reducers/tripReducers/availRequestsReducers';

import {
  SPINNER_STATUS, AVAIL_REQUESTS_SUCCESS, AVAIL_REQUESTS_ERROR,
} from '../../redux/actionTypes/tripsActionTypes';

describe('Avail Requests Reducer Test Suite ', () => {
  it('Should return default state', () => {
    const initialState = availRequestsReducers(undefined, {});
    expect(initialState).toEqual({
      allRequests: null,
      allRequestsError: null,
      spinner: null,
      spinnnerError: null,
    });
  });

  it('Should handle AVAIL_REQUESTS_SUCCESS ', () => {
    const successAction = {
      type: AVAIL_REQUESTS_SUCCESS,
      payload: {
        message: 'All requests have been retrieved successfully!',
      },
    };
    const returnedState = availRequestsReducers(undefined, successAction);
    expect(returnedState).toEqual({
      allRequests: successAction.payload,
      allRequestsError: null,
      spinner: null,
      spinnnerError: null,
    });
  });

  it('Should handle AVAIL_REQUESTS_ERROR ', () => {
    const successAction = {
      type: AVAIL_REQUESTS_ERROR,
      payload: {
        message: 'Unable to retrieve all requests!',
      },
    };
    const returnedState = availRequestsReducers(undefined, successAction);
    expect(returnedState).toEqual({
      allRequests: {
        message: 'Unable to retrieve all requests!',
      },
      allRequestsError: null,
      spinner: null,
      spinnnerError: null,
    });
  });

  it('Should handle SPINNER_STATUS ', () => {
    const successAction = {
      type: SPINNER_STATUS,
      payload: 'Loading!',
    };
    const returnedState = availRequestsReducers(undefined, successAction);
    expect(returnedState).toEqual({
      allRequests: null,
      allRequestsError: null,
      spinner: successAction.payoad,
      spinnnerError: null,
    });
  });
});
