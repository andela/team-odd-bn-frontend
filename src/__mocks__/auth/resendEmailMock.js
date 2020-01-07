// ACTIONS
import {
  RESEND_VERIFICATION_EMAIL,
  RESEND_EMAIL_SUCCESS,
  ERROR,
  SPINNER_STATUS,
} from '../../redux/actionTypes/authActionTypes';

export const successResendEmail = [
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

export const emailInputAction = {
  type: RESEND_VERIFICATION_EMAIL,
  payload: 'test@user.com',
};

export const spinnerActions = {
  type: SPINNER_STATUS,
  spinner: true,
};
export const successApiResendEmail = {
  status: 200,
  response: {
    message: 'An email has been sent to you.',
    data: '',
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

export const resendEmailError = {
  type: ERROR,
  status: 'error',
  message: 'victorkarangwa4@gmailxx.com does not exist',
};
export const spinnerAction = {
  type: SPINNER_STATUS,
  spinner: true,
};

// Container

export const resendEmailProps = {
  stateObject: {
    auth: {
      resendEmail: {
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
    resendEmail: {},
  },
};
export const spinnerProps = {
  stateObject: {
    auth: {
      resendEmail: {
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
