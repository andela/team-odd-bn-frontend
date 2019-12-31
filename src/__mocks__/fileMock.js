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
        }],
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
};
export default mockData;
