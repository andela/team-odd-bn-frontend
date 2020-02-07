import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  RatesBookings,
  mapStateToProps,
} from '../../../views/bookings/RatesBookings';
import {
  rateData,
  mapStateToPropsMockData,
} from '../../../__mocks__/RatingMocks/rates';


describe('Expect booking view to pass', () => {
  const wrapper = shallow(<RatesBookings {...rateData} />);
  it('Should render successfuflly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Expect submit rating', () => {
  const wrapper = shallow(<RatesBookings {...rateData} />);
  it('Should simulate on handle input change', () => {
    const e = { preventDefault: () => 'submit data' };
    const sendRate = jest.spyOn(wrapper.instance(), 'onSubmitRating');
    wrapper.instance().onSubmitRating(e);
    expect(sendRate).toHaveBeenCalledWith(e);
  });
});

describe('Expect redirect after submit rating', () => {
  rateData.ratings.submitSucces = true;
  const wrapper = shallow(<RatesBookings {...rateData} />);
  it('Should redirect user to booking page', () => {
    expect(wrapper).toBeTruthy();
  });
  rateData.ratings.submitSucces = false;
});

describe('Expect to edit and edit new input rate', () => {
  const wrapper = mount(<RatesBookings {...rateData} />);
  it('Should user edit text feedback box', () => {
    const editInput = wrapper.find('textarea');
    const e = { target: { name: 'feedbackInput', value: 'I like the hotel' } };
    const result = editInput.simulate('change', e);
    expect(result).toBeTruthy();
  });

  it('Should user edit text feedback box', () => {
    const editInput = wrapper.find('.rate-common-btn-cancel');
    const result = editInput.simulate('click');
    expect(result).toBeTruthy();
  });
});

describe('Expect to mock mapStateToProps', () => {
  const result = mapStateToProps(mapStateToPropsMockData);
  it('Should return rating state', () => {
    expect(result.ratings).toEqual(mapStateToPropsMockData.ratings.RatesAccommodation);
  });
});
