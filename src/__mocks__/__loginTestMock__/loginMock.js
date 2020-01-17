import {
  SIGNIN_SUCCESS,
  UPDATE_SPINNER_STATUS,
  SIGNIN_ERROR,
} from '../../redux/actionTypes/authActionTypes';

export const successResponse = {
  status: 200,
  response: {
    status: 'success',
    message: 'successfully logged in',
    data: 'jkjhjhhjkb',
  },
};
export const errorResponse = {
  status: 400,
  response: {
    status: 'error',
    message: 'Incorrect Credential',
  },
};
export const errorRequest = {
  status: 400,
  request: {
    status: 'error',
    message: 'Incorrect Credential',
  },
};
export const loginRequestErrorActions = [{
  type: UPDATE_SPINNER_STATUS,
  payload: true,
}, {
  payload: false,
  type: 'UPDATE_SPINNER_STATUS',
},
{
  type: SIGNIN_ERROR,
  payload: {
    message: 'Server Error',
  },
},
];

export const loginSuccessActions = [
  { payload: true, type: 'UPDATE_SPINNER_STATUS' },
  {
    payload:
    { data: 'jkjhjhhjkb', message: 'successfully logged in', status: 'success' },
    type: 'SIGNIN_SUCCESS',
  },
  { payload: false, type: 'UPDATE_SPINNER_STATUS' }];
export const loginErrorActions = [{
  type: UPDATE_SPINNER_STATUS,
  payload: true,
}, {
  payload: false,
  type: 'UPDATE_SPINNER_STATUS',
}, {
  type: SIGNIN_ERROR,
  payload: {
    message: 'Incorrect Credential',
  },
},
];

export const loginInitialState = {
  auth: {
    signin: {
      signinInputData: {},
      signinData: { data: 'blockSpinner' },
      signinError: { blockSpinner: 'blockSpinner' },
    },
  },
};

export const noDataInStore = {
  auth: {
    signin: {
      spinnerStatus: true,
      signinInputData: {},
      signinData: { },
      signinError: { },
    },
  },
};

export const useLoginData = {
  email: 'sugira@gmail.com',
  password: 'Simulation1$',
};
