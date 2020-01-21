import approveRequestsReducers from '../../redux/reducers/tripReducers/approveRequestsReducers';

import {
  SPINNER_STATUS, APPROVE_REQUEST_ERROR, APPROVE_REQUEST_SUCCESS,
} from '../../redux/actionTypes/tripsActionTypes';

describe('Approval Requests Reducer Test Suite ', () => {
  it('Should return default state', () => {
    const initialState = approveRequestsReducers(undefined, {});
    expect(initialState).toEqual({
      approveRequestMessage: null,
      approveRequestError: null,
      spinner: null,
      spinnnerError: null,
    });
  });

  it('Should handle AVAIL_REQUESTS_SUCCESS ', () => {
    const successAction = {
      type: APPROVE_REQUEST_SUCCESS,
      payload: {
        message: 'Requests has been approved successfully!',
      },
    };
    const returnedState = approveRequestsReducers(undefined, successAction);
    expect(returnedState).toEqual({
      approveRequestMessage: successAction.payload,
      approveRequestError: null,
      spinner: null,
      spinnnerError: null,
    });
  });

  it('Should handle APPROVE_REQUEST_ERROR ', () => {
    const successAction = {
      type: APPROVE_REQUEST_ERROR,
      payload: {
        message: 'Unable to approve this request!',
      },
    };
    const returnedState = approveRequestsReducers(undefined, successAction);
    expect(returnedState).toEqual({
      approveRequestMessage: {
        message: 'Unable to approve this request!',
      },
      approveRequestError: null,
      spinner: null,
      spinnnerError: null,
    });
  });

  it('Should handle SPINNER_STATUS ', () => {
    const successAction = {
      type: SPINNER_STATUS,
      payload: 'Loading!',
    };
    const returnedState = approveRequestsReducers(undefined, successAction);
    expect(returnedState).toEqual({
      approveRequestError: null,
      approveRequestMessage: null,
      spinner: successAction.payoad,
      spinnnerError: null,
    });
  });
});
