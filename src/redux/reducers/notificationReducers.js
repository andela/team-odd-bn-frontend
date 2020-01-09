import { NOTIFICATION_DISPLAY_STYLE } from '../actionTypes/notificationActionTypes';
import initialState from '../store/initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTIFICATION_DISPLAY_STYLE:
      return {
        ...state,
        display: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
