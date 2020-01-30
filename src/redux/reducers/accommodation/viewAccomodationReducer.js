import * as types from '../../actionTypes/accommodationActionTypes';

const initialState = {
  accommodations: [],
  accommodationErrors: [],
  allLikes: [],
};

const viewAcommodationsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.VIEW_ALL_ACCOMMODATION_SUCCESS:
      return {
        ...state,
        accommodations: [...payload],
      };
    case types.VIEW_ALL_ACCOMMODATION_ERROR:
      return {
        ...state,
        accommodationErrors: [...payload],
      };
    case types.VIEW_ALL_LIKES_SUCCESS:
      return {
        ...state,
        allLikes: [...payload],
      };
    default:
      return state;
  }
};

export default viewAcommodationsReducer;
