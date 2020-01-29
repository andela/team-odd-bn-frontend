import getAllNotificationsReadReducer from '../../redux/reducers/notificationsReducers/getAllNotificationsReducer';
import {
  GET_ALL_NOTIFICATIONS_ERROR, GET_ALL_NOTIFICATIONS_SUCCESS
} from '../../redux/actionTypes/notificationActionTypes';

describe('Get All Notification Reducer Test Suite ', () => {
  it('Should return default state', () => {
    const initialState = getAllNotificationsReadReducer(undefined, {});
    expect(initialState).toEqual({
      allNotifications: null,
      allNotificationsError: null,
      newNotification: null,
    });
  });

  it('Should handle GET_ALL_NOTIFICATIONS_SUCCESS ', () => {
    const successAction = {
      type: GET_ALL_NOTIFICATIONS_SUCCESS,
      payload: {
        message: 'All notifications retrieved successfully!',
      },
    };
    const returnedState = getAllNotificationsReadReducer(undefined, successAction);
    expect(returnedState).toEqual({
      allNotifications: successAction.payload,
      allNotificationsError: null,
      newNotification: null,

    });
  });

  it('Should handle GET_ALL_NOTIFICATIONS_ERROR ', () => {
    const successAction = {
      type: GET_ALL_NOTIFICATIONS_ERROR,
      payload: {
        message: 'Unable to retrieve all notifications!',
      },
    };
    const returnedState = getAllNotificationsReadReducer(undefined, successAction);
    expect(returnedState).toEqual({
      allNotifications: null,
      allNotificationsError: successAction.payload,
      newNotification: null,
    });
  });

});
