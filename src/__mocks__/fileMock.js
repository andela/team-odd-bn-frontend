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
  profileProps: {
    profile: {
      data: {
        user: {
          firstName: 'Ivy',
          lastName: 'League',
        },
        imageURL: 'image.png',
      },
    },
    viewProfile: {
      profile: {
        data: {
          user: {
            firstName: 'Ivy',
            lastName: 'League',
          },
          imageURL: 'image.png',
        },
      },
    },
    profileError: {},
    message: 'success',
    getProfile: jest.fn(),
  },

  myProfileProps: {
    profile: {
      data: {
        user: {
          firstName: 'Ivy',
          lastName: 'League',
        },
        gender: 'female',
        birthDate: '01/01/1990',
        address: 'Kigali',
        department: 'Finance',
        imageURL: 'image.png',
        managerId: 6,
        bio: 'Work hard play hard ',
      },
    },
    profileError: {},
    message: 'success',
    updateProfileError: {},
    imageURL: {},
    imageURLError: {},
    getProfile: jest.fn(),
    updateProfile: jest.fn(),
    uploadImage: jest.fn(),
  },
  props: {
    spinner: true,
    profile: {
      data: {
        user: {
          firstName: 'Ivy',
          lastName: 'League',
        },
        gender: 'female',
        birthDate: '01/01/1990',
        address: 'Kigali',
        department: 'Finance',
        imageURL: 'image.png',
        managerId: 6,
        bio: 'Work hard play hard ',
      },
    },
    users: {
      data: [
        {
          user: {
            firstName: 'Ivy',
            lastName: 'League',
          },
          gender: 'female',
          birthDate: '01/01/1990',
          address: 'Kigali',
          department: 'Finance',
          imageURL: 'image.png',
          managerId: 6,
          roleId: 6,
          bio: 'Work hard play hard ',
        },
        {
          user: {
            firstName: 'Ivy',
            lastName: 'League',
          },
          gender: 'female',
          birthDate: '01/01/1990',
          address: 'Kigali',
          department: 'Finance',
          imageURL: 'image.png',
          managerId: 6,
          roleId: 6,
          bio: 'Work hard play hard ',
        },
      ],
    },
    profileError: {},
    message: 'success',
    updateProfileError: {},
    imageURL: {},
    imageURLError: {},
    getProfile: jest.fn(),
    updateProfile: jest.fn(),
    uploadImage: jest.fn(),
    getManagers: jest.fn(),
    updateSpinnerStatus: jest.fn(),
    handleFiles: jest.fn(),
  },

  emptyProfile: {
    data: {
      user: {
        firstName: null,
        lastName: null,
      },
      gender: null,
      birthDate: null,
      address: null,
      department: null,
      imageURL: null,
      managerId: null,
      bio: null,
    },
  },
  Navbarprops: {
    profile: {
      data: {
        user: {
          firstName: 'Ivy',
          lastName: 'League',
        },
        imageURL: 'image.png',
      },
      profileError: null,
      message: null,
    },
  },
  viewProfile: {
    profile: null,
    profileError: null,
    updateProfileError: null,
    imageURL: null,
    imageURLError: null,
  },
  allUsers: {
    users: null,
    usersError: null,
  },
  updateProfile: {
    message: null,
    formErrors: {
      address: '',
      department: '',
      bio: '',
    },
  },
  navbarMainState: {
    viewProfile: {
      profile: null,
      profileError: null,
      message: null,
    },
  },
  navbarInitialState: {
    viewProfile: {
      profile: null,
      profileError: null,
    },
  },
  profileMainState: {
    viewProfile: {
      spinner: true,
      profile: null,
      profileError: null,
      message: null,
    },
  },
  signoutProps: {
    signout: jest.fn(),
    isSignout: true,
    mapStateToProps: jest.fn(),
    mapDispatchToProps: jest.fn(),
    signoutAction: jest.fn(),
    state: {
      signout: true,
      isLoggedin: {},
    },
    signoutSuccessfully: {
      message: 'Loggout successfully',
    },
    signoutFail: {
      message: 'Loggout failed',
    },
    successReducer: {
      type: 'SIGNOUT_SUCCESS',
      payload: true,
    },
    failureReducer: {
      type: 'SIGNOUT_FAILURE',
      payload: true,
    },
    logout: jest.fn(),
    history: {
      push: jest.fn(),
    },
    signoutUser: jest.fn(),
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
      data: {
        managerId: 1,
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
          managerId: 1,
          user: {
            firstName: 'John',
            lastName: 'Doe',
          },
        },
      },
    },
    UNSAFE_componentWillReceiveProps: jest.fn(),
    getCurrentUserinfo: jest.fn(),
    signoutUser: jest.fn(),
    history: {
      push: jest.fn(),
    },
    logout: jest.fn(),
  },
  userProfileMockData: {
    spinnerStatusAction: (data) => ({
      type: 'SPINNER_STATUS',
      spinner: data,
    }),
    successfulyProfileReducer: (data) => ({
      type: 'FETCH_PROFILE_SUCCESS',
      payload: data,
    }),
    failedProfileReducer: (data) => ({
      type: 'FETCH_PROFILE_ERROR',
      payload: data,
    }),
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
    fetchUsersSuccessAction: (profileInformation) => ({
      type: 'FETCH_PROFILE_SUCCESS',
      payload: profileInformation.data,
    }),
    fetchUsersFailure: (error) => ({
      type: 'FETCH_PROFILE_ERROR',
      payload: error.response.data,
    }),
    userProfileMocData: {
      getProfile: jest.fn(),
      updateSpinnerStatus: jest.fn(),
    },
    roundTripProps: {
      spinner: true,
      roundTrip: {
        data: {
          originId: 1,
          destinationId: 1,
          reason: 'Meeting department heads',
          startDate: '2020-12-02',
          returnDate: '2030-02-03',
        },
        getCities: jest.fn(),
        createRoundTrip: jest.fn(),
        updateSpinnerStatus: jest.fn(),
      },
    },
    roundTripMainState: {
      trips: {
        roundTrip: {
          roundTripMessage: null,
          roundTripError: null,
          spinner: null,
          spinnerError: null,
        },
        allCities: {
          cities: null,
          citiesError: null,
        },
      },
    },
  },
};
export default mockData;
