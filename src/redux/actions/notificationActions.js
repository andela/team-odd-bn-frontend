import { NOTIFICATION_DISPLAY_STYLE } from '../actionTypes/notificationActionTypes';

export const updateNotificationDisplay = (data) => ({
  type: NOTIFICATION_DISPLAY_STYLE,
  payload: data,
});
