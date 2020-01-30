export const rateData = {
  onEditInputAction: jest.fn(),
  popUpAction: jest.fn(),
  ratings: {
    starRateInput: 0,
    feedbackInput: '',
    accommodationId: '',
    ratingError: null,
    submitSucces: false,
  },
  submitRatingAction: jest.fn(),
};

export const mapStateToPropsMockData = {
  ratings: {
    RatesAccommodation: {
      starRateInput: 0,
      feedbackInput: '',
      accommodationId: '',
      ratingError: null,
      submitSucces: false,
    },
  },
};

export const mockActionData = {
  inputDataMock: {
    type: 'any_action',
    payload: 'any_data',
  },
  initialState: {
    RatesAccommodation: {
      starRateInput: 0,
      feedbackInput: '',
      accommodationId: '',
      ratingError: null,
      submitSucces: false,
    },
  },
  addNewRateMessage: {
    RatesAccommodation: {
      starRateInput: 0,
      feedbackInput: 'I like the accommodation',
      accommodationId: '',
      ratingError: null,
      submitSucces: false,
    },
  },
  submitRateSuccessMock: [
    {
      payload: 'I am data',
      type: 'ADD_ACCOMMODATION_RATE_INPUT',
    },
    {
      payload: { submitSucces: true },
      type: 'RATE_ACCOMMODATION_SUCCESS',
    },
  ],
  successfullySendRateFeedback: {
    RatesAccommodation: {
      starRateInput: 0,
      feedbackInput: '',
      accommodationId: '',
      ratingError: null,
      submitSucces: true,
    },
  },
  errorRejectSendRateFeedback: {
    RatesAccommodation: {
      starRateInput: 0,
      feedbackInput: '',
      accommodationId: '',
      ratingError: 'Your have submit feedback already',
      submitSucces: false,
    },
  },
};
