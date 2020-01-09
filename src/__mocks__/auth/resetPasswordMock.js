// ACTIONS
import {
  PASSWORD_RESET_EMAIL,
  RESET_PASSWORD_INPUT,
  RESET_REQUEST_SUCCESS,
  RESET_PASSWORD_SUCCESS,
  ERROR, SPINNER_STATUS,
} from '../../redux/actionTypes/authActionTypes';

export const successResetRequest = [
  {
    spinner: false,
    type: SPINNER_STATUS,
  },
  {
    type: RESET_REQUEST_SUCCESS,
    payload: {
      message: 'A reset link has been sent to your email. Please check your email!',
      data: 'test@user.com',
    },
  },
  {

    type: ERROR,
    status: 'success',
    error: { },
  },
];
export const tokenErrorResetRequest = [
  {
    spinner: false,
    type: SPINNER_STATUS,
  }, {

    type: ERROR,
    status: 'error',
    error: {
      message: 'JWT malformed',
    },
  }];
export const successResetPassword = [
  {
    spinner: false,
    type: SPINNER_STATUS,
  }, {

    type: RESET_PASSWORD_SUCCESS,
    payload: {
      message: 'Password reset successfull!',
      data: '$2b$10$zkLNRjMo16sAHEVMcAe9uOSx/zCiATaBaLJWy3e2OPtZiobn5TULS',
    },
  },
  {
    type: ERROR,
    error: {},
    status: 'success',
  },
];
export const emailInputAction = {
  type: PASSWORD_RESET_EMAIL,
  payload: 'test@user.com',
};
export const passwordInputActions = {
  type: RESET_PASSWORD_INPUT,
  payload: {
    password: '@Qwr121324d',
    newPassword: '@Qwr121324d',
  },
};
export const spinnerActions = {
  type: SPINNER_STATUS,
  spinner: true,
};
export const successApiResetRequest = {
  status: 200,
  response: {
    message: 'A reset link has been sent to your email. Please check your email!',
    data: 'test@user.com',
  },
};
export const tokenErrorApiResetRequest = {
  status: 400,
  response: {
    message: 'JWT malformed',
  },
};
export const successApiresetPassword = {
  status: 200,
  response: {
    message: 'Password reset successfull!',
    data: '$2b$10$zkLNRjMo16sAHEVMcAe9uOSx/zCiATaBaLJWy3e2OPtZiobn5TULS',
  },
};
export const newPassword = {
  password: '@Qwr121324d',
  newPassword: '@Qwr121324d',
};
export const token = 'dcdcdcdXdcdcdcdc';
export const email = 'test@user.com';

// REDUCERS
export const resetRequestResponse = {
  type: RESET_REQUEST_SUCCESS,
  payload: {
    message: 'A reset link has been sent to your email. Please check your email!',
    data: 'userTest@gmail.com',
    status: 200,
    statusText: 'OK',
  },
};
export const resetPaswordResponse = {
  type: RESET_PASSWORD_SUCCESS,
  payload: {
    data: {
      message: 'Password reset successfull!',
      data: '$2b$10$5wSjQeCGWhGg7JkeDI/2.uAq.jv/Uoi999dl9ZussyDVjIGo2lN0y',
      status: 200,
      statusText: 'OK',
    },
  },
};
export const passwordResetError = {
  type: ERROR,
  status: 'error',
  error: {
    message: 'Oops! password and confirm password do not match!',
  },
};
export const spinnerAction = {
  type: SPINNER_STATUS,
  spinner: true,
};

// Container
export const props = {
  stateObject: {
    auth: {
      resetPassword: {
        payload: {
          message: 'Password reset successfull!',
          data:
                   '$2b$10$covd9V1kzpFIG7qhZDnbxedKo5WMwtIGZdmda0AYzLUn3Nq4wWCoG',
        },
        spinner: false,
      },
    },
  },

  location: {
    search: 'resetToken',
  },
  updateSpinnerStatus: jest.fn(),
  resetPasswordAction: jest.fn(),
};
export const forgotProps = {
  stateObject: {
    auth: {
      resetPassword: {
        payload: {
          message: 'A reset link has been sent to your email. Please check your email!',
          data: 'test@user.com',
        },
        spinner: false,
        status: 'success',
        error: {},
      },
    },
  },
  updateSpinnerStatus: jest.fn(),
  sendResetRequestAction: jest.fn(),

};
export const mainState = {
  auth: {
    resetPassword: {},
  },
};
export const spinnerProps = {
  stateObject: {
    auth: {
      resetPassword: {
        spinner: true,
      },
    },
  },
};
export const redirectProps = {
  stateObject: {
    auth: {
      resetPassword: {
        spinner: true,
        status: 'success',
        location: {
          search: 'resetToken',
        },
      },
    },
  },
};
export const userNotFound = {
  status: 400,
  response: {
    message: 'User with this email does not exist',
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
      message: 'User with this email does not exist',
    },
  },
];
