import markOneAsReadReducer from '../../redux/reducers/notificationsReducers/markOneAsReadReducer';
import {
  MARK_ONE_AS_READ_ERROR, MARK_ONE_AS_READ_SUCCESS,
} from '../../redux/actionTypes/notificationActionTypes';

describe('Mark One As Read Reducer Test Suite ', () => {
  it('Should return default state', () => {
    const initialState = markOneAsReadReducer(undefined, {});
    expect(initialState).toEqual({
      markOne: null,
      markOneError: null,
    });
  });

  it('Should handle MARK_ONE_AS_READ_SUCCESS ', () => {
    const successAction = {
      type: MARK_ONE_AS_READ_SUCCESS,
      payload: {
        message: 'Your message has been marked successfully!',
      },
    };
    const returnedState = markOneAsReadReducer(undefined, successAction);
    expect(returnedState).toEqual({
      markOne: successAction.payload,
      markOneError: null,

    });
  });

  it('Should handle MARK_ONE_AS_READ_ERROR ', () => {
    const successAction = {
      type: MARK_ONE_AS_READ_ERROR,
      payload: {
        message: 'Unable to mark the message as read!',
      },
    };
    const returnedState = markOneAsReadReducer(undefined, successAction);
    expect(returnedState).toEqual({
      markOne: null,
      markOneError: successAction.payload,
    });
  });
});
