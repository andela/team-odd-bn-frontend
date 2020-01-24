import React from 'react';
import { shallow, mount } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  UserRoles, mapStateToProps,
} from '../../../containers/admin/UserRoles';
import {
  defaultProps,
  updateDefaultProps,
  emptyDataComponent,
} from '../../../__mocks__/admin/admin';
import rootReducer from '../../../redux/reducers/index';

const middlewares = [thunk];
const testStore = (state) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, state);
};
const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = mount(
    <Router>

      <UserRoles {...defaultProps} store={store} />
    </Router>,
  );
  return wrapper;
};
const setUpEmptyTable = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(
    <Router>
      <UserRoles {...emptyDataComponent} store={store} />
    </Router>,

  );
  return wrapper;
};

describe('User roles test suite', () => {
  beforeEach(() => {
    const input = document.createElement('input');
    input.setAttribute('id', 'searchInput');
    document.body.appendChild(input);
  });
  beforeEach(() => {
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="entity">
    <div class="firstName">user</div>
    <div class="lastName">test</div>
    <div class="Email">me@you.com</div>
    <div class="role">user</div>
    </div>
    <div class="entity">
    <div class="firstName">user</div>
    <div class="lastName">test</div>
    <div class="Email">admin@gmail.com</div>
    <div class="role">user</div>
    </div>
    `;
    div.setAttribute('class', 'tableContainer');
    document.body.appendChild(div);
  });

  it('Should mount without table data', () => {
    const component = setUpEmptyTable({});
    const componentDidMountSpy = jest.spyOn(
      component.instance(),
      'componentDidMount',
    );
    component.find('[data-test="userRoles-test"]');
    expect(componentDidMountSpy).not.toHaveBeenCalled();
  });
  it('Should call componentDidMount Successfully', () => {
    const component = setUp({});
    const componentDidMountSpy = jest.spyOn(component.instance(), 'componentDidMount');
    component.find('[data-test="userRoles-test"]');
    expect(componentDidMountSpy).not.toHaveBeenCalled();
  });
  it('Should be able to search', () => {
    const component = setUp({});
    component.find('[data-test="dataFilter-test"]').simulate('change', 'admin');
    component.find('[data-test="dataFilter-test"]').simulate('change', 'me');
  });
  it('should map state to props', () => {
    const initialState = {};
    expect(mapStateToProps(initialState).adminState).toBeDefined();
  });
});
