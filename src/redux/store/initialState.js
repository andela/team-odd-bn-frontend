const state = {
  auth: {
    signup: {
      signupInputData: {},
      signupData: { blockSpinner: 'blockSpinner' },
      signupError: { blockSpinner: 'blockSpinner' },
    },
    signin: {
      signinInputData: {},
      signinData: { blockSpinner: 'blockSpinner' },
      signinError: { blockSpinner: 'blockSpinner' },
    },
  },
  notification: {
    display: 'none',
    all: [{
      tag: 'Trips',
      url: '/trip/10',
      message: 'Willy has created a new trip request',
    },
    {
      tag: 'Comments',
      url: '/comments/4',
      message: 'victor has commented on that',
    }],
  },
};
export default state;
