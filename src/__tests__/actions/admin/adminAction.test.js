import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import apiCall from '../../../helpers/apiCall';
import {
  getRolesAction,
  assignRole,
  newRoleInput,
  paginationAction,
} from '../../../redux/actions/admin/adminAction';
import {
  retrievedRolesAction,
  retrievedRolesApi,
  assignRolesAction,
  assignRolesApi,
  assignRolesError, assignRolesErrorAction,
} from '../../../__mocks__/admin/admin';
import {
  ASSIGN_ROLE_SUCCESS, GET_ALL_ROLES, ADMIN_ERROR, NEW_ROLE_INPUT,
} from '../../../redux/actionTypes/adminActionTypes';

let store;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Password reset Actions', () => {
  beforeEach(() => {
    moxios.install(apiCall);
  });

  afterEach(() => {
    moxios.uninstall(apiCall);
  });
  it('it Should dispatch getRolesAction', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(retrievedRolesApi);
    });
    store = mockStore({});
    await store.dispatch(getRolesAction()).then(async () => {
      const calledActions = store.getActions();
      expect(calledActions).toEqual(retrievedRolesAction);
    });
  });
  it('it Should dispatch assignRoleAction', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(assignRolesApi);
    });
    store = mockStore({});
    await store.dispatch(assignRole(1, 'admin@gmail.com')).then(async () => {
      const calledActions = store.getActions();
      expect(calledActions).toEqual(assignRolesAction);
    });
  });
  it('it Should dispatch error on assignRoleAction', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject(assignRolesError);
    });
    store = mockStore({});
    await store.dispatch(assignRole(1, 'admin@gmail.com')).then(async () => {
      const calledActions = store.getActions();
      expect(calledActions).toEqual(assignRolesErrorAction);
    });
  });
  it('it Should update newRoleInput', async () => {
    const input = {
      type: NEW_ROLE_INPUT,
      newRoleId: 3,
    };
    const calledActions = newRoleInput(3);
    expect(calledActions).toEqual(input);
  });
  it('it Should dispatch signup success', async () => {
    store = mockStore({});
    const { dispatch } = store;
    dispatch(
      paginationAction({
        data: {
          data: [1, 2],
          paginationStart: 0,
          paginationEnd: 5,
        },
      }),
    );
    const calledActions = store.getActions();
    expect(calledActions).toEqual([
      {
        payload: {

          data: {
            data: [1, 2],
            paginationStart: 0,
            paginationEnd: 5,
          },
        },
        type: 'PAGINATION',
      },
    ]);
  });
});
