import consumeReducers from '../../../redux/reducers/tripReducers/getStatsTripReducers';
import initialState from '../../../redux/store/initialState';
import {
  GET_STATS_TRIP_ERROR, GET_STATS_INPUT, TRIP_COUNTER_INPUT, GET_STATS_TRIP_SUCCESS,
} from '../../../redux/actionTypes/getStatsActionTypes';


describe('Get stats reducer', () => {
  it('Should act on Trip Stats Error', () => {
    const tripStatErrorAction = {
      type: GET_STATS_TRIP_ERROR,
      payload: {
        message: 'Invalid dates',
      },
    };
    const triggerState = consumeReducers(
      {},
      tripStatErrorAction,
    );
    expect(triggerState).toEqual({ payload: tripStatErrorAction.payload });
  });
  it('Should act on NEW_ACCOMMODATION_INPUT', () => {
    const tripStatInputAction = {
      type: GET_STATS_INPUT,
      getStatsInput: {
      },
    };
    const triggerState = consumeReducers(
      {},
      tripStatInputAction,
    );
    expect(triggerState).toEqual({ getStatsInput: tripStatInputAction.getStatsInput });
  });
  it('Should act on trip stat success', () => {
    const tripStatInputAction = {
      type: GET_STATS_TRIP_SUCCESS,
      payload: {
        data: '',
      },
    };
    const triggerState = consumeReducers(
      {},
      tripStatInputAction,
    );
    expect(triggerState).toEqual({ getStatsData: tripStatInputAction.payload.data });
  });

  it('Should act on trip stat counter', () => {
    const tripCounterInput = {
      type: TRIP_COUNTER_INPUT,
      payload: {},
    };
    const triggerState = consumeReducers(
      {},
      tripCounterInput,
    );
    expect(triggerState).toEqual({ tripStatsCounter: tripCounterInput.payload });
  });
});
