const state = {
  accommodation: {
    createAccommodation: {
      rooms: [],
      photos: [],
    },
  },
  auth: {
    signup: {
      spinnerStatus: false,
      signupInputData: {},
      signupData: { },
      signupError: { },
    },
    signin: {
      spinnerStatus: false,
      signinInputData: {},
      signinData: {},
      signinError: {},
    },
  },
  trips: {
    tripRequests: {
      getCity: [],
      onewayData: {},
      onewayError: {},
      onewayInput: {},
    },
    availRequests: {
      approveRequestMessage: {
      },
    },
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
};
export default state;
