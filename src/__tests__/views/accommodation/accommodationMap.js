import React from 'react';
import { shallow } from 'enzyme';
import { AccommodationMap } from '../../../views/accommodation/AccommodationMap';
import {
  mapViewProps,
  cityMapMock,
  viewPortMapMock,
  cityInfoProps,
  pinMockPropsData
} from '../../../__mocks__/accommodation/rateViewMock';
import CityInfo from '../../../views/accommodation/city-info';
import Pins from '../../../views/accommodation/pins';


describe('Expect to render map component', () => {
  const component = shallow(<AccommodationMap {...mapViewProps} />);
  it('Should render map successfully', () => {
    expect(component).toMatchSnapshot();
  });
  it('Should update new data and plot to maps', () => {
    const removeTrip = jest.spyOn(component.instance(), 'componentDidUpdate');
    component.instance().componentDidUpdate(mapViewProps.prevProps);
    expect(removeTrip).toHaveBeenCalledWith(mapViewProps.prevProps);
  });
  it('Should update view port', () => {
    const removeTrip = jest.spyOn(component.instance(), '_updateViewport');
    component.instance()._updateViewport(viewPortMapMock);
    expect(removeTrip).toHaveBeenCalledWith(viewPortMapMock);
  });
  it('Should be returning city when clicked', () => {
    const removeTrip = jest.spyOn(component.instance(), '_onClickMarker');
    component.instance()._onClickMarker(cityMapMock);
    expect(removeTrip).toHaveBeenCalledWith(cityMapMock);
  });
  it('Should be render pop up', () => {
    const removeTrip = jest.spyOn(component.instance(), '_renderPopup');
    component.instance()._renderPopup(cityMapMock);
    expect(removeTrip).toHaveBeenCalledWith(cityMapMock);
  });
});

describe('Expect to mock cities information', () => {
  const component = shallow(<CityInfo {...cityInfoProps} />);
  const isImageFound = component.find('.img');
  expect(isImageFound).toBeTruthy();
});

describe('Expect to pin a house on map', () => {
  const component = shallow(<Pins {...pinMockPropsData} />);
  it('should pin a house on map successfully', () => {
    expect(component).toMatchSnapshot();
  });
});
