import * as types from '../actionTypes/ratesActionTypes';

const initialState = {
  RatesAccommodation: {
    starRateInput: 0,
    feedbackInput: '',
    accommodationId: '',
    ratingError: null,
    submitSucces: false,
  },
};

const addRateProfileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_ACCOMMODATION_RATE_INPUT:
      return {
        ...state, RatesAccommodation: { ...state.RatesAccommodation, ...payload },
      };

    case types.RATE_ACCOMMODATION_SUCCESS:
      return {
        ...state, RatesAccommodation: { ...state.RatesAccommodation, ...payload },
      };

    case types.RATE_ACCOMMODATION_ERROR:
      return {
        ...state, RatesAccommodation: { ...state.RatesAccommodation, ...payload },
      };

    default:
      return state;
  }
};

export default addRateProfileReducer;
