export const getCities = {
  status: 200,
  response: {
    message: 'Location retrieved',
    data: [
      {
        id: 1,
        city: 'Kigali',
        createdAt: '2019-12-09T07:36:36.417Z',
        updatedAt: '2019-12-09T07:36:36.417Z',
      },
    ],
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
