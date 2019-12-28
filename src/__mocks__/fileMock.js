const mockData = {
  errorData: {
    error: 'I am feke error',
    hideErrors: jest.fn(),
  },
  signinDummyDataWithErrors: {
    socialAuth: false,
    errors: 'I am dummy',
    buttonName: 'log in with Google',
  },
  destructLocationData: {
    location: {
      search: 'https://dummy.example.url/?info=Iamtoken',
    },
  },
  socialAuthDummyData: {
    authUserData: jest.fn(),
    location: {
      search: 'https://dummy.example.url/?info=Iamtoken',
    },
  },
  socialAuthReducer: {
    type: 'SOCIAL_AUTH_SUCCESS',
    payload: 'successfuly authenticate',
  },
  errorActionReducer: {
    type: 'ACTION_FAIL_ERRORS',
    payload: 'I am error',
  },
};

export default mockData;
