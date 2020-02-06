
import {
  GET_SINGLE_BOOKINGS_ERROR,
  GET_SINGLE_BOOKINGS_SUCCESS,
  OPEN_SINGLE_BOOKING,
} from '../../redux/actionTypes/bookingActionTypes';

export const getSingleBookingAction = {
  type: GET_SINGLE_BOOKINGS_SUCCESS,
  payload: {
    message: 'User booking requests are retrieved successfully',
    data: {
      myBookingsresult: [],
      managerWatchBookings: [],
    },
  },
};
export const getSingleBookingErrorAction = {
  type: GET_SINGLE_BOOKINGS_ERROR,
  payload: '',
};
export const openModalAction = {
  type: OPEN_SINGLE_BOOKING,
  payload: true,
};
export const defaultProps = {
  data: {
    myBookingsresult: [
      {
        id: 1,
        tripId: 2,
        roomId: 3,
        checkInDate: '2020-02-28T00:00:00.000Z',
        checkOutDate: '2021-04-12T00:00:00.000Z',
        createdAt: '2020-02-03T11:01:01.440Z',
        updatedAt: '2020-02-03T11:01:01.440Z',
        'trip.id': 2,
        'trip.tripRequestId': 2,
        'trip.originId': 2,
        'trip.destinationId': 1,
        'trip.reason': 'Some other good return trip reson',
        'trip.startDate': '2021-03-20',
        'trip.returnDate': '2021-05-13',
        'trip.createdAt': '2020-02-03T10:58:13.595Z',
        'trip.updatedAt': '2020-02-03T10:58:13.595Z',
        'trip.tripRequest.id': 2,
        'trip.tripRequest.userId': 5,
        'trip.tripRequest.tripTypeId': 2,
        'trip.tripRequest.statusId': 1,
        'trip.tripRequest.createdAt': '2020-02-03T10:58:13.571Z',
        'trip.tripRequest.updatedAt': '2020-02-03T10:58:13.571Z',
        'room.id': 3,
        'room.accommodationId': 3,
        'room.name': 'kilimanjalo',
        'room.roomType': '3 bed 1 living room',
        'room.createdAt': '2020-01-28T08:19:55.406Z',
        'room.updatedAt': '2020-01-28T08:19:55.406Z',
        'room.accommodation.id': 3,
        'room.accommodation.userId': null,
        'room.accommodation.name': 'muhabura',
        'room.accommodation.cityId': 1,
        'room.accommodation.address': 'kigali',
        'room.accommodation.description': '7 stars hotels...',
        'room.accommodation.googleCoordinates': '-1.953656, 30.062354',
        'room.accommodation.createdAt': '2020-01-28T08:19:55.371Z',
        'room.accommodation.updatedAt': '2020-01-28T08:19:55.371Z',
      },
    ],
    managerWatchBookings: [
      {
        id: 1,
        tripId: 2,
        roomId: 3,
        checkInDate: '2020-02-28T00:00:00.000Z',
        checkOutDate: '2021-04-12T00:00:00.000Z',
        createdAt: '2020-02-03T11:01:01.440Z',
        updatedAt: '2020-02-03T11:01:01.440Z',
        'trip.id': 2,
        'trip.tripRequestId': 2,
        'trip.originId': 2,
        'trip.destinationId': 1,
        'trip.reason': 'Some other good return trip reson',
        'trip.startDate': '2021-03-20',
        'trip.returnDate': '2021-05-13',
        'trip.createdAt': '2020-02-03T10:58:13.595Z',
        'trip.updatedAt': '2020-02-03T10:58:13.595Z',
        'trip.tripRequest.id': 2,
        'trip.tripRequest.userId': 5,
        'trip.tripRequest.tripTypeId': 2,
        'trip.tripRequest.statusId': 1,
        'trip.tripRequest.createdAt': '2020-02-03T10:58:13.571Z',
        'trip.tripRequest.updatedAt': '2020-02-03T10:58:13.571Z',
        'room.id': 3,
        'room.accommodationId': 3,
        'room.name': 'kilimanjalo',
        'room.roomType': '3 bed 1 living room',
        'room.createdAt': '2020-01-28T08:19:55.406Z',
        'room.updatedAt': '2020-01-28T08:19:55.406Z',
        'room.accommodation.id': 3,
        'room.accommodation.userId': null,
        'room.accommodation.name': 'muhabura',
        'room.accommodation.cityId': 1,
        'room.accommodation.address': 'kigali',
        'room.accommodation.description': '7 stars hotels...',
        'room.accommodation.googleCoordinates': '-1.953656, 30.062354',
        'room.accommodation.createdAt': '2020-01-28T08:19:55.371Z',
        'room.accommodation.updatedAt': '2020-01-28T08:19:55.371Z',
      },
    ],
  },
  cities: [
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
  accommodation: {
    createAccommodation: {
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
  openSingleBooking: jest.fn(),
};
export const initiaState = {

  bookings: {
    modal: {
      payload: {
        data: {
          myBookingsresult: [
            {
              id: 1,
              tripId: 2,
              roomId: 3,
              checkInDate: '2020-02-28T00:00:00.000Z',
              checkOutDate: '2021-04-12T00:00:00.000Z',
              createdAt: '2020-02-03T11:01:01.440Z',
              updatedAt: '2020-02-03T11:01:01.440Z',
              'trip.id': 2,
              'trip.tripRequestId': 2,
              'trip.originId': 2,
              'trip.destinationId': 1,
              'trip.reason': 'Some other good return trip reson',
              'trip.startDate': '2021-03-20',
              'trip.returnDate': '2021-05-13',
              'trip.createdAt': '2020-02-03T10:58:13.595Z',
              'trip.updatedAt': '2020-02-03T10:58:13.595Z',
              'trip.tripRequest.id': 2,
              'trip.tripRequest.userId': 5,
              'trip.tripRequest.tripTypeId': 2,
              'trip.tripRequest.statusId': 1,
              'trip.tripRequest.createdAt': '2020-02-03T10:58:13.571Z',
              'trip.tripRequest.updatedAt': '2020-02-03T10:58:13.571Z',
              'room.id': 3,
              'room.accommodationId': 3,
              'room.name': 'kilimanjalo',
              'room.roomType': '3 bed 1 living room',
              'room.createdAt': '2020-01-28T08:19:55.406Z',
              'room.updatedAt': '2020-01-28T08:19:55.406Z',
              'room.accommodation.id': 3,
              'room.accommodation.userId': null,
              'room.accommodation.name': 'muhabura',
              'room.accommodation.cityId': 1,
              'room.accommodation.address': 'kigali',
              'room.accommodation.description': '7 stars hotels...',
              'room.accommodation.googleCoordinates':
                         '-1.953656, 30.062354',
              'room.accommodation.createdAt':
                         '2020-01-28T08:19:55.371Z',
              'room.accommodation.updatedAt':
                         '2020-01-28T08:19:55.371Z',
            },
          ],
          managerWatchBookings: [
            {
              id: 1,
              tripId: 2,
              roomId: 3,
              checkInDate: '2020-02-28T00:00:00.000Z',
              checkOutDate: '2021-04-12T00:00:00.000Z',
              createdAt: '2020-02-03T11:01:01.440Z',
              updatedAt: '2020-02-03T11:01:01.440Z',
              'trip.id': 2,
              'trip.tripRequestId': 2,
              'trip.originId': 2,
              'trip.destinationId': 1,
              'trip.reason': 'Some other good return trip reson',
              'trip.startDate': '2021-03-20',
              'trip.returnDate': '2021-05-13',
              'trip.createdAt': '2020-02-03T10:58:13.595Z',
              'trip.updatedAt': '2020-02-03T10:58:13.595Z',
              'trip.tripRequest.id': 2,
              'trip.tripRequest.userId': 5,
              'trip.tripRequest.tripTypeId': 2,
              'trip.tripRequest.statusId': 1,
              'trip.tripRequest.createdAt': '2020-02-03T10:58:13.571Z',
              'trip.tripRequest.updatedAt': '2020-02-03T10:58:13.571Z',
              'room.id': 3,
              'room.accommodationId': 3,
              'room.name': 'kilimanjalo',
              'room.roomType': '3 bed 1 living room',
              'room.createdAt': '2020-01-28T08:19:55.406Z',
              'room.updatedAt': '2020-01-28T08:19:55.406Z',
              'room.accommodation.id': 3,
              'room.accommodation.userId': null,
              'room.accommodation.name': 'muhabura',
              'room.accommodation.cityId': 1,
              'room.accommodation.address': 'kigali',
              'room.accommodation.description': '7 stars hotels...',
              'room.accommodation.googleCoordinates':
                         '-1.953656, 30.062354',
              'room.accommodation.createdAt':
                         '2020-01-28T08:19:55.371Z',
              'room.accommodation.updatedAt':
                         '2020-01-28T08:19:55.371Z',
            },
          ],
        },
      },
    },
  },
  accommodation: {
    createAccommodation: {
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
};
export const tempViewAllBooking = {
  bookings: {
    modal: {
      openSingleBooking: true,
    },
  },
  openSingleBooking: jest.fn(),
  getSingleBooking: jest.fn(),
  getCitiesAction: jest.fn(),
};
