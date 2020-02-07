export const RateBookingsMocks = {
  popUpAction: jest.fn(),
  display: {
    rate: 'flex',
  },
  initialPopupState: {
    popUpDisplay: {
      rate: 'flex',
    },
  },
  state: {
    popUpDisplay: {
      rate: 'none',
    },
  },
  onEditInputAction: jest.fn(),
};

export const viewSpecificAccommodationMocks = {
  singleAccommodation: jest.fn(),
  match: {
    params: {
      id: 1,
    },
  },
  accommodationItem: {
    id: 45,
    userId: 15,
    name: 'Eric Palace',
    cityId: 2,
    address: 'Kigali',
    description: 'I am going there',
    googleCoordinates: '-22,-12',
    createdAt: '2020-01-24T14:29:50.618Z',
    updatedAt: '2020-01-24T14:29:50.618Z',
  },
  accommodationItemError: [],
};

export const noSpecificAccommodationMocks = {
  singleAccommodation: jest.fn(),
  match: {
    params: {
      id: 1,
    },
  },
  accommodationItem: undefined,
  accommodationItemError: ['server error'],
};

export const accommodationReviewsMocks = {
  accommodationItem: {
    ratings: [
      {
        id: 39,
        userId: 1,
        accommodationId: 45,
        rating: '3',
        review: 'Not really bad ',
        createdAt: '2020-02-04T06:10:04.753Z',
        updatedAt: '2020-02-04T06:10:04.753Z',
        users: {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
          userProfile: {
            imageURL: 'https://res.cloudinary.com/dpzertkmu/image/upload/v1579680509/clientImage/kristopher-roller-PC_lbSSxCZE-unsplash_mcyct9.jpg',
          },
        },
      },
    ],
  },
};

export const emptyAccommodationReviewsMocks = {
  accommodationItem: {
    ratings: [],
  },
};

export const mapStateToProspReviews = {
  state: {
    specificAccommodation: {
      singleAccommodation: [
        { rates: 'accommodation items follows' },
      ],
    },
  },
};

export const accommodationRoomsProps = {
  accommodationItem: {
    id: 1,
    accommodationRooms: [
      {
        id: 88,
        accommodationId: 45,
        name: 'Kackity',
        roomType: 'Double',
        createdAt: '2020-01-24T14:29:50.761Z',
        updatedAt: '2020-01-24T14:29:50.761Z',
      },
      {
        id: 89,
        accommodationId: 45,
        name: 'Serena',
        roomType: 'Single',
        createdAt: '2020-01-24T14:29:50.762Z',
        updatedAt: '2020-01-24T14:29:50.762Z',
      },
    ],
    imagesAccommodation: [
      {
        id: 61,
        accommodationId: 45,
        imageUrl: 'https://images.unsplash.com/photo-1559599238-308793637427?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        createdAt: '2020-01-24T14:29:50.657Z',
        updatedAt: '2020-01-24T14:29:50.657Z',
      },
      {
        id: 62,
        accommodationId: 45,
        imageUrl: 'https://images.unsplash.com/photo-1558685385-e9ad7b3c885c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        createdAt: '2020-01-24T14:29:50.665Z',
        updatedAt: '2020-01-24T14:29:50.665Z',
      },
    ],
  },
};

export const roomsImagesPrevProps = {
  prevProps: {
    accommodationItem: {
      id: 2,
      accommodationRooms: [
        {
          id: 88,
          accommodationId: 45,
          name: 'Kackity',
          roomType: 'Double',
          createdAt: '2020-01-24T14:29:50.761Z',
          updatedAt: '2020-01-24T14:29:50.761Z',
        },
      ],
      imagesAccommodation: [
        {
          id: 61,
          accommodationId: 45,
          imageUrl: 'https://images.unsplash.com/photo-1559599238-308793637427?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
          createdAt: '2020-01-24T14:29:50.657Z',
          updatedAt: '2020-01-24T14:29:50.657Z',
        },
      ],
    },
  },
};

export const viewSpecificAccommodationViewsMocks = {
  accommodationItem: {
    id: 45,
    userId: 15,
    name: 'Eric Palace',
    cityId: 2,
    address: 'Kigali',
    description: 'I am going there',
    googleCoordinates: '-22,-12',
    createdAt: '2020-01-24T14:29:50.618Z',
    updatedAt: '2020-01-24T14:29:50.618Z',
    accommodationRooms: [
      {
        id: 88,
        accommodationId: 45,
        name: 'Kackity',
        roomType: 'Double',
        createdAt: '2020-01-24T14:29:50.761Z',
        updatedAt: '2020-01-24T14:29:50.761Z',
      },
      {
        id: 89,
        accommodationId: 45,
        name: 'Serena',
        roomType: 'Single',
        createdAt: '2020-01-24T14:29:50.762Z',
        updatedAt: '2020-01-24T14:29:50.762Z',
      },
    ],
    city: {
      id: 2,
      city: 'Kigali',
      createdAt: '2019-12-09T07:36:36.417Z',
      updatedAt: '2019-12-09T07:36:36.417Z',
    },
    imagesAccommodation: [
      {
        id: 61,
        accommodationId: 45,
        imageUrl: 'https://images.unsplash.com/photo-1559599238-308793637427?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        createdAt: '2020-01-24T14:29:50.657Z',
        updatedAt: '2020-01-24T14:29:50.657Z',
      },
      {
        id: 62,
        accommodationId: 45,
        imageUrl: 'https://images.unsplash.com/photo-1558685385-e9ad7b3c885c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        createdAt: '2020-01-24T14:29:50.665Z',
        updatedAt: '2020-01-24T14:29:50.665Z',
      },
    ],
  },
  popUpAction: jest.fn(),
  display: {
    map: 'flex',
  },
};
