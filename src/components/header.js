import React, { Component } from 'react';
import '../assets/css/header.scss';

class Header extends Component {
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
              <input className="btn-small" type="button" value="Signup" />
            </li>
            <li>
              <input className="btn-small" type="button" value="Login" />
            </li>
            <li>
              <input className="btn-transparent" type="button" value="Home" />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
