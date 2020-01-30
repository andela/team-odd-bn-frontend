import * as types from '../../actionTypes/accommodationActionTypes';

const initialState = {
  singleAccommodation: [],
  singleAccommodationError: [],
  userProfile: [],
};

const singleAccommodationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.VIEW_SINGLE_ACCOMMODATION_SUCCESS:
      return {
        ...state,
        singleAccommodation: [...payload],
      };

    case types.VIEW_SINGLE_ACCOMMODATION_ERROR:
      return {
        ...state,
        singleAccommodationError: payload,
      };

    default:
      return state;
  }
};

export default singleAccommodationReducer;
