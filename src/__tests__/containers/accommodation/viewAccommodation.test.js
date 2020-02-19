import React from 'react';
import { shallow } from 'enzyme';
import { ViewAccommodations } from '../../../containers/accommodation/ViewAccommodations';
import { viewAccommodationProps } from '../../../__mocks__/accommodation/viewAccommodation';
import { viewAllAccomodation as ViewAllAccomodationView } from '../../../views/accommodation/ViewAccomodation';

describe('Expect to render accommodation container', () => {
  const component = shallow(<ViewAccommodations {...viewAccommodationProps} />);
  it('Should render without problem', () => {
    expect(component).toMatchSnapshot();
  });
});

describe('Expect to load accommodation', () => {
  const component = shallow(<ViewAllAccomodationView {...viewAccommodationProps} />);
  it('Should load accommodation', () => {
    expect(component).toMatchSnapshot();
  });
});

describe('Expect to mock accommodation state', () => {
  const component = shallow(<ViewAllAccomodationView {...viewAccommodationProps} />);
});
