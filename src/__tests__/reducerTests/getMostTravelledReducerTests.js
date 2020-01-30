import getMostTravelledReducer from '../../redux/reducers/accommodation/getMostTravelledReducer';

import {
  GET_MOST_TRAVELLED_ERROR, GET_MOST_TRAVELLED_SUCCESS,
} from '../../redux/actionTypes/accommodationActionTypes';

describe('Get Most Travelled Destination Reducer Test Suite ', () => {
  it('Should return default state', () => {
    const initialState = getMostTravelledReducer(undefined, {});
    expect(initialState).toEqual({
      mostTravelled: null,
      mostTravelledError: null,
    });
  });

  it('Should handle GET_MOST_TRAVELLED_SUCCESS ', () => {
    const successAction = {
      type: GET_MOST_TRAVELLED_SUCCESS,
      payload: {
        message: 'Most Travelled Destination has been retrieved successfully!',
      },
    };
    const returnedState = getMostTravelledReducer(undefined, successAction);
    expect(returnedState).toEqual({
      mostTravelled: successAction.payload,
      mostTravelledError: null,
    });
  });

  it('Should handle GET_MOST_TRAVELLED_ERROR ', () => {
    const successAction = {
      type: GET_MOST_TRAVELLED_ERROR,
      payload: {
        message: 'Unable to retrieve most travelled destination!',
      },
    };
    const returnedState = getMostTravelledReducer(undefined, successAction);
    expect(returnedState).toEqual({
      mostTravelled: null,
      mostTravelledError: successAction.payload,
    });
  });
});
