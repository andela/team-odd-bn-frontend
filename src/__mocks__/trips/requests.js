import React from 'react';

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
    attribute: <h2>My Travel Requests</h2>,
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
  search: {
    key: '',
    payload: [],
  },
  popUpsDisplay: {
    deleteComment: 'none',
    editTrip: 'none',
    currentPopUp: 'editTrip',
  },
  pagination: {
    pageNo: 0,
    itemsPerPage: 5,
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
                originId: 1,
                destinationId: 2,
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
