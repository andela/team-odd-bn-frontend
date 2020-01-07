import signupReducers from '../../../redux/reducers/authReducers/signupReducers';
import initialState from '../../../redux/store/initialState';
import {
  signupSuccessAction, signupInputAction, signupErrorAction, spinnerStatusAction,
} from '../../../__mocks__/auth/authMock';


describe('Signup Tests ', () => {
  it('Should handle signup success', () => {
    const newState = signupReducers(initialState.auth.signup, signupSuccessAction);
    expect(newState).toEqual({
      spinnerStatus: false,
      signupInputData: {},
      signupData: signupSuccessAction.payload,
      signupError: { },
    });
  });
  it('Should update input field onchange data', () => {
    const newState = signupReducers(initialState.auth.signup, signupInputAction);
    expect(newState).toEqual({
      spinnerStatus: false,
      signupInputData: signupInputAction.payload,
      signupData: { },
      signupError: { },
    });
  });
  it('Should update signup error', () => {
    const newState = signupReducers(initialState.auth.signup, signupErrorAction);
    expect(newState).toEqual({
      spinnerStatus: false,
      signupInputData: {},
      signupData: { },
      signupError: signupErrorAction.payload,
    });
  });
  it('Should update spinner status', () => {
    const newState = signupReducers(initialState.auth.signup, spinnerStatusAction);
    expect(newState).toEqual({
      spinnerStatus: true,
      signupInputData: {},
      signupData: {},
      signupError: {},
    });
  });
});
