import React from 'react';

export const tableHeads = [
  { className: 'tripIdNav', attribute: 'Trip Id', key: 'tripId' },
  { className: 'tripTypeNav', attribute: 'Trip Type', key: 'tripType' },
  { className: 'createdAtNav', attribute: 'Created At', key: 'createdAt' },
  { className: 'status', attribute: 'Status', key: 'status' },
  { className: 'actionNav', attribute: 'Action', key: 'action' },
];
export const navs = [
  { className: 'tableHeader', attribute: <h2>My Travel Requests</h2>, key: 'tableHeader' },
  { className: 'search', attribute: <input type="text" placeholder="search by date" />, key: 'search' },
];

export const entities = [
  { className: 'tripId', attribute: '1', key: 'tripId' },
  { className: 'tripType', attribute: 'one way', key: 'tripType' },
  { className: 'createdAt', attribute: 'today', key: 'createdAt' },
  { className: 'status', attribute: 'pending', key: 'status' },
  { className: 'action', attribute: 'view', key: 'action' },
];
export const init = {
  viewProfile: {
    profile: {},
  },
  profileError: {},
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
    requests: {
      requestsData: [
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
              originId: 'Kampala',
              destinationId: 'Kigali',
              reason: 'kimjong',
              startDate: '2029-12-23',
              returnDate: null,
              createdAt: '2020-01-11T12:34:27.329Z',
              updatedAt: '2020-01-11T12:34:27.329Z',
            },
            {
              id: 6,
              tripRequestId: 5,
              originId: 'Kampala',
              destinationId: 'Kigali',
              reason: 'kimjong',
              startDate: '2029-12-23',
              returnDate: '2029-12-23',
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
      singleRequestData: {
        id: 8,
        userId: 1,
        tripTypeId: 3,
        statusId: 1,
        createdAt: '2020-01-11T22:08:54.891Z',
        updatedAt: '2020-01-11T22:08:54.891Z',
        trips: [
          {
            id: 10,
            tripRequestId: 8,
            originId: 'Kampala',
            destinationId: 'Nairobi',
            reason: 'kimjong',
            startDate: '2069-12-23',
            returnDate: null,
            createdAt: '2020-01-11T22:08:54.908Z',
            updatedAt: '2020-01-11T22:08:54.908Z',
          },
          {
            id: 11,
            tripRequestId: 8,
            originId: 'Nairobi',
            destinationId: 'Kampala',
            reason: 'kimjong',
            startDate: '2049-12-23',
            returnDate: '2069-12-23',
            createdAt: '2020-01-11T22:08:54.909Z',
            updatedAt: '2020-01-11T22:08:54.909Z',
          },
        ],
      },
      requestCommentsData: [
        {
          id: 3,
          comment: 'commejfgjhkhhgnt',
          updatedAt: '2020-01-12T07:41:14.461Z',
          user: {
            firstName: 'John',
            lastName: 'Doe',
          },
        },
      ],
      requestsError: {},
    },
  },
};
export const requestViewData = [{
  id: 1, tripType: { tripType: 'one way' }, createdAt: '2011-30-24', status: { status: 'pending' },
}];
