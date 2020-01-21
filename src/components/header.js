import React from 'react';
import PropTypes from 'prop-types';
import defaultProfileImg from '../assets/images/default_user_32px.png';
import '../assets/css/header.scss';
import verifyToken from '../helpers/verifyToken';

const Header = ({ menuList }) => (
  <nav data-testid="header" className="defaultHeader">
    <a className="app-logo" href="/">
      <img
        className="logo"
        alt="barefoot_logo"
        src={`
   https://res.cloudinary.com/victorkarangwa4/image/upload/v1577709616/icons/Blogo_jl7eyl.png`}
      />
      <p className="app-name">Barefoot</p>
    </a>
    <div className="nav-menu">
      <ul>
        {menuList.map((menu) => (menu.link ? (
          <li key={menu.text}>
            <a href={menu.page} className={menu.className}>
              {menu.text}
            </a>
          </li>
        ) : (
          <div key={menu.text}>
            <li>
              <img
                className={menu.className}
                src={defaultProfileImg}
                alt={menu}
              />
            </li>
            <li>
              <span className={menu.className}>

                {verifyToken(localStorage.getItem('token')).firstName}
                {' '}
                {verifyToken(localStorage.getItem('token')).lastName}
              </span>
            </li>
          </div>
        )))}
      </ul>
    </div>
  </nav>
);
Header.propTypes = {
  menuList: PropTypes.instanceOf(Object).isRequired,
};

export default Header;
