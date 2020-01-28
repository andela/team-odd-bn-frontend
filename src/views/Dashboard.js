import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Sidebar from './Dashboard/sidebar/index';
import '../assets/css/homeDashboard.css';
import travel from '../assets/images/accommodation_icon/travel1.png';
import city from '../assets/images/home-dashboard_icon/icons8-city-24.png';
import map from '../assets/images/home-dashboard_icon/icons8-map-marker-24.png';
import rooms from '../assets/images/home-dashboard_icon/icons8-hotel-bed-30.png';
import getMostTravelled from '../redux/actions/getMostTravelledAccommodationAction';
import { fetchRequestsAction } from '../redux/actions/tripsActions/fetchRequests';
import { getAllBookings } from '../redux/actions/bookings/getAllBookingsActions';

class Dashboard extends Component {
  async componentDidMount() {
    const { getMostTravelled, fetchRequestsAction, getAllBookings } = this.props;
    await getMostTravelled();
    await fetchRequestsAction();
    await getAllBookings();
  }

  render() {
    const { MostTravelled, trips, bookings } = this.props;

    return (
      <Sidebar>
        <div className="dashboard">
          <div className="firstRow">
            <div className="column">
              <div className="most-travelled-card">
                <h6 className="most-travelled-title">Most Travelled Destination</h6>
                <img src={travel} alt="travelled" />
                <div className="destination-details">
                  <p>
                    <img src={city} alt="city" />
                    City:
                    {' '}
                    {MostTravelled && MostTravelled.data.city}
                  </p>
                  <p>
                    <img src={map} alt="map" />
                    Visited
                    {' '}
                    {MostTravelled && MostTravelled.data.timeVisited}
                    {' '}
Times
                  </p>
                  <p>
                    <img src={rooms} alt="rooms" />
                    {MostTravelled && MostTravelled.data.numberOfAccommodations}
                    {' '}
Number of Rooms Available
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lastRow">

            <div className="column-requests">
              <div className="card-requests">
                <h3 className="request-title">Your Requests</h3>
                <p className="requests">
You have
                  {' '}
                  {trips.data && trips.data.length}
                  {' '}
trip requests
                </p>
                <Link to="/trips/oneway">
              New Trip Request
                </Link>
              </div>
            </div>

            <div className="column-bookings">
              <div className="card-bookings">
                <h3 className="request-title">Your bookings</h3>
                {bookings === null ? <p className="requests">You have 0 bookings</p> : (
                  <p className="requests">
You have
                    {bookings.data.length}
                  </p>
                )}
                <Link to="/bookings">
              View your bookings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>

    );
  }
}

export const mapStateToProps = (state) => ({
  MostTravelled: state.accommodation.mostTravelled.mostTravelled,
  MostTravelledError: state.accommodation.mostTravelled.mostTravelledError,
  spinner: state.updateProfile.spinner,
  trips: state.trips.requests.requestsData,
  bookings: state.bookings.bookings.allBookings,
});

export default connect(mapStateToProps, { getMostTravelled, fetchRequestsAction, getAllBookings })(Dashboard);
