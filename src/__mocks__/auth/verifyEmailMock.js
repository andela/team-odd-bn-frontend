import {
  RESEND_VERIFICATION_EMAIL,
  RESEND_EMAIL_SUCCESS,
  IS_EMAIL_VERIFIED,
  ERROR,
  SPINNER_STATUS,
} from '../../redux/actionTypes/authActionTypes';

export const successverifyEmail = [
  {
    spinner: false,
    type: SPINNER_STATUS,
  },
  {
    type: RESEND_EMAIL_SUCCESS,
    payload: {
      message: 'An email has been sent to you.',
      data: '',
    },
  },
  {
    type: ERROR,
    status: 'success',
    error: {},
  },
];
export const successVerifiedEmail = [
  {
    type: IS_EMAIL_VERIFIED,
    isEmailVerified: true,
  },
];
export const ErrorVerifiedEmail = [
  {

    error: undefined,
    status: 'error',
    type: 'ERROR',
  },
];

export const emailInputAction = {
  type: RESEND_VERIFICATION_EMAIL,
  payload: 'test@user.com',
};

export const spinnerActions = {
  type: SPINNER_STATUS,
  spinner: true,
};
export const successApiverifyEmail = {
  status: 200,
  response: {
    message: 'An email has been sent to you.',
    data: '',
  },
};

export const successApiVerifyEmail = {
  status: 200,
  response: {
    message: 'You have been verified you can now login',
    data: '',
  },
};
export const errorApiVerifyEmail = {
  status: 401,
  response: {
    message: {
      name: 'JsonWebTokenError',
      message: 'jwt malformed',
    },
  },
};

export const email = 'test@user.com';

// REDUCERS
export const resendEmailResponse = {
  type: RESEND_EMAIL_SUCCESS,
  payload: {
    message: 'An email has been sent to you.',
    data: '',
    status: 200,
    statusText: 'OK',
  },
};
// REDUCERS
export const verifyEmailResponse = {
  type: IS_EMAIL_VERIFIED,
  isEmailVerified: true,

};

export const verifyEmailError = {
  type: ERROR,
  status: 'error',
  message: 'victorkarangwa4@gmailxx.com does not exist',
};
export const spinnerAction = {
  type: SPINNER_STATUS,
  spinner: true,
};

// Container

export const verifyEmailProps = {
  stateObject: {
    auth: {
      verifyEmail: {
        payload: {
          message: 'An email has been sent to you.',
          data: '',
        },
        spinner: false,
        status: 'success',
        error: {},
      },
    },
  },
  updateSpinnerStatus: jest.fn(),
  resendVerificationEmailAction: jest.fn(),
};
export const mainState = {
  auth: {
    verifyEmail: {},
  },
};
export const spinnerProps = {
  stateObject: {
    auth: {
      verifyEmail: {
        spinner: true,
      },
    },
  },
};

export const userNotFound = {
  status: 400,
  response: {
    message: 'test@user does not exist',
  },
};

export const userNotFoundAction = [
  {
    spinner: false,
    type: SPINNER_STATUS,
  },
  {
    type: ERROR,
    status: 'error',
    error: {
      message: 'test@user does not exist',
    },
  },
];
