import React, { Component } from 'react';
import DrawerToggleButton from '../../../components/Sidebar/SideDrawer/DrawerToggleButton';
import '../../../assets/css/App.scss';
import '../../../assets/css/sidenav/sidebar.scss';

// eslint-disable-next-line react/prefer-stateless-function
class TopLeftSide extends Component {
  render() {
    const { drawerClickHandler } = this.props;
    return (
      <div className="top-side-left">
        {/* Humberger Icon */}
        <div className="nav-toggle-btn">
          <DrawerToggleButton click={drawerClickHandler} />
        </div>
        <nav data-testid="header" className="top-left-custom-logo">
          <a className="top-left-custom-nav-app-logo" href="/">
            <img
              className="top-left-custom-logo"
              alt="barefoot_logo"
              src={`
    https://res.cloudinary.com/victorkarangwa4/image/upload/v1577709616/icons/Blogo_jl7eyl.png`}
            />
            <p className="top-left-custom-app-name">Barefoot</p>
          </a>
        </nav>
      </div>
    );
  }
}

export default TopLeftSide;
