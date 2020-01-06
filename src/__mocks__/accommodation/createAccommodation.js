// create accommodation reducers
import {
  NEW_ACCOMMODATION_INPUT,
  NEW_ADDED_PHOTOS,
  OPEN_ROOMS_MODAL,
  NEW_ADDED_ROOMS,
  GET_CITIES_SUCCESS,
  CREATE_ACCOMMODATION_SUCCESS,
  CREATE_ACCOMMODATION_ERROR,
  SPINNER_STATUS,
} from '../../redux/actionTypes/accommodationActionTypes';

export const accommodationInputAction = {
  type: NEW_ACCOMMODATION_INPUT,
  payload: {
    name: 'Kilimanjaro',
    city: 3,
    description: 'Nice place to rest in the world',
    address: 'KG 208 st',
    imageUrls: ['me.jpg', 'you.png'],
    rooms: [
      {
        name: 'Kagera',
        roomType: 'Single',
      },
      {
        name: 'Kakum',
        roomType: 'Double',
      },
    ],
  },
};
export const photosInputAction = {
  type: NEW_ADDED_PHOTOS,
  photos: 'me.you',
};
export const openModalAction = {
  type: OPEN_ROOMS_MODAL,
  openRoomsModal: true,
};
export const addNewRoomsAction = {
  type: NEW_ADDED_ROOMS,
  rooms: 'Akagera',
};
export const getCitiesSuccessAction = {
  type: GET_CITIES_SUCCESS,
  retrievedCities: {
    message: 'Location retrieved',
    data: [{
      id: 1,
      city: 'Nairobi',
      createdAt: '2019-12-09T07:36:36.417Z',
      updatedAt: '2019-12-09T07:36:36.417Z',
    }],
  },
};

export const createAccommodation = {
  type: CREATE_ACCOMMODATION_SUCCESS,
  payload: {
    name: 'Mubarak Palace',
    cityId: 3,
    address: 'fghj',
    googleCoordinates: '-77, -56',
    imageUrls: ['l.jpg', 'k.jpg'],
    description:
             ' Queens palace is the best accomodation facility you could ever get',
    rooms: [
      { name: '12', roomType: 'single' },
      { name: '13', roomType: 'single' },
      { name: '14', roomType: 'single' },
    ],
  },
};
export const createAccommodationError = {
  type: CREATE_ACCOMMODATION_ERROR,
  status: 'error',
  error: 'You are not a travel administrator',
};

export const spinnerStatus = {
  type: SPINNER_STATUS,
  spinner: false,
};

// create accommodation action

export const retrievedCitiesAction = [
  {
    spinner: false,
    type: SPINNER_STATUS,
  },
  {
    type: GET_CITIES_SUCCESS,
    retrievedCities: {
      message: 'Location retrieved',
      data: [
        {
          id: 1,
          city: 'Kampala',
          createdAt: '2019-12-09T07:36:36.417Z',
          updatedAt: '2019-12-09T07:36:36.417Z',
        },
      ],
    },
  },
  {
    type: CREATE_ACCOMMODATION_ERROR,
    status: 'success',
    error: {},
  },
];
export const retrievedCitiesApi = {
  status: 200,
  response: {
    message: 'Location retrieved',
    data: [
      {
        id: 1,
        city: 'Kampala',
        createdAt: '2019-12-09T07:36:36.417Z',
        updatedAt: '2019-12-09T07:36:36.417Z',
      },
    ],
  },
};

export const tokenErrorApiRequest = {
  status: 400,
  response: {
    message: 'JWT malformed',
  },
};

export const createAccommodationApi = {
  status: 201,
  response: {
    message: 'Accommodation created',
    data: {
      id: 24,
      userId: 15,
      name: "Jox's palace lo",
      cityId: 3,
      address: 'fghj',
      description:
               ' Queens palace is the best accomodation facility you could ever get',
      googleCoordinates: '-77, -56',
      updatedAt: '2020-01-15T18:17:26.264Z',
      createdAt: '2020-01-15T18:17:26.264Z',
      imageUrls: [
        {
          id: 34,
          accommodationId: 24,
          imageUrl: 'l.jpg',
          updatedAt: '2020-01-15T18:17:26.277Z',
          createdAt: '2020-01-15T18:17:26.277Z',
        },
      ],
      rooms: [
        {
          id: 46,
          name: 'Mugwizabatware',
          roomType: 'single',
          accommodationId: 24,
          updatedAt: '2020-01-15T18:17:26.318Z',
          createdAt: '2020-01-15T18:17:26.318Z',
        },
      ],
    },
  },
};
export const createAccommodationMockAction = [
  {
    spinner: false,
    type: SPINNER_STATUS,
  },
  {
    type: CREATE_ACCOMMODATION_SUCCESS,
    payload: {
      message: 'Accommodation created',
      data: {
        id: 24,
        userId: 15,
        name: "Jox's palace lo",
        cityId: 3,
        address: 'fghj',
        description:
                 ' Queens palace is the best accomodation facility you could ever get',
        googleCoordinates: '-77, -56',
        updatedAt: '2020-01-15T18:17:26.264Z',
        createdAt: '2020-01-15T18:17:26.264Z',
        imageUrls: [
          {
            id: 34,
            accommodationId: 24,
            imageUrl: 'l.jpg',
            updatedAt: '2020-01-15T18:17:26.277Z',
            createdAt: '2020-01-15T18:17:26.277Z',
          },
        ],
        rooms: [
          {
            id: 46,
            name: 'Mugwizabatware',
            roomType: 'single',
            accommodationId: 24,
            updatedAt: '2020-01-15T18:17:26.318Z',
            createdAt: '2020-01-15T18:17:26.318Z',
          },
        ],
      },
    },
  },
  {
    type: CREATE_ACCOMMODATION_ERROR,
    status: 'success',
    error: {},
  },
];
export const createAccommodationMockError = [
  {
    spinner: false,
    type: SPINNER_STATUS,
  },
  {
    type: CREATE_ACCOMMODATION_ERROR,
    status: 'error',
    error: {
      message: 'You are not a travel admnistrator',
    },
  },
];
export const createAccommodationMockApiError = {

  status: 401,
  response: {
    data: {
      message: 'You are not a travel admnistrator',
    },
  },
};
export const createAccommodationMockApiErrors = {
  status: 401,
  response: {
    data: {
      message: [
        'You are not a travel admnistrator',
        'imageURL should be valid',
      ],
    },
  },
};
export const createAccommodationMockErrors = [
  {
    spinner: false,
    type: SPINNER_STATUS,
  },
  {
    type: CREATE_ACCOMMODATION_ERROR,
    status: 'error',
    error: {
      message: [
        'You are not a travel admnistrator',
        'imageURL should be valid',
      ],
    },
  },
];
// Props
export const createAccommodationProps = {
  stateObject: {
    accommodation: {
      createAccommodation: {
        spinner: false,
        openRoomsModal: false,
        retrievedCities: {
          data: [
            {
              id: 1,
              city: 'Kampala',
              createdAt: '2019-12-09T07:36:36.417Z',
              updatedAt: '2019-12-09T07:36:36.417Z',
            },
            {
              id: 2,
              city: 'Kigali',
              createdAt: '2019-12-09T07:36:36.417Z',
              updatedAt: '2019-12-09T07:36:36.417Z',
            },
          ],
        },
        payload: {
          message: 'Accommodation posted successfully',
        },
      },
    },
  },
  createAccommodationAction: jest.fn(),
  newAccommodationInput: jest.fn(),
  newAccommodationPhotos: jest.fn(),
  roomsModalAction: jest.fn(),
  getCitiesAction: jest.fn(),
  updateSpinnerStatus: jest.fn(),
};
export const modalSpinnerProps = {
  stateObject: {
    accommodation: {
      createAccommodation: {
        spinner: true,
        openRoomsModal: true,
        retrievedCities: {
          data: [
            {
              id: 1,
              city: 'Kampala',
              createdAt: '2019-12-09T07:36:36.417Z',
              updatedAt: '2019-12-09T07:36:36.417Z',
            },
            {
              id: 2,
              city: 'Kigali',
              createdAt: '2019-12-09T07:36:36.417Z',
              updatedAt: '2019-12-09T07:36:36.417Z',
            },
          ],
        },
      },
    },
  },
  createAccommodationAction: jest.fn(),
  newAccommodationInput: jest.fn(),
  newAccommodationPhotos: jest.fn(),
  roomsModalAction: jest.fn(),
  getCitiesAction: jest.fn(),
  updateSpinnerStatus: jest.fn(),
};
export const mainState = {
  accommodation: {
    createAccommodation: {
      rooms: [],
      photos: [],
    },
  },
};

export const modalProps = {
  appendRow: jest.fn(),
  addNewRoomsAction: jest.fn(),
  roomsModalAction: jest.fn(),
};
