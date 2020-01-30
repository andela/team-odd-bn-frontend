import React from 'react';
import { shallow } from 'enzyme';
import { ViewAccommodations } from '../../../containers/accommodation/ViewAccommodations';
import { viewAccommodationProps } from '../../../__mocks__/accommodation/viewAccommodation';
import ViewAccomodationView from '../../../views/accommodation/ViewAccomodation';

describe('Expect to render accommodation container', () => {
  const component = shallow(<ViewAccommodations {...viewAccommodationProps} />);
  it('Should render without problem', () => {
    expect(component).toMatchSnapshot();
  });
});

describe('Expect to load accommodation', () => {
  const component = shallow(<ViewAccomodationView {...viewAccommodationProps} />);
  it('Should load accommodation', () => {
    expect(component).toMatchSnapshot();
  });
});

describe('Expect to mock accommodation state', () => {
  const component = shallow(<ViewAccomodationView {...viewAccommodationProps} />);
  it('Should simulate on change paginate by arrow function', () => {
    const addButton = component.find('button').at(0);
    addButton.simulate('click');
  });

  it('Should simulate on change paginate by left arrow change state function', () => {
    const addButton = component.find('button').at(1);
    addButton.simulate('click');
  });
  it('Should simulate on change paginate by  rightarrow change state function', () => {
    const addButton = component.find('button').at(2);
    addButton.simulate('click');
  });
  it('Should simulate on change paginate by changing no', () => {
    const addButton = component.find('button').at(3);
    addButton.simulate('click');
  });
});
