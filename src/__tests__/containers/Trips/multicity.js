import React from 'react';
import { shallow } from 'enzyme';
import { MulticityTrip } from '../../../containers/Trips/MulticityTrip';
import multicityProps, { checkInputData } from '../../../__mocks__/trips/multicity';
import { MulticityTripView } from '../../../views/trips/Multicity';
import convertInput from '../../../helpers/convertField';
import findWordInText from '../../../helpers/findWordInText';

describe('Expect multicity trip container to pass', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const wrapper = shallow(<MulticityTrip {...multicityProps} />);
  it('Should render without problem', () => {
    expect((wrapper).exists()).toBeTruthy();
  });
});

describe('Expect to simulate functions', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const component = shallow(<MulticityTrip {...multicityProps} />);

  it('Should simulate on handle add more trip function', () => {
    jest.spyOn(component.instance(), 'onHandleAddMoreTrip');
    component.instance().forceUpdate();
    const addButton = component.find('button').at(0);
    addButton.simulate('click');
  });

  it('Should simulate on handle remove function', () => {
    const removeTrip = jest.spyOn(component.instance(), 'onHandleRemoveMoreTrip');
    component.instance().onHandleRemoveMoreTrip(0);
    expect(removeTrip).toHaveBeenCalledWith(0);
  });

  it('Should simulate on handle input change', () => {
    const e = {
      target: { name: 'reason', value: 2 },
    };
    const removeTrip = jest.spyOn(component.instance(), 'onHandleInputChange');
    component.instance().onHandleInputChange(e, 2);
    expect(removeTrip).toHaveBeenCalledWith(e, 2);
  });

  it('Should simulate on handle submit', () => {
    const e = { preventDefault: () => 'submit data' };
    const removeTrip = jest.spyOn(component.instance(), 'onHandleSubmit');
    component.instance().onHandleSubmit(e);
    expect(removeTrip).toHaveBeenCalledWith(e);
  });
});

describe('Expect multicity view to pass', () => {
  const component = shallow(<MulticityTripView {...multicityProps} />);
  it('Should render without problem', () => {
    expect((component).exists()).toBeTruthy();
  });
});

describe('Expect to simulate multicity trip view', () => {
  const component = shallow(<MulticityTripView {...multicityProps} />);
  it('Should render trip origin onchange event', () => {
    const findOriginId = component.find('select').at(0);
    findOriginId.simulate('change');
  });

  it('Should render trip destination on change event', () => {
    const findOriginId = component.find('select').at(1);
    findOriginId.simulate('change');
  });

  it('Should render trip text reason on change event', () => {
    const findOriginId = component.find('textarea').at(0);
    findOriginId.simulate('change');
  });

  it('Should render trip starting date on change event', () => {
    const findOriginId = component.find('input').at(0);
    findOriginId.simulate('change');
  });

  it('Should render trip returning date on change event', () => {
    const findOriginId = component.find('input').at(1);
    findOriginId.simulate('change');
  });

  it('Should render trip remove button on change event', () => {
    const findOriginId = component.find('.remove-trip-btn');
    findOriginId.simulate('click');
  });
});

describe('Expect to check and convert data', () => {

  it('Expect payload to have originId be converted', () => {
    const checkedData = convertInput(checkInputData.payload);
    expect(checkedData).toBeTruthy();
  });

  it('Expect payload to have destinationId to be converted', () => {
    const checkedData = convertInput(checkInputData.payload2);
    expect(checkedData).toBeTruthy();
  });

  it('Expect payload not to have destinationId and originId', () => {
    const checkedData = convertInput(checkInputData.payload3);
    expect(checkedData).toBeTruthy();
  });
});

describe('Expect to find word', () => {
  it('Should find a word', () => {
    findWordInText('I am word', 'am');
  });
});
