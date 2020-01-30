import likeAndDislike from '../../../redux/reducers/accommodation/likeAndDislikeReducer';
import * as types from '../../../redux/actionTypes/accommodationActionTypes';

const initialState = {
  accommodations: [],
  accommodationErrors: [],
  allLikes: [],
};

const state = initialState;


describe('Expect to mock accommodation', () => {
  it('Should mock likes successfully', () => {
    const action = {
      type: types.LIKES_SUCCESS,
      payload: [
        {
          likeCounter: 1,
          dislikeCounter: 0,
        },
      ],
    };
    const likesDislikes = likeAndDislike(state, action);

    expect(likesDislikes).toEqual({
      accommodations: [],
      accommodationErrors: [],
      allLikes: [],
      payload: [{ likeCounter: 1, dislikeCounter: 0 }],
    });
  });

  it('Should mock dislikes successfully', () => {
    const action = {
      type: types.DISLIKES_SUCCESS,
      payload: [
        {
          likeCounter: 1,
          dislikeCounter: 0,
        },
      ],
    };
    const likesDislikes = likeAndDislike(state, action);

    expect(likesDislikes).toEqual({
      accommodations: [],
      accommodationErrors: [],
      allLikes: [],
      payload: [{ likeCounter: 1, dislikeCounter: 0 }],
    });
  });

  it('Should mock likes successfully', () => {
    const action = {
      type: types.LIKE_AND_DISLIKES_ERROR,
      likeDislikeError: undefined,
    };
    const likesDislikes = likeAndDislike(state, action);

    expect(likesDislikes).toEqual({
      accommodations: [],
      accommodationErrors: [],
      allLikes: [],
      likeDislikeError: undefined,
    });
  });
});
