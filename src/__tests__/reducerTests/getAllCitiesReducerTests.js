import getAllCitiesReducer from '../../redux/reducers/getAllCitiesReducers';

import {
  GET_ALL_CITIES_ERROR,
  GET_ALL_CITIES_SUCCESS,
} from '../../redux/actionTypes/tripsActionTypes';

describe('Get all Cities Reducer Test Suite ', () => {
  it('Should return default state', () => {
    const initialState = getAllCitiesReducer(undefined, {});
    expect(initialState).toEqual({
      cities: null,
      citiesError: null,
    });
  });

  it('Should handle GET_ALL_CITIES_SUCCESS ', () => {
    const successAction = {
      type: GET_ALL_CITIES_SUCCESS,
      payload: {
        message: 'All cities have been retrieved successfully!',
      },
    };
    const returnedState = getAllCitiesReducer(undefined, successAction);
    expect(returnedState).toEqual({
      cities: successAction.payload,
      citiesError: null,
    });
  });

  it('Should handle GET_ALL_CITIES_ERROR ', () => {
    const successAction = {
      type: GET_ALL_CITIES_ERROR,
      payload: {
        message: 'Unable to retrieve all cities!',
      },
    };
    const returnedState = getAllCitiesReducer(undefined, successAction);
    expect(returnedState).toEqual({
      cities: null,
      citiesError: successAction.payload,
    });
  });
});
