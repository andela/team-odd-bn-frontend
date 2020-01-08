import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/style.css';
import logo from '../assets/images/logo.png';

const landingPage = () => (
  <div className="row">
    <div className="column-left">
      <div className="main-logo">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="logo-name">
          <a href="#home">Barefoot</a>
        </div>

      </div>
      <div className="main-title">
        <h4>
Making company travel and
          <br />
accomodation easy and convenient
        </h4>
        <Link to="signin">
          <button className="button">Login to Get Started</button>

        </Link>
      </div>
    </div>
    <div className="column-right" />
  </div>
);
export default landingPage;
