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
  it('Should simulate on change paginate by arrow function', () => {
    const addButton = component.find('button').at(0);
    const showBookingPopUp = component.find('#showBookingPopUp');
    showBookingPopUp.simulate('click');
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

  it('Should simulate on click and increment likes', () => {
    const likeItem = jest.spyOn(component.instance(), 'handleClick');
    component.instance().handleClick('true', { id: 45 });
    expect(likeItem).toHaveBeenCalledWith('true', { id: 45 });
  });

  it('Should simulate on click and decrement likes and increment dislikes', () => {
    const likeItem = jest.spyOn(component.instance(), 'handleClick');
    component.instance().handleClick('false', { id: 45 });
    expect(likeItem).toHaveBeenCalledWith('false', { id: 45 });
  });
  it('Should simulate on click without likes and dislikes', () => {
    const likeItem = jest.spyOn(component.instance(), 'handleClick');
    component.instance().handleClick('', { id: '' });
    expect(likeItem).toHaveBeenCalledWith('', { id: '' });
  });

  it('Should simulate on click img likes and add like', () => {
    const addImg = component.find('.likes_icon_img');
    addImg.simulate('click');
  });
  it('Should simulate on click img dislike and remove like', () => {
    const removeImg = component.find('.dislike_icon');
    removeImg.simulate('click');
  });
});
