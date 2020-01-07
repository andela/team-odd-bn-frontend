import {
  SIGNIN_SUCCESS,
  SIGNIN_INPUT,
  SIGNIN_ERROR,
  UPDATE_SPINNER_STATUS,
} from '../../../redux/actionTypes/authActionTypes';
import signinReducer from '../../../redux/reducers/authReducers/signinReducer';
import initialState from '../../../redux/store/initialState';

describe('Reducer tests', () => {
  it('Should handle login', () => {
    const loginSuccess = {
      type: SIGNIN_SUCCESS,
      payload: {},
    };
    const newState = signinReducer(initialState.auth.signin, loginSuccess);
    expect(newState).toEqual({
      spinnerStatus: false,
      signinInputData: {},
      signinData: loginSuccess.payload,
      signinError: { },
    });
  });

  it('Should update spinner status', () => {
    const spinnerStatus = {
      type: UPDATE_SPINNER_STATUS,
      payload: false,
    };
    const newState = signinReducer(initialState.auth.signin, spinnerStatus);
    expect(newState).toEqual({
      spinnerStatus: false,
      signinInputData: {},
      signinData: {},
      signinError: {},
    });
  });

  it('Should update input field onchange data', () => {
    const loginInput = {
      type: SIGNIN_INPUT,
      payload: {
        email: 'kkkk',
      },
    };
    const newState = signinReducer(initialState.auth.signin, loginInput);
    expect(newState).toEqual({
      spinnerStatus: false,
      signinInputData: loginInput.payload,
      signinData: { },
      signinError: { },
    });
  });

  it('Should update login error', () => {
    const loginInput = {
      type: SIGNIN_ERROR,
      payload: {
        message: ['Email or password is incorrect'],
      },
    };
    const newState = signinReducer(initialState.auth.signin, loginInput);
    expect(newState).toEqual({
      spinnerStatus: false,
      signinInputData: {},
      signinData: { },
      signinError: loginInput.payload,
    });
  });
});
