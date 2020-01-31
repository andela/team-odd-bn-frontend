import POP_UP from '../actionTypes/popUpActionType';
import initialState from '../store/initialState';


const popUpReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POP_UP:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default popUpReducer;
