import consumeReducers from '../../../redux/reducers/tripReducers/onewayReducers';
import initialState from '../../../redux/store/initialState';


describe('Oneway Tests ', () => {
  it('Should handle oneway success', () => {
    const newState = consumeReducers(initialState.trips.tripRequests, {
      type: 'ONEWAY_SUCCESS',
      payload: {
        requestsData: {
          message: 'Trip requested successfully',
        },
      },
    });
    expect(newState).toEqual({
      getCity: [],
      onewayData: {},
      onewayError: {},
      onewayInput: {},
      payload: {
        requestsData: {
          message: 'Trip requested successfully',
        },
      },

    });
  });

  it('Should handle get all cities success', () => {
    const newState = consumeReducers(initialState.trips.tripRequests, {
      type: 'GET_CITY_SUCCESS',
      payload: {
        message: 'Location retrieved',
      },
    });
    expect(newState).toEqual({
      getCity: undefined,
      onewayData: {},
      onewayError: {},
      onewayInput: {},

    });
  });


  it('Should handle Spinner on error', () => {
    const spinner = {
      type: 'UPDATE_SPINNER_STATUS',
      spinner: false,
    };
    const triggerState = consumeReducers({}, spinner);
    expect(triggerState).toEqual(
      {
        spinner: false,
      },
    );
  });
  it('Should handle the input successfully', () => {
    const spinner = {
      type: 'ONEWAY_INPUT',
      spinner: false,
    };
    const triggerState = consumeReducers({}, spinner);
    expect(triggerState).toEqual(
      {
        onewayInput: {},
      },
    );
  });
  it('Should handle the error from inputs', () => {
    const spinner = {
      type: 'ONEWAY_ERROR',
      spinner: false,
    };
    const triggerState = consumeReducers({}, spinner);
    expect(triggerState).toEqual({});
  });
});
