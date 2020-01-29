import {
  GET_ALL_NOTIFICATIONS_ERROR, GET_ALL_NOTIFICATIONS_SUCCESS, NEW_NOTIFICATION, SPINNER_STATUS,
} from '../../actionTypes/notificationActionTypes';

const initialState = {
  allNotifications: null,
  allNotificationsError: null,
  newNotification: null,
};

const allNotificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        allNotifications: action.payload,
      };
    case GET_ALL_NOTIFICATIONS_ERROR:
      return {
        ...state,
        allNotificationsError: action.payload,
      };
    case NEW_NOTIFICATION:
      return {
        ...state,
        newNotification: action.payload,
        allNotifications: [action.payload, ...state.allNotifications],
      };
    default:
      return state;
  }
};

export default allNotificationsReducer;
