import signupReducers from '../../../redux/reducers/authReducers/signupReducers';
import initialState from '../../../redux/store/initialState';
import {
  signupSuccessAction, signupInputAction, signupErrorAction, spinnerStatusAction,
} from '../../../__mocks__/auth/authMock';


describe('Signup Tests ', () => {
  it('Should handle signup success', () => {
    const newState = signupReducers(initialState.auth.signup, signupSuccessAction);
    expect(newState).toEqual({
      signupInputData: {},
      signupData: signupSuccessAction.payload,
      signupError: { blockSpinner: 'blockSpinner' },
    });
  });
  it('Should update input field onchange data', () => {
    const newState = signupReducers(initialState.auth.signup, signupInputAction);
    expect(newState).toEqual({
      signupInputData: signupInputAction.payload,
      signupData: { blockSpinner: 'blockSpinner' },
      signupError: { blockSpinner: 'blockSpinner' },
    });
  });
  it('Should update signup error', () => {
    const newState = signupReducers(initialState.auth.signup, signupErrorAction);
    expect(newState).toEqual({
      signupInputData: {},
      signupData: { blockSpinner: 'blockSpinner' },
      signupError: signupErrorAction.payload,
    });
  });
  it('Should update spinner status', () => {
    const newState = signupReducers(initialState.auth.signup, spinnerStatusAction);
    expect(newState).toEqual({
      signupInputData: {},
      signupData: {},
      signupError: {},
    });
  });
});
