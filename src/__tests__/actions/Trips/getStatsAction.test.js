
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import apiCall from '../../../helpers/apiCall';
import { getStatsAction } from '../../../redux/actions/tripsActions/statsTripActions';
import { GET_STATS_TRIP_SUCCESS, TRIP_COUNTER_INPUT } from '../../../redux/actionTypes/getStatsActionTypes';

let store;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('Get stats Actions test suites', () => {
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });

  it('it Should dispatch getStatsAction', () => {
    const payload = [{
      tripType: 2,
      from: '2020-01-02',
      to: '2020-03-03',
    },
    {
      from: '2020-01-02',
      to: '2020-03-03',
    },
    ];


    const theResult = {
      status: 200,
      response: {
        message: 'Location retrieved',
        data: [
          {
            id: 1,
            origin: 'Kampala',
            destination: 'Kenya',
          }],
      },
    };

    const tripStatsAction = {

      type: GET_STATS_TRIP_SUCCESS,
      getStatsResponse: {
        data: {},
      },
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(theResult);
    });
    store = mockStore({});
    store.dispatch(getStatsAction(payload)).then(async () => {
      const calledActions = store.getActions();
      expect(calledActions).toEqual(tripStatsAction);
    });
  });
});
