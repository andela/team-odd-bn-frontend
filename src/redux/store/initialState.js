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
      paginatedRequest: [],
      paginationStart: 0,
      paginationEnd: 5,
    },
  },
  viewProfile: {
    profile: {},
  },
};
export default state;
