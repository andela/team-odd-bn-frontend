import * as types from '../actionTypes/multicityActionType';
import convertInput from '../../helpers/convertField';

const initialState = {
  data: [
    {
      originId: '',
      destinationId: '',
      startDate: '',
      returnDate: '',
      reason: '',
    },
  ],
  error: [],
};


export const updateTripItem = (array, payload) => {

  const editedPayload = convertInput(payload);
  return array.data.map((item, index) => {
    if (index !== editedPayload.tripIndex) {
      return item;
    }
    const tempObj = {};
    tempObj[editedPayload.name] = editedPayload.value;
    const editedItem = { ...item };
    const newData = Object.assign(editedItem, tempObj);
    return {
      ...item,
      ...newData,
    };
  });
};


const multicityReducer = (state = initialState, { type, payload }) => {
  let tripRequestInfo;

  switch (type) {
    case types.ADD_TRIP_REQUEST_MULTIPLE_DATA_SUCCESS:
      return { ...state, data: [...state.data, payload] };

    case types.REMOVE_TRIP_REQUEST_MULTIPLE_DATA_SUCCESS:
      tripRequestInfo = { ...state, data: [...state.data.filter((item, index) => index !== payload)] };
      return tripRequestInfo;

    case types.EDIT_TRIP_REQUEST_MULTIPLE_DATA_SUCCESS:
      return { ...state, data: updateTripItem(state, payload) };

    case types.SEND_MULTIPLE_DATA_SUCCESS:
      return { ...state, message: payload.message };

    case types.SEND_MULTIPLE_DATA_ERROR:
      return { ...state, error: payload.message };

    default:
      return state;
  }
};

export default multicityReducer;
