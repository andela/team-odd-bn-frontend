const multicityProps = {
  multicityTripData: {
    data: [
      {
        originId: 1,
        destinationId: 2,
        reason: 'I am reason',
        startDate: '2020-02-02',
        returnDate: '2020-04-04',
      },
    ],
    error: '',
    message: 'Trip requested successfully',
  },
  viewProfile: {
    spinner: true,
  },
  addMoreTrip: jest.fn(),
  editMultipleTrip: jest.fn(),
  removeMoreTrip: jest.fn(),
  sendMulticityTrip: jest.fn(),
  updateSpinnerStatus: jest.fn(),
  tripAction: {
    cities: {
      data: ['tripA', 'tripB'],
    },
    tripIndex: 2,
    removeTrip: jest.fn(),
    onHandleInputChange: jest.fn(),
    data: ['A', 'B'],
    itemRequests: {
      originId: 1,
      destinationId: 2,
      reason: '',
      startDate: '',
      returnDate: '',
    },
  },
  getCitiesAction: jest.fn(),
  history: {
    push: jest.fn(),
  },
};

export const checkInputData = {
  payload: {
    name: 'originId',
    value: 2,
  },
  payload2: {
    name: 'destinationId',
    value: 2,
  },
  payload3: {
    fekeName: 'destinationId',
    fekeValue: 2,
  },
};

export const multicityTripAction = {
  editInputForm: {
    type: 'FEKE_ACTION',
    payload: 'I am data',
  },
  addMoreButton: [
    {
      type: 'ADD_TRIP_REQUEST_MULTIPLE_DATA_SUCCESS',
      payload: {
        originId: '',
        destinationId: '',
        startDate: '',
        returnDate: '',
        reason: '',
      },
    },
  ],
  removeMoreButton: [
    {
      type: 'REMOVE_TRIP_REQUEST_MULTIPLE_DATA_SUCCESS',
      payload: 2,
    },
  ],
  editMultipleTrip: [
    {
      type: 'EDIT_TRIP_REQUEST_MULTIPLE_DATA_SUCCESS',
      payload: { name: 'reason', value: 'why' },
    },
  ],
  multicityObjectData: {
    itinerary: [
      {
        originId: '',
        destinationId: '',
        startDate: '',
        returnDate: '',
        reason: '',
      },
    ],
  },
  expectedMulticityReturn: [
    {
      type: 'SEND_MULTIPLE_DATA_SUCCESS',
      payload: {
        data: [
          {
            id: 10,
            type: 'multicity',
          },
        ],
      },
    },
  ],
  currentMulticityRequest: {
    data: [
      {
        originId: 3,
        destinationId: '6',
        startDate: '2020-12-12',
        returnDate: '2021-12-12',
        reason: 'You should try multicity',
      },
      {
        originId: '1',
        destinationId: '2',
        startDate: '2022-12-12',
        returnDate: '2025-12-12',
        reason: 'You should again try multicity',
      },
    ],
    error: [],
  },
  expectedEditedMulticityRequest: [
    {
      originId: 3,
      destinationId: '6',
      startDate: '2020-12-12',
      returnDate: '2021-12-12',
      reason: 'You should try multicity'
    },
    {
      originId: 9,
      destinationId: '2',
      startDate: '2022-12-12',
      returnDate: '2025-12-12',
      reason: 'You should again try multicity',
    },
  ],
  multicityInputDataPayload: {
    name: 'originId',
    value: 9,
    tripIndex: 1,
  },
  addNewTripRequestResult: {
    data: [
      {
        originId: 3,
        destinationId: '6',
        startDate: '2020-12-12',
        returnDate: '2021-12-12',
        reason: 'You should try multicity',
      },
      {
        originId: '1',
        destinationId: '2',
        startDate: '2022-12-12',
        returnDate: '2025-12-12',
        reason: 'You should again try multicity',
      },
      {
        originId: '',
        destinationId: '',
        startDate: '',
        returnDate: '',
        reason: '',
      },
    ],
    error: [],
  },
  removeTripdReducer: {
    data: [
      {
        originId: 3,
        destinationId: '6',
        startDate: '2020-12-12',
        returnDate: '2021-12-12',
        reason: 'You should try multicity',
      },
      {
        originId: '1',
        destinationId: '2',
        startDate: '2022-12-12',
        returnDate: '2025-12-12',
        reason: 'You should again try multicity',
      },
    ],
    error: [],
  },
  removeReducerAction:
  {
    type: 'REMOVE_TRIP_REQUEST_MULTIPLE_DATA_SUCCESS',
    payload: 0,
  },
  removedDataNewObject: {
    data: [
      {
        originId: '1',
        destinationId: '2',
        startDate: '2022-12-12',
        returnDate: '2025-12-12',
        reason: 'You should again try multicity'
      },
    ],
    error: [],
  },
  editSpecificTripRequest: {
    type: 'EDIT_TRIP_REQUEST_MULTIPLE_DATA_SUCCESS',
    payload: {
      tripIndex: 1,
      value: 'i am reason',
      name: 'reason',
    },
  },
  editSpecificTripRequestReason: {
    data: [
      {
        originId: 3,
        destinationId: '6',
        startDate: '2020-12-12',
        returnDate: '2021-12-12',
        reason: 'You should try multicity',
      },
      {
        originId: '1',
        destinationId: '2',
        startDate: '2022-12-12',
        returnDate: '2025-12-12',
        reason: 'i am reason',
      },
    ],
    error: [],
  },
  successfullyMessage: {
    type: 'SEND_MULTIPLE_DATA_SUCCESS',
    payload: {
      message: 'successfuly created',
    },
  },
  successfullyTripRequestSaved: {
    data: [
      {
        originId: 3,
        destinationId: '6',
        startDate: '2020-12-12',
        returnDate: '2021-12-12',
        reason: 'You should try multicity',
      },
      {
        originId: '1',
        destinationId: '2',
        startDate: '2022-12-12',
        returnDate: '2025-12-12',
        reason: 'You should again try multicity',
      },
    ],
    error: [],
    message: 'successfuly created',
  },
  errorTripRequestMessage: {
    type: 'SEND_MULTIPLE_DATA_ERROR',
    payload: {
      message: 'server is down',
    },
  },
  erroTripRequestSaved: {
    data: [
      {
        originId: 3,
        destinationId: '6',
        startDate: '2020-12-12',
        returnDate: '2021-12-12',
        reason: 'You should try multicity',
      },
      {
        originId: '1',
        destinationId: '2',
        startDate: '2022-12-12',
        returnDate: '2025-12-12',
        reason: 'You should again try multicity',
      },
    ],
    error: 'server is down',
  },
};


export default multicityProps;
