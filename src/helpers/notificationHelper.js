import socketIOCient from 'socket.io-client';
import dotenv from 'dotenv';
import { toast } from 'react-toastify';
import store from '../redux/store';
import { NEW_NOTIFICATION } from '../redux/actionTypes/notificationActionTypes';

dotenv.config();

const initializeSocket = () => {
  const BASE_URL = 'https://team-odd-bn-backend-staging.herokuapp.com/';
  const HEADERS_REQUEST = {
    token: localStorage.getItem('token'),
  };
  const socket = socketIOCient.connect(BASE_URL, { query: HEADERS_REQUEST });
  socket.on('trip_request_notification', (notification) => {
    toast('New Notification');
    store.dispatch({
      type: NEW_NOTIFICATION,
      payload: notification,
    });
  });

  socket.on('approve_reject_notification', (notification) => {
    toast('New Notification');
    store.dispatch({
      type: NEW_NOTIFICATION,
      payload: notification,
    });
  });

  socket.on('edit_trip_notification', (notification) => {
    toast('New Notification');
    store.dispatch({
      type: NEW_NOTIFICATION,
      payload: notification,
    });
  });

  socket.on('post_comment_notification', (notification) => {
    toast('New Notification');
    store.dispatch({
      type: NEW_NOTIFICATION,
      payload: notification,
    });
  });

  socket.on('booking_notification', (notification) => {
    toast('New Notification');
    store.dispatch({
      type: NEW_NOTIFICATION,
      payload: notification,
    });
  });
};

export default initializeSocket;
