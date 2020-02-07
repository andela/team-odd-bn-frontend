import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import '../../assets/css/accommodation/viewSpeciAccommodation.scss';
import Dashboard from '../../views/Dashboard/sidebar/index';
import AccommodationsRooms from '../../views/accommodation/AccommodationsRooms';
import AccommodationReviews from '../../views/accommodation/AccommodationReviews';
import ViewAccomodationDetails from '../../views/accommodation/ViewSpecificAccommodation';
import singleAccommodation from '../../redux/actions/singleAccommodation';
import Spinner from '../../components/Spinner';


export class ViewSpecificAccommodation extends Component {
  componentDidMount() {
    const { singleAccommodation, match: { params: { id } } } = this.props;
    singleAccommodation(id);
  }


  render() {
    const { accommodationItem, accommodationItemError } = this.props;

    return (
      <Dashboard>
        <ToastContainer />
        { accommodationItemError.length > 0 && <Redirect to="/accommodations" /> }
        { !accommodationItem ? <Spinner />
          : (
            <>
              <ViewAccomodationDetails />
              <AccommodationsRooms />
              <AccommodationReviews />
            </>
          )}
      </Dashboard>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    accommodationItem: state.specificAccommodation.singleAccommodation[0],
    accommodationItemError: state.specificAccommodation.singleAccommodationError,
  };
};

export const mapDispatchToprops = {
  singleAccommodation,
};

export default connect(mapStateToProps, mapDispatchToprops)(ViewSpecificAccommodation);
