export const improveTestMockup = {
  handleInputsAction: jest.fn(),
  getStatsAction: jest.fn(),
  changePageNo: jest.fn(),
  getStats: {
    getStatsInput: {
      to: '2020-01-31',
    },
    tripStatsCounter: {
      onewayTripStats: {
        tripsCounter: 2,
      },
      multiTripStats: {
        tripsCounter: 1,
      },
      roundTripStats: {
        tripsCounter: 3,
      },
    },
  },
};
export const searchTripStatisticsProps = {
  stateObject: {
    trips: {
      getStats: {
        getStatsData: {
          userTrips: [],
        },
        getStatsInput: '2020-01-31',
        tripStatsCounter: {},
      },
    },
  },
  getStatsAction: jest.fn(),
  profileError: {
    error: true,
    message: 'You have provided an invalid token',
  },
  history: {
    push: jest.fn(),
  },
};
export const SearchTripStatsViewProps = {
  pageNo: 0,
  itemsPerPage: 1,
  getStats: {
    getStatsInput: {
      tripType: 1,
    },
    tripStatsCounter: {
      onewayTripStats: {
        userTrips: [
          {
            originId: 1,
            destinationId: 2,
            createdAt: '2020-01-28 12:26:00.452+02',
            tripRequestId: 1,
          },
        ],
      },
      roundTripStats: {
        userTrips: [
          {
            originId: 1,
            destinationId: 2,
            createdAt: '2020-01-28 12:26:00.452+02',
            tripRequestId: 1,
          },
        ],
      },
      multiTripStats: {
        userTrips: [
          {
            originId: 1,
            destinationId: 2,
            createdAt: '2020-01-28 12:26:00.452+02',
            tripRequestId: 1,
          },
        ],
      },
    },
  },
};
