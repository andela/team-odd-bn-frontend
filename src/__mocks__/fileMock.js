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
  sidebarProps: {
    click: jest.fn(),
    backdropClickHandler: jest.fn(),
    drawerToggleClickHandler: jest.fn(),
    drawerClickHandler: jest.fn(),
    mapStateToProps: jest.fn(),
    mapDispatchToProps: jest.fn(),
    show: true,
    sideDrawerOpen: true,
    image: 'image.jpg',
    firstName: 'John',
    lastName: 'Doe',
    profile: {
      viewProfile: {
        profile: 'data profile',
      },
    },
    profileError: 'profileError',
    state: {
      viewProfile: {
        profile: 'data',
      },
      profileError: 'error',
      sideDrawerOpen: 'function',
      children: 'children component',
    },
    prevProps: {
      profile: {
        data: {
          imageURL: 'Iamge.jpeg',
          user: {
            firstName: 'John',
            lastName: 'Doe',
          },
        },
      },
    },
    UNSAFE_componentWillReceiveProps: jest.fn(),
    getCurrentUserinfo: jest.fn(),
  },
  userProfileMockData: {
    spinnerStatusAction: (data) => {
      return {
        type: 'SPINNER_STATUS',
        spinner: data,
      };
    },
    successfulyProfileReducer: (data) => {
      return {
        type: 'FETCH_PROFILE_SUCCESS',
        payload: data,
      };
    },
    failedProfileReducer: (data) => {
      return {
        type: 'FETCH_PROFILE_ERROR',
        payload: data,
      };
    },
    successResponse: {
      profileInformation: {
        data: {
          firstName: 'John',
          lastName: 'Doe',
          img: 'dummy.image',
        },
      },
    },
    errorResponse: {
      error: {
        response: {
          data: {
            info: 'No profile',
          },
        },
      },
    },
    fetchUsersSuccessAction: (profileInformation) => {
      return {
        type: 'FETCH_PROFILE_SUCCESS',
        payload: profileInformation.data,
      };
    },
    fetchUsersFailure: (error) => {
      return {
        type: 'FETCH_PROFILE_ERROR',
        payload: error.response.data,
      };
    },
    userProfileMocData: {
      getProfile: jest.fn(),
      updateSpinnerStatus: jest.fn(),
    },
  },
};
export default mockData;
