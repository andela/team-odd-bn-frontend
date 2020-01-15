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
          <Link to="/home">
            <img src={houseIcon} alt="homepage icon" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/requests">
            <img src={tripIcon} alt="trip icon" />
            <span>Trips</span>
          </Link>
        </li>
        <li>
          <Link to="/bookings">
            <img src={bookingIcon} alt="booking icon" />
            <span>Bookings</span>
          </Link>
        </li>
        <li>
          <Link to="/accomodations">
            <img src={accommodationIcon} alt="accommodation icon" />
            <span>Accomodations</span>
          </Link>
        </li>
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
