import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import MulticityTripView from '../../views/trips/Multicity';
import Submit from '../../components/SubmitButton';
import Dashboard from '../../views/Dashboard/sidebar/index';
import TripType from '../../components/trips/TripTypes';
import TripHeader from '../../components/trips/TripHeader';
import { getCitiesAction } from '../../redux/actions/createAccommodationActions';
import { addMoreTrip,
  removeMoreTrip,
  editMultipleTrip, 
  sendMulticityTrip } from '../../redux/actions/multicityActions';
import Spinner from '../../components/Spinner';
import { updateSpinnerStatus } from  '../../redux/actions/profileActions';

export class MulticityTrip extends Component {
  UNSAFE_componentWillMount(){
    const {multicityTripData } = this.props;
    multicityTripData.message = ''
  }
   componentDidMount() {
    const { getCitiesAction } = this.props;
     getCitiesAction();
  }

  tripActionsProps = (index,item ) => {
    return {
      cities: this.props.cities,
      tripIndex: index,
      removeTrip: this.onHandleRemoveMoreTrip,
      onHandleInputChange: this.onHandleInputChange,
      data: this.props.multicityTripData.data,
      itemRequests: item,
    };
  }

  onHandleAddMoreTrip = () => {
    const { addMoreTrip } = this.props;
    addMoreTrip();
  }

  onHandleRemoveMoreTrip = (item) => {
    const { removeMoreTrip } = this.props;
    removeMoreTrip(item);
  }

  onHandleInputChange = (e, tripIndex) => {
    const { name, value } = e.target;
    const { editMultipleTrip } = this.props;
    editMultipleTrip({ name, value, tripIndex });
  }

  onHandleSubmit = (e) => {
    e.preventDefault();
    const { sendMulticityTrip, multicityTripData, updateSpinnerStatus } = this.props;
    updateSpinnerStatus(true);
    sendMulticityTrip(multicityTripData);
  }

  componentDidUpdate(prevProps) {
    const { history } = this.props;
    const { multicityTripData } = this.props;
    if (
        (prevProps.multicityTripData !== multicityTripData) && 
        (multicityTripData.message === 'Trip requested successfully')
      ) {
      return history.push('/requests');
    }
  }

  render() {
    const { multicityTripData, viewProfile } = this.props;
    return (
      <Dashboard>
        {viewProfile.spinner && <Spinner/>}
        <div className="oneway-container">
          <TripHeader />
          <div className="trip-field-container">
            <TripType />
            <div className="multicity-container">
              <form onSubmit={this.onHandleSubmit}>
                { multicityTripData.data.map((item, index) => (
                  <MulticityTripView key={index} tripAction={this.tripActionsProps(index, item)} />
                ))}
                <div className="multicity-button">
                  <button onClick={this.onHandleAddMoreTrip} className="add-trip add-trip-btn" type="button">Add trip</button>
                </div>
                <div className="btnField">
                  <Submit buttonName="Request trip" className="btn-submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Dashboard>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
  citiesError: state.allCities.citiesError,
  multicityTripData: state.multicityTrip,
  viewProfile: state.viewProfile,
  cities: state.accommodation.createAccommodation.retrievedCities
  };
}

export default connect(mapStateToProps, { 
  getCitiesAction,
  addMoreTrip, 
  removeMoreTrip, 
  editMultipleTrip,
  sendMulticityTrip,
  updateSpinnerStatus
})(MulticityTrip);
