export const viewAccommodationProps = {
  allLikesDislakes: [
    {
      likeCounter: 1,
      dislikeCounter: 0,
    },
  ],
  allAccomodation: [
    {
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
      imagesAccommodation: [
        {
          id: 62,
          accommodationId: 45,
          imageUrl: 'http://res.cloudinary.com/victorkarangwa4/image/upload/v1579876184/Screen_Shot_2019-12-19_at_10.33.23_gnuiwa.png',
          createdAt: '2020-01-24T14:29:50.665Z',
          updatedAt: '2020-01-24T14:29:50.665Z',
        },
        {
          id: 61,
          accommodationId: 45,
          imageUrl: 'http://res.cloudinary.com/victorkarangwa4/image/upload/v1579876134/34_bdjnqy.jpg',
          createdAt: '2020-01-24T14:29:50.657Z',
          updatedAt: '2020-01-24T14:29:50.657Z',
        },
      ],
      city: {
        id: 2,
        city: 'Kigali',
        createdAt: '2019-12-09T07:36:36.417Z',
        updatedAt: '2019-12-09T07:36:36.417Z',
      },
      ratings: [{
        rating: '2',
      }],
      LikesDislikes: { likeCounter: 0, dislikeCounter: 1 },
    },
  ],
  pageData: [
    {
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
      imagesAccommodation: [
        {
          id: 62,
          accommodationId: 45,
          imageUrl: 'http://res.cloudinary.com/victorkarangwa4/image/upload/v1579876184/Screen_Shot_2019-12-19_at_10.33.23_gnuiwa.png',
          createdAt: '2020-01-24T14:29:50.665Z',
          updatedAt: '2020-01-24T14:29:50.665Z',
        },
        {
          id: 61,
          accommodationId: 45,
          imageUrl: 'http://res.cloudinary.com/victorkarangwa4/image/upload/v1579876134/34_bdjnqy.jpg',
          createdAt: '2020-01-24T14:29:50.657Z',
          updatedAt: '2020-01-24T14:29:50.657Z',
        },
      ],
      city: {
        id: 2,
        city: 'Kigali',
        createdAt: '2019-12-09T07:36:36.417Z',
        updatedAt: '2019-12-09T07:36:36.417Z',
      },
      ratings: [{
        rating: '2',
      }],
      LikesDislikes: { likeCounter: 0, dislikeCounter: 1 },
    },
  ],
  viewActionAccommodation: jest.fn(),
  accommodation: {
    allAccomodation: [
      {
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
        imagesAccommodation: [
          {
            id: 62,
            accommodationId: 45,
            imageUrl: 'http://res.cloudinary.com/victorkarangwa4/image/upload/v1579876184/Screen_Shot_2019-12-19_at_10.33.23_gnuiwa.png',
            createdAt: '2020-01-24T14:29:50.665Z',
            updatedAt: '2020-01-24T14:29:50.665Z',
          },
          {
            id: 61,
            accommodationId: 45,
            imageUrl: 'http://res.cloudinary.com/victorkarangwa4/image/upload/v1579876134/34_bdjnqy.jpg',
            createdAt: '2020-01-24T14:29:50.657Z',
            updatedAt: '2020-01-24T14:29:50.657Z',
          },
        ],
        city: {
          id: 2,
          city: 'Kigali',
          createdAt: '2019-12-09T07:36:36.417Z',
          updatedAt: '2019-12-09T07:36:36.417Z',
        },
        ratings: [{
          rating: '2',
        }],
        LikesDislikes: { likeCounter: 0, dislikeCounter: 1 },
      },
    ],
    allLikesDislakes: [
      {
        likeCounter: 1,
        dislikeCounter: 0,
      },
      {
        likeCounter: 1,
        dislikeCounter: 1,
      },
    ],
    pageNo: 0,
    itemsPerPage: 5,
    changePageNo: jest.fn(),
  },
  likeAction: jest.fn(),
  dislikeAction: jest.fn(),
  statusInputAction: jest.fn(),
};

export const accommodationReducer = {
  successAccomodationReducer: {
    accommodations: ['data'],
    accommodationErrors: [],
    allLikes: [],
  },
  errorAccomodationReducer: {
    accommodations: [],
    accommodationErrors: ['Error'],
    allLikes: [],
  },
  likesDislikesAccomodationReducer: {
    accommodations: [],
    accommodationErrors: [],
    allLikes: [
      {
        likeCounter: 1,
        dislikeCounter: 0,
      },
    ],
  },
};
