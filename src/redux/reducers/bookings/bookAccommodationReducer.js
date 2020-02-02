import { BOOK_ACCOMMODATION_SUCCESS, BOOK_ACCOMMODATION_ERROR, UPDATE_INPUT } from '../../actionTypes/bookingActionTypes';

const initialState = {};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case BOOK_ACCOMMODATION_SUCCESS:
      return {
        ...state,
        bookAccommodationData: payload,
      };
    case BOOK_ACCOMMODATION_ERROR:
      return {
        ...state,
        bookAccommodationError: payload,
      };
    case UPDATE_INPUT:
      return {
        ...state,
        bookAccommodationInput: {
          ...state.bookAccommodationInput,
          ...payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;
