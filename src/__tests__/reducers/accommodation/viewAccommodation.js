import viewAccommodationReducer from '../../../redux/reducers/accommodation/viewAccomodationReducer';
import * as types from '../../../redux/actionTypes/accommodationActionTypes';
import { accommodationReducer } from '../../../__mocks__/accommodation/viewAccommodation';

const initialState = {
  accommodations: [],
  accommodationErrors: [],
  allLikes: [],
};

const state = initialState;
const {
  successAccomodationReducer,
  errorAccomodationReducer,
} = accommodationReducer;

describe('Expect to mock accommodation', () => {
  it('Should mock accommodation successfully', () => {
    const action = {
      type: types.VIEW_ALL_ACCOMMODATION_SUCCESS,
      payload: ['data'],
    };
    const success = viewAccommodationReducer(state, action);
    expect(success).toEqual(successAccomodationReducer);
  });

  it('Should mock accommodation successfully', () => {
    const action = {
      type: types.VIEW_ALL_ACCOMMODATION_ERROR,
      payload: ['Error'],
    };
    const error = viewAccommodationReducer(state, action);
    expect(error).toEqual(errorAccomodationReducer);
  });

  it('Should mock likes and dislikes successfully', () => {
    const action = {
      type: types.VIEW_ALL_LIKES_SUCCESS,
      payload: [
        {
          likeCounter: 1,
          dislikeCounter: 0,
        },
      ],
    };
    const likesDislikes = viewAccommodationReducer(state, action);

    expect(likesDislikes).toEqual({
      accommodations: [],
      accommodationErrors: [],
      allLikes: { 0: { likeCounter: 1, dislikeCounter: 0 } },
    });
  });
});
