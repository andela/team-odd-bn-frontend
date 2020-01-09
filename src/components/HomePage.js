import React, { Component } from 'react';
import '../assets/css/HomePage.css';
import destination from '../assets/images/destination.jpeg';

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.decode = '';
    this.state = {};
  }

  render() {
    return (
      <div className="home">
        <h3 className="home-title">Home</h3>
        <div className="row">
          <div className="column-top">
            <p className="destination-name">Most Travelled Destination</p>
            <div className="card-top">
              <img src={destination} alt="most travelled" />
              <div className="destination-details">
                <p className="destination">Kigali</p>
                <p>Visited 3 times </p>
                <p>4 Accommodations</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row-bottom">
          <div className="column-two">
            <div className="card-bookings">
              <h3 className="request-title">Your Bookings</h3>
              <p className="requests">You have 5 bookings</p>
              <a href="#" className="new-requests">New Booking</a>
            </div>
          </div>

          <div className="column-three">
            <div className="card-requests">
              <h3 className="request-title">Your Requests</h3>
              <p className="requests">You have 5 trip requests</p>
              <a href="#" className="new-requests">New Request</a>
            </div>
          </div>
        </div>
      </div>

    );
  }
}


export default HomePage;
