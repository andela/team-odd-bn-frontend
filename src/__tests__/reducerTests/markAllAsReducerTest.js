import markAllAsReadReducer from '../../redux/reducers/notificationsReducers/markAllAsReadReducer';
import {
  MARK_ALL_AS_READ_ERROR, MARK_ALL_AS_READ_SUCCESS,
} from '../../redux/actionTypes/notificationActionTypes';

describe('Mark All As Read Reducer Test Suite ', () => {
  it('Should return default state', () => {
    const initialState = markAllAsReadReducer(undefined, {});
    expect(initialState).toEqual({
      markAll: null,
      markAllError: null,
    });
  });

  it('Should handle MARK_ALL_AS_READ_SUCCESS ', () => {
    const successAction = {
      type: MARK_ALL_AS_READ_SUCCESS,
      payload: {
        message: 'All messages have been marked successfully!',
      },
    };
    const returnedState = markAllAsReadReducer(undefined, successAction);
    expect(returnedState).toEqual({
      markAll: successAction.payload,
      markAllError: null,

    });
  });

  it('Should handle MARK_ALL_AS_READ_ERROR ', () => {
    const successAction = {
      type: MARK_ALL_AS_READ_ERROR,
      payload: {
        message: 'Unable to mark all messages as read!',
      },
    };
    const returnedState = markAllAsReadReducer(undefined, successAction);
    expect(returnedState).toEqual({
      markAll: null,
      markAllError: successAction.payload,
    });
  });
});
