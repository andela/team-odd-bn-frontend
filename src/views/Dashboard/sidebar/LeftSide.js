import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import houseIcon from '../../../assets/images/home_icon/house_24px.png';
import tripIcon from '../../../assets/images/trip_icon/trip_24px.png';
import bookingIcon from '../../../assets/images/booking_icon/booking_24px.png';
import accommodationIcon from '../../../assets/images/accommodation_icon/accommodation_24px.png';
import logoutIcon from '../../../assets/images/logout_icon/logout_24px.png';
import signoutUser from '../../../redux/actions/signoutAction';
import verifyToken from '../../../helpers/verifyToken';
import usersIcon from '../../../assets/images/users.png';
import { checkPrevilege } from '../../../helpers/checkPrevilege';
import statisticsIcon from '../../../assets/images/statistics.png';
import addNewTripIcon from '../../../assets/images/addNewTrip.png';


// eslint-disable-next-line react/prefer-stateless-function
export const LeftSide = (props) => {
  const logout = async () => {
    await props.signoutUser();
    props.history.push('/signin');
  };
  return (
    <div className="left-side">
      <ul>
        <li>
          <Link to="/Dashboard">
            <img src={houseIcon} alt="homepage icon" />
            <span>Home</span>
          </Link>
        </li>
        {verifyToken(localStorage.getItem('token')).roleId !== 1 && (
          <li>
            <Link to="/trips/oneway">
              <img src={addNewTripIcon} alt="trip icon" />
              <span> New Trip Request</span>
            </Link>
          </li>
        )}
        <li>
          <Link to="/requests">
            <img src={tripIcon} alt="trip icon" />
            <span> My Trips</span>
          </Link>
        </li>
        <li>
          <Link to="/trips/stats">
            <img src={statisticsIcon} alt="trip icon" />
            <span> Stats</span>
          </Link>
        </li>
        {checkPrevilege(6) && (
          <li>
            <Link to="/trips/approval">
              <img src={tripIcon} alt="trip icon" />
              <span>Requests</span>
            </Link>
          </li>
        )}
        <li>
          <Link to="/bookings">
            <img src={bookingIcon} alt="booking icon" />
            <span>Bookings</span>
          </Link>
        </li>
        {checkPrevilege(4) && (
          <li>
            <Link to="/accommodation/create">
              <img src={accommodationIcon} alt="accommodation icon" />
              <span>Accomodations</span>
            </Link>
          </li>
        )}
        {checkPrevilege(1) && (
          <li>
            <Link to="/admin/roles">
              <img src={usersIcon} alt="Users icon" />
              <span>Users</span>
            </Link>
          </li>
        )}
        <li>
          <Link to="#" onClick={logout} className="signout">
            <img src={logoutIcon} alt="logout icon" />
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state,
});

LeftSide.propTypes = {
  signoutUser: Proptypes.func.isRequired,
  history: Proptypes.shape({
    push: Proptypes.func,
  }),
};

LeftSide.defaultProps = {
  history: {
    push: () => {},
  },
};

export default withRouter(connect(mapStateToProps, { signoutUser })(LeftSide));
