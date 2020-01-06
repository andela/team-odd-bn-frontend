// import React from 'react';
// import { shallow, mount } from 'enzyme';
// import Footer from '../components/footer';
// import ToolTip from '../components/Sidebar/ToolTip';
// import BackDrop from '../components/Sidebar/Backdrop/Backdrop';
// import DrawerToggleButton from '../components/Sidebar/SideDrawer/DrawerToggleButton';
// import SideDrawer from '../components/Sidebar/SideDrawer/SideDrawer';
// import LeftSide from '../views/Dashboard/sidebar/LeftSide';
// import RightSide from '../views/Dashboard/sidebar/RightSide';
// import TopLeftSide from '../views/Dashboard/sidebar/TopLeftSide';
// import TopRightSide from '../views/Dashboard/sidebar/TopRightSide';
// import TopSide from '../views/Dashboard/sidebar/TopSide';
// import { Dashboard } from '../views/Dashboard/sidebar/index';


// let wrapper; let
//   wrapperInstance;

// const props = {
//   click: jest.fn(),
//   backdropClickHandler: jest.fn(),
//   drawerToggleClickHandler: jest.fn(),
//   drawerClickHandler: jest.fn(),
//   show: true,
//   sideDrawerOpen: true,
// };

// describe('Expect footer to render', () => {
//   wrapper = shallow(<Footer />);
//   it('Should render without problem', () => {
//     expect(wrapper).toMatchSnapshot();
//   });
// });

// describe('Expect tooltip to display', () => {
//   const toolTipData = ToolTip('I am tooltip');
//   it('Should display tooltip message', () => {
//     expect(toolTipData.props.children).toBe('I am tooltip');
//   });
// });

// describe('Expect Backdrop to be clickable', () => {
//   wrapper = shallow(<BackDrop {...props} />);
//   it('Should display tooltip message', () => {
//     expect(wrapper).toBeTruthy();
//   });
// });

// describe('Expect SideDrawer to open', () => {
//   wrapper = shallow(<DrawerToggleButton {...props} />);
//   it('Should SideDrawer to pop in', () => {
//     expect(wrapper).toBeTruthy();
//   });
// });

// describe('Expect SideDrawer to show and hid', () => {
//   wrapper = shallow(<SideDrawer {...props} />);
//   it('Should show by changing style', () => {
//     expect(wrapper).toBeTruthy();
//   });
// });

// describe('Expect LeftSide to render', () => {
//   wrapper = shallow(<LeftSide />);
//   it('Should LeftSide side dispay without problems', () => {
//     expect(wrapper).toBeTruthy();
//   });
// });

// describe('Expect RightSide to render', () => {
//   wrapper = shallow(<RightSide />);
//   it('Should RightSide side dispay without problems', () => {
//     expect(wrapper).toBeTruthy();
//   });
// });

// describe('Expect TopLeftSide to render', () => {
//   wrapper = shallow(<TopLeftSide {...props} />);
//   it('Should TopLeftSide side dispay without problems', () => {
//     expect(wrapper).toBeTruthy();
//   });
// });

// describe('Expect TopRightSide to render', () => {
//   wrapper = shallow(<TopRightSide />);
//   it('Should TopRightSide side dispay without problems', () => {
//     expect(wrapper).toBeTruthy();
//   });
// });

// describe('Expect TopSide to render', () => {
//   wrapper = shallow(<TopSide {...props} />);
//   it('Should TopSide side dispay without problems', () => {
//     expect(wrapper).toBeTruthy();
//   });
// });

// describe('Expect dashboard to render', () => {
//   wrapper = shallow(<Dashboard {...props} />);
//   wrapperInstance = wrapper.instance();
//   it('Should backdrop clickable to remove sidebar on screen', () => {
//     wrapperInstance.backdropClickHandler();
//   });

//   it('Should toggle open and close by updating on state', () => {
//     wrapperInstance.drawerToggleClickHandler();
//   });
// });
