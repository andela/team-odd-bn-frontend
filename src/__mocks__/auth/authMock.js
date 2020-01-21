import {
  SIGNUP_ERROR,
  SIGNUP_INPUT,
  SIGNUP_SUCCESS,
  UPDATE_SPINNER_STATUS,
} from '../../redux/actionTypes/authActionTypes';

export const successResponse = {
  status: 201,
  response: {
    status: 'success',
    message: 'successfully signed up',
    data: 'jkjhjhhjkb',
  },
};
export const errorRequest = {
  status: 400,
  request: {
    message: 'first name should be valid',
  },
};
export const expectedSignuperrorRequestActions = [
  { type: UPDATE_SPINNER_STATUS, payload: true },
  {
    payload: false,
    type: UPDATE_SPINNER_STATUS,
  },
  {
    type: SIGNUP_ERROR,
    payload: {
      message: 'Ooops! Network Error',
    },
  },
];
export const errorTypeResponse = {
  status: 400,
  response: {
    error: 'first name should be valid',
  },
};
export const
  spinnerInitialState = {
    auth: {
      signup: {
        spinnerStatus: true,
        signupInputData: {},
        signupData: {},
        signupError: {},
      },
    },
  };
export const redirectInitialState = {
  auth: {
    signup: {
      spinnerStatus: false,
      signupInputData: {},
      signupData: { message: 'blockSpinner' },
      signupError: { message: 'blockSpinner' },
    },
  },
};
export const expectedSignupErrorTypeActions = [
  { type: UPDATE_SPINNER_STATUS, payload: true },
  {
    payload: false,
    type: UPDATE_SPINNER_STATUS,
  },
  {
    type: SIGNUP_ERROR,
    payload: {
      error: 'first name should be valid',
    },
  },
];

export const errorResponse = {
  status: 400,
  response: {
    message: [
      'first name should be valid',
      'last name should be valid',
      'email should be valid',
      'A valid password should have a character, number, …d a lower case letter and should be longer than 8',
    ],
  },
};

export const expectedSignupErrorActions = [
  { type: UPDATE_SPINNER_STATUS, payload: true },
  {
    payload: false,
    type: UPDATE_SPINNER_STATUS,
  },
  {
    type: SIGNUP_ERROR,
    payload: {
      message: [
        'first name should be valid',
        'last name should be valid',
        'email should be valid',
        'A valid password should have a character, number, …d a lower case letter and should be longer than 8',
      ],
    },
  },
];

export const expectedSignupSuccessActions = [
  { type: UPDATE_SPINNER_STATUS, payload: false },
  {
    type: SIGNUP_SUCCESS,
    payload: {
      status: 'success',
      message: 'successfully signed up',
      data: 'jkjhjhhjkb',
    },
  },
];
export const expectedSignupFailureAction = [
  { type: UPDATE_SPINNER_STATUS, payload: true },
  {
    payload: false,
    type: UPDATE_SPINNER_STATUS,
  },
  {
    type: SIGNUP_SUCCESS,
    payload: {
      status: 'success',
      message: 'successfully signed up',
      data: 'jkjhjhhjkb',
    },
  },
];

export const signupPasswordMismatch = [
  {
    payload: {
      message: 'The password and confirm password should match',
    },
    type: SIGNUP_ERROR,
  },
];
export const signupSuccessAction = {
  type: SIGNUP_SUCCESS,
  payload: {
    message: 'Updated your password successful',
  },
};
export const signupInputAction = {
  type: SIGNUP_INPUT,
  payload: {
    firstName: 'kim',
  },
};
export const signupErrorAction = {
  type: SIGNUP_ERROR,
  payload: {
    message: ['Invalid firstName'],
  },
};
export const spinnerStatusAction = {
  type: UPDATE_SPINNER_STATUS,
  payload: true,
};
export const signupMatchingPasswords = {
  firstName: 'hezron',
  lastName: 'hezron',
  email: 'hezron@gmail.com',
  password: 'hezron',
  confirmPassword: 'hezron',
};
export const signupUnMatchingPasswords = {
  firstName: 'hezron',
  lastName: 'hezron',
  email: 'hezron@gmail.com',
  password: 'hezron',
  confirmPassword: 'hezronKK',
};
