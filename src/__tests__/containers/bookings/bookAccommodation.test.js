import React from 'react';
import dotenv from 'dotenv';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import BookAccommodation from '../../../views/accommodation/BookAccommodation';
import initialState from '../../../redux/store/initialState';
import {
  init,
} from '../../../__mocks__/trips/requests';
import 'jest-localstorage-mock';

dotenv.config();
const mockStore = configureStore([]);
let wrapper;
let store;

describe('Common Single Request page ', () => {
  it('it Should dispatch reject button successfully', async () => {
    store = mockStore(init);
    localStorage.setItem('token', process.env.TESTING_TOKEN);

    wrapper = mount(
      <Provider store={store}>
        <Router>
          <BookAccommodation />
        </Router>
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
    const selectRoomType = wrapper.find('#selectRoomType');
    const selectRoomName = wrapper.find('#selectRoomName');
    const checkInDate = wrapper.find('#checkInDate');
    const checkOutDate = wrapper.find('#checkOutDate');
    const save = wrapper.find('#save');
    const cancel = wrapper.find('#cancel');
    selectRoomType.simulate('change');
    selectRoomName.simulate('change');
    checkOutDate.simulate('change');
    checkInDate.simulate('change');
    save.simulate('click');
    cancel.simulate('click');
    expect(jest.fn().mock.calls).toBeDefined();
  });
  it('it Should dispatch reject button successfully', async () => {
    store = mockStore({
      popUpsDisplay: {
        bookAccommodation: 'none',
        deleteComment: 'none',
        editTrip: 'none',
        currentPopUp: 'editTrip',
      },
      viewProfile: { profile: '' },
      trips: { requests: { requestsData: [] }, tripRequests: { getCity: [] } },
      allAccomodation: { accommodations: [] },
      bookings: { bookAccommodation: { bookAccommodationInput: {} } },
    });
    localStorage.setItem('token', process.env.TESTING_TOKEN);

    wrapper = mount(
      <Provider store={store}>
        <Router>
          <BookAccommodation />
        </Router>
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
