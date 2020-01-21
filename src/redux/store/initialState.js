const state = {
  accommodation: {
    createAccommodation: {
      rooms: [],
      photos: [],
    },
  },
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
  trips: {
    requests: {
      requestsData: [],
      singleRequestData: {},
      requestCommentsData: {},
      requestsError: {},
    },
  },
  viewProfile: {
    profile: {},
  },
  profileError: {},
};
export default state;
