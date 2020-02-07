import * as types from '../../redux/actionTypes/ratesActionTypes';
import rateReducers from '../../redux/reducers/rateReducers';
import { mockActionData } from '../../__mocks__/RatingMocks/rates';


describe('Expect to mock rate reducer', () => {
  const { initialState } = mockActionData;
  it('should add submission input to the store', () => {
    const input = {
      type: types.ADD_ACCOMMODATION_RATE_INPUT,
      payload: {
        feedbackInput: 'I like the accommodation',
      },
    };
    const result = rateReducers(initialState, input);
    expect(result).toEqual(mockActionData.addNewRateMessage);
  });

  it('should submit rate input to the store', () => {
    const input = {
      type: types.RATE_ACCOMMODATION_SUCCESS,
      payload: {
        submitSucces: true,
      },
    };
    const result = rateReducers(initialState, input);
    expect(result).toEqual(mockActionData.successfullySendRateFeedback);
  });

  it('should throw rate submit error to the store', () => {
    const input = {
      type: types.RATE_ACCOMMODATION_ERROR,
      payload: {
        ratingError: 'Your have submit feedback already',
      },
    };
    const result = rateReducers(initialState, input);
    expect(result).toEqual(mockActionData.errorRejectSendRateFeedback);
  });
});
