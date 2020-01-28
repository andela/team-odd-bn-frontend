import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ManagerView from '../../../views/trips/ManagerView';
import { ManagerViewData } from '../../../__mocks__/trips/requests';
import initialState from '../../../redux/store/initialState';

let wrapper;
const mockStore = configureStore([]);
let store;
describe('Manager View Test Suite ', () => {
  store = mockStore(initialState);

  it('Test snapshot using the initial state', () => {
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <ManagerView data={ManagerViewData} />
        </Router>
      </Provider>,

    );
    expect(wrapper).toMatchSnapshot();
  });
});
