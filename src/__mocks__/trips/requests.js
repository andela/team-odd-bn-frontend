import React from 'react';
import { Link } from 'react-router-dom';

export const tableHeads = [
  { className: 'tripIdNav', attribute: 'Trip Id', key: 'tripId' },
  { className: 'tripTypeNav', attribute: 'Trip Type', key: 'tripType' },
  { className: 'createdAtNav', attribute: 'Created At', key: 'createdAt' },
  { className: 'status', attribute: 'Status', key: 'status' },
  { className: 'actionNav', attribute: 'Action', key: 'action' },
];

export const navs = [
  {
    className: 'tableHeader',
    attribute:
  <div>
    <h2>My Requests</h2>
    <h1>here</h1>
  </div>,
    key: 'tableHeader',
  },
  {
    className: 'search',
    attribute: <input type="text" placeholder="search by date" />,
    key: 'search',
  },
];
export const entities = [
  [
    { className: 'tripId', attribute: '1', key: 'tripId' },
    { className: 'tripType', attribute: 'one way', key: 'tripType' },
    { className: 'createdAt', attribute: 'today', key: 'createdAt' },
    { className: 'status', attribute: 'pending', key: 'status' },
    { className: 'action', attribute: 'view', key: 'action' },
  ],
];
export const init = {
  allAccomodation: {
    accommodations: [
      {
        id: 46,
        userId: 15,
        name: 'Victor Palace',
        cityId: 5,
        address: 'Lagos',
        description: ' Queens palace is the best accomodation facility you could ever get',
        googleCoordinates: '-77, -56',
        accommodationRooms: [
          {
            id: 90,
            accommodationId: 46,
            name: '12',
            roomType: 'single',
          },
          {
            id: 91,
            accommodationId: 46,
            name: '13',
            roomType: 'single',
          },
          {
            id: 92,
            accommodationId: 46,
            name: '14',
            roomType: 'single',
          },
        ],
        imagesAccommodation: [
          {
            id: 63,
            accommodationId: 46,
            imageUrl: 'https://images.unsplash.com/photo-1549638441-b787d2e11f14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
          },
        ],
        city: {
          id: 2,
          city: 'Kigali',
        },
        ratings: [
          {
            id: 28,
            userId: 153,
            accommodationId: 46,
            rating: '5',
            review: 'It has wifi issue',
          },
        ],
      }],
  },
  notifications: {
    notifications: {
      allNotifications: [],
    },
  },
  bookings: {
    bookAccommodation: {
      bookAccommodationInput: {
        destination: 'Kigali',
        accommodationId: 45,
        roomType: 'single',
        roomId: 23,
        checkOutDate: '2020-12-11',
        checkInDate: '2022-12-11',
        tripId: 21,
      },
    },
  },
  search: {
    key: '',
    payload: [],
  },
  popUpsDisplay: {
    bookAccommodation: 'none',
    deleteComment: 'none',
    editTrip: 'none',
    currentPopUp: 'editTrip',
  },
  pagination: {
    pageNo: 0,
    itemsPerPage: 7,
  },
  viewProfile: {
    profile: {},
  },
  profileError: { error: 'wrong' },
  auth: {
    signup: {
      signupInputData: {},
      signupData: { blockSpinner: 'blockSpinner' },
      signupError: { blockSpinner: 'blockSpinner' },
    },
    signin: {
      signinInputData: {},
      signinData: { blockSpinner: 'blockSpinner' },
      signinError: { blockSpinner: 'blockSpinner' },
    },
  },
  trips: {
    availRequests: {
      approveRequestMessage: {
      },
    },
    tripRequests: { getCity: [{ id: 1, city: 'kenya' }, { id: 2, city: 'kenya' }] },
    requests: {
      requestsData: {
        data: [
          {
            id: 5,
            userId: 1,
            tripTypeId: 3,
            statusId: 1,
            createdAt: '2020-01-11T12:34:27.264Z',
            updatedAt: '2020-01-11T12:34:27.264Z',
            trips: [
              {
                id: 6,
                tripRequestId: 5,
                originId: 'Nairobi',
                destinationId: 'Kigali',
                reason: 'kimjong',
                startDate: '2029-12-23',
                returnDate: null,
                createdAt: '2020-01-11T12:34:27.329Z',
                updatedAt: '2020-01-11T12:34:27.329Z',
              },
            ],
            tripType: {
              id: 3,
              tripType: 'MultiCity',
              createdAt: '2019-12-12T19:12:16.590Z',
              updatedAt: '2019-12-12T19:12:16.590Z',
            },
            status: {
              id: 1,
              status: 'Pending',
              createdAt: '2019-12-12T19:12:16.595Z',
              updatedAt: '2019-12-12T19:12:16.595Z',
            },
          },
        ],
      },
      singleRequestData: {
        data: {
          id: 8,
          userId: 6,
          tripTypeId: 3,
          statusId: 1,
          createdAt: '2020-01-11T22:08:54.891Z',
          updatedAt: '2020-01-11T22:08:54.891Z',
          tripType: {
            id: 3,
            tripType: 'MultiCity',
            createdAt: '2019-12-12T19:12:16.590Z',
            updatedAt: '2019-12-12T19:12:16.590Z',
          },
          status: {
            id: 1,
            status: 'Pending',
            createdAt: '2019-12-12T19:12:16.595Z',
            updatedAt: '2019-12-12T19:12:16.595Z',
          },
          user: {
            firstName: 'john',
            lastName: 'doe',
            id: 6,
          },
          trips: [
            {
              id: 10,
              tripRequestId: 8,
              originId: 1,
              destinationId: 2,
              reason: 'kimjong',
              startDate: '2069-12-23',
              returnDate: null,
              createdAt: '2020-01-11T22:08:54.908Z',
              updatedAt: '2020-01-11T22:08:54.908Z',
            },
          ],
        },
      },

      requestCommentsData: [
        {
          id: 3,
          comment: 'commejfgjhkhhgnt',
          updatedAt: '2020-01-12T07:41:14.461Z',
          user: {
            firstName: 'John',
            lastName: 'Doe',
            userProfile: {
              imageURL: '/images/me.jpg',
            },
          },
        },
      ],
      requestsError: {},
    },
  },
};
export const requestViewData = [
  {
    id: 1,
    tripType: { tripType: 'one way' },
    createdAt: '2011-30-24',
    status: { status: 'pending' },
  },
];
export const ManagerViewData = [
  {
    user: { firstName: 'Ivy', lastName: 'League' },
    tripType: { tripType: 'one way' },
    createdAt: '2011-30-24',
  },
];
