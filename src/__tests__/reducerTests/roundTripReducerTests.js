import roundTripReducer from '../../redux/reducers/roundTripReducer';

import {
  SPINNER_STATUS,
  CREATE_ROUND_TRIP_ERROR,
  CREATE_ROUND_TRIP_SUCCESS,
} from '../../redux/actionTypes/tripsActionTypes';

describe('Round Trip Reducer Test Suite ', () => {
  it('Should return default state', () => {
    const initialState = roundTripReducer(undefined, {});
    expect(initialState).toEqual({
      roundTripMessage: null,
      roundTripError: null,
      spinner: null,
      spinnnerError: null,
    });
  });

  it('Should handle CREATE_ROUND_TRIP_SUCCESS ', () => {
    const successAction = {
      type: CREATE_ROUND_TRIP_SUCCESS,
      payload: {
        message: 'Round Trip request made successfully!',
      },
    };
    const returnedState = roundTripReducer(undefined, successAction);
    expect(returnedState).toEqual({
      roundTripMessage: successAction.payload,
      roundTripError: null,
      spinner: null,
      spinnnerError: null,
    });
  });

  it('Should handle CREATE_ROUND_TRIP_ERROR ', () => {
    const successAction = {
      type: CREATE_ROUND_TRIP_ERROR,
      payload: {
        message: 'Unable to create a round trip request!',
      },
    };
    const returnedState = roundTripReducer(undefined, successAction);
    expect(returnedState).toEqual({
      roundTripMessage: null,
      roundTripError: successAction.payload,
      spinner: null,
      spinnnerError: null,
    });
  });

  it('Should handle SPINNER_STATUS ', () => {
    const successAction = {
      type: SPINNER_STATUS,
      payload: 'Loading!',
    };
    const returnedState = roundTripReducer(undefined, successAction);
    expect(returnedState).toEqual({
      roundTripMessage: null,
      roundTripError: null,
      spinner: successAction.payoad,
      spinnnerError: null,
    });
  });
});
