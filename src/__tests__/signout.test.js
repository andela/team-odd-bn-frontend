import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import 'mock-local-storage';
import apiCall from '../helpers/apiCall';
import signoutAction from '../redux/actions/signoutAction';
import signoutReducer from '../redux/reducers/signoutReducer';
import mockData from '../__mocks__/fileMock';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const { signoutProps } = mockData;


describe('Expect to mock user signout action', () => {
  let store3;
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });

  it('Should user signout action be mocked', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(signoutProps.signoutSuccessfully);
    });

    store3 = mockStore({});
    await store3.dispatch(signoutAction())
      .then(async () => {
        const calledActions = store3.getActions();
        expect(calledActions).toEqual([
          {
            payload: { data: '' },
            type: 'SIGNIN_SUCCESS',
          },
          {
            payload: true,
            type: 'SIGNOUT_SUCCESS',
          },
        ]);
      });
  });

  it('Should user signout signout action fail', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject(signoutProps.signoutFail);
    });
    store3 = mockStore({});
    await store3.dispatch(signoutAction())
      .catch(async (error) => {
        const calledActions = store3.getActions();
        expect(calledActions).toEqual([{ payload: true, type: 'SIGNOUT_SUCCESS' }]);
      });
  });
});

describe('Expect user reducer to pass', () => {
  it('Should user signout reducer update state', () => {
    const expectedData = signoutProps.successReducer;
    const fetchSuccesfulyReducer = signoutReducer(true, expectedData);
    expect(fetchSuccesfulyReducer).toEqual({ isLogged: true });
  });

  it('Should user signout fail to update state', () => {
    const expectedData = signoutProps.failureReducer;
    const fetchFailureReducer = signoutReducer(false, expectedData);
    expect(fetchFailureReducer).toEqual({ isLogged: true });
  });
});
