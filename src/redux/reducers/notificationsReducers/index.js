import { combineReducers } from 'redux';
import allNotificationsReducer from './getAllNotificationsReducer';
import markAllAsReadReducer from './markAllAsReadReducer';
import markOneAsReadReducer from './markOneAsReadReducer';

export default combineReducers({
  notifications: allNotificationsReducer,
  markasRead: markAllAsReadReducer,
  markOneAsRead: markOneAsReadReducer,
});
