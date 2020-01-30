import React from 'react';
import { shallow } from 'enzyme';
import {
  AccommodationsRooms,
  mapStateToProps,
} from '../../../views/accommodation/AccommodationsRooms';

import {
  mapStateToProspReviews,
  accommodationRoomsProps,
  roomsImagesPrevProps,
} from '../../../__mocks__/RatingMocks/BookingAccommodation';


describe('Expect to render all rooms', () => {
  const wrapper = shallow(<AccommodationsRooms {...accommodationRoomsProps} />);
  it('Should retrieve all roooms images successfully', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Should update new image when new accommodation is displayed', () => {
    const updateItem = jest.spyOn(wrapper.instance(), 'componentDidUpdate');
    wrapper.instance().componentDidUpdate(roomsImagesPrevProps.prevProps);
    expect(updateItem).toHaveBeenCalledWith(roomsImagesPrevProps.prevProps);
  });
  it('Should returns items with map state to props', () => {
    const result = mapStateToProps(mapStateToProspReviews.state);
    expect(result).toEqual({ accommodationItem: { rates: 'accommodation items follows' } });
  });
});
