// eslint-disable-next-line react/jsx-props-no-spreading

import React from 'react';
import { shallow } from 'enzyme';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { StatsNav } from '../components/GetStatsNav';
import { Requests } from '../containers/trips/SearchStats';
import SearchTripStats from '../views/trips/SearchTripStats';
import { isTravelAdmin } from '../helpers/isTravelAdmin';
import { getStatsAction, updateSpinnerStatus, handleInputsAction, updateTripCounter } from '../redux/actions/tripsActions/statsTripActions';
import apiCall from '../helpers/apiCall';
import joinLikesAccomodation from '../helpers/joinLikesAccomodation';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

/* src/components GetStatsNav.js */
const improveTestMockup = {
  handleInputsAction: jest.fn(),
  getStatsAction: jest.fn(),
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

describe('Expect to test and display trip stats with navigation', () => {
  const component = shallow(<StatsNav {...improveTestMockup} />);
  it('Should render successfully', () => {
    expect(component).toMatchSnapshot();
  });
  it('Should simulate on change type from input function', () => {
    const addInput = component.find('input').at(0);
    addInput.simulate('change', { target: { value: '2020-01-31' } });
  });

  it('Should simulate on change type to input function', () => {
    const addInput = component.find('input').at(1);
    addInput.simulate('change', { target: { value: '2020-01-31' } });
  });

  it('Should simulate on click NavLink for oneway to handle input function', () => {
    const addNavLink = component.find('NavLink').at(0);
    addNavLink.simulate('click');
  });

  it('Should simulate on click NavLink for round trip to handle input function', () => {
    const addNavLink = component.find('NavLink').at(1);
    addNavLink.simulate('click');
  });

  it('Should simulate on click NavLink for multicity to handle input function', () => {
    const addNavLink = component.find('NavLink').at(2);
    addNavLink.simulate('click');
  });

  it('Should simulate on click button search trip ', () => {
    const addButton = component.find('button');
    addButton.simulate('click');
  });
});


/* src/containers/trips/SearchStats.js */
const searchTripStatisticsProps = {
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

describe('Expect to search stats nav', () => {
  const component = shallow(<Requests {...searchTripStatisticsProps} />);
  it('Should render successfully', () => {
    expect(component).toMatchSnapshot();
  });
});


/* views/trips SearchTripStats.js */
const SearchTripStatsViewProps = {
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
};

describe('Expect to search stats nav', () => {
  it('Should search trips oneway statics viewed', () => {
    const viewSearchOneWayTrips = SearchTripStats(SearchTripStatsViewProps);
    expect(viewSearchOneWayTrips).toBeTruthy();
  });
  it('Should search trips roundTrips statics viewed', () => {
    SearchTripStatsViewProps.getStatsInput.tripType = 2;
    SearchTripStatsViewProps.tripStatsCounter.onewayTripStats = '';
    const viewSearchOneWayTrips = SearchTripStats(SearchTripStatsViewProps);
    expect(viewSearchOneWayTrips).toBeTruthy();
  });
  it('Should search trips roundTrips statics viewed', () => {
    SearchTripStatsViewProps.getStatsInput.tripType = 3;
    SearchTripStatsViewProps.tripStatsCounter.onewayTripStats = '';
    SearchTripStatsViewProps.tripStatsCounter.roundTripStats = '';
    const viewSearchOneWayTrips = SearchTripStats(SearchTripStatsViewProps);
    expect(viewSearchOneWayTrips).toBeTruthy();
  });
});


/* helpers/isTravelAdmin */
describe('Expect to verify travel admin', () => {
  isTravelAdmin();
});


/* src/redux/actions/tripsActions/statsTripActions.js */
const inputSearch = {
  from: '2020-01-31',
  to: '2020-05-31',
  tripType: undefined,
};

describe('Expect to mock error and reject to view accommodation', () => {
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });

  it('Should mock search request and return error response', async () => {
    const errorResp = {
      status: 400,
      response: {
        data: {
          message: 'No trips search found',
        },
      },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject(errorResp);
    });

    const store = mockStore({});
    await store.dispatch(getStatsAction(inputSearch))
      .catch((error) => {
        expect(error.status).toEqual(errorResp.status);
        expect(error.response.message).toEqual(errorResp.response.message);
      });
  });
});

describe('Expect to test all trips helper function', () => {
  it('Should return updateSpinnerStatus payload', () => {
    const result = updateSpinnerStatus(false);
    expect(result).toEqual({
      type: 'UPDATE_SPINNER_STATUS',
      spinner: false,
    });
  });

  it('Should return handleInputsAction payload', () => {
    const result = handleInputsAction('feke data');
    expect(result).toEqual({
      type: 'GET_STATS_INPUT',
      payload: 'feke data',
    });
  });

  it('Should return updateTripCounter payload', () => {
    const result = updateTripCounter('feke data');
    expect(result).toEqual({
      type: 'TRIP_COUNTER_INPUT',
      payload: 'feke data',
    });
  });
});


// src/helpers/joinLikes&Accomodation.js
const allLikes = [
  { likeCounter: 0, dislikeCounter: 1 },
];

const accommodation = [
  {
    item1: [],
  },
];

describe('Expect to join likes and dislikes', () => {
  it('Should join accommodation with likes ', () => {
    const result = joinLikesAccomodation(accommodation, allLikes);
    expect(result).toEqual([
      {
        item1: [],
        LikesDislikes: { likeCounter: 0, dislikeCounter: 1 },
      },
    ]);
  });
});
