import React from 'react';
import { NavLink } from 'react-router-dom';

const tripType = () => (
  <div className="trip-button-container">
    <div className="onewayLink">
      <NavLink exact activeClassName="active" to="/trips/oneway">One-way Trip</NavLink>
    </div>
    <div className="roundLink">
      <NavLink exact to="/trips/roundtrip">Round Trip</NavLink>
    </div>
    <div className="multiLink">
      <NavLink exact to="/trips/multicity">Multi-city Trip</NavLink>
    </div>
  </div>
);
export default tripType;
