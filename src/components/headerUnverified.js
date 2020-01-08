import React, { Component } from 'react';
import defaultProfileImg from '../assets/images/default_user_32px.png';
import '../assets/css/header.scss';
import verifyToken from '../helpers/verifyToken';

const decoded = verifyToken(localStorage.getItem('token'));
export class Header extends Component {
  render() {

    return (
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
            <li>
              <img
                className="profile-img"
                src={defaultProfileImg}
                alt="profile"
              />
            </li>
            <li>
              <span className="profile-name">{`${decoded.firstName} ${decoded.lastName}`}</span>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
