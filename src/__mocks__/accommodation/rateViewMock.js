export const mapViewProps = {
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
  },
  popUpAction: jest.fn(),
  prevProps: {
    accommodationItem: {
      id: 47,
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
    },
  },
};

export const viewPortMapMock = {
  width: 0,
  height: 0,
  latitude: -1.9500725,
  longitude: 30.0846178,
  zoom: 15,
  bearing: 0,
  pitch: 0,
  altitude: 1.5,
  maxZoom: 24,
  minZoom: 0,
  maxPitch: 60,
  minPitch: 0,
  transitionDuration: 0,
};


export const cityInfoProps = {
  info: {
    name: 'John',
    address: 'Kigali',
    image: 'user.jpg',
  },
};


export const pinMockPropsData = {
  data: [
    {
      address: 'Kigali',
      name: 'Eric Palace',
      image: 'https://images.unsplash.com/photo-1559599238-30879…ib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      latitude: -1.9500725,
      longitude: 30.0846178,
    },
  ],
  onClick: jest.fn(),
};
