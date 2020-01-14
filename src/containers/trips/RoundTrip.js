import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import DashBoard from '../Dashboard/sidebar/index';
import '../../assets/css/roundtrip.scss';
import Submit from '../../components/SubmitButton';
import '../../assets/css/base.scss';
import TripType from '../../components/trips/TripTypes';
import TripHeader from '../../components/trips/TripHeader';
import createRoundTrip, { updateSpinnerStatus } from '../../redux/actions/roundTripActions';


export class RoundTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originId: '',
      destinationId: '',
      reason: '',
      startDate: '',
      returnDate: '',
      formErrors: {
        reason: '',
        startDate: '',
        returnDate: '',
      },
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const { createRoundTrip, updateSpinnerStatus } = this.props;
    await createRoundTrip();
  }

  handleChangeInput(e) {
    const { name, value } = e.target;
    const formErrors = { ...this.state.formErrors };

    switch (name) {
      case 'reason':
        formErrors.address = value.length < 3 ? 'Reason should be a minimum of 2 letters' : '';
        break;
      case 'startDate':
        formErrors.department = value.length < 3 ? 'Start date should be a valid date after today(YY-MM-DD)' : '';
        break;
      case 'returnDate':
        formErrors.bio = value.length < 15 ? 'Return date should be a valid date after today(YY-MM-DD)' : '';
        break;
      default:
        break;
    }
    this.setState({
      formErrors,
      [name]: value,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.props.updateSpinnerStatus(true);

    const {
      originId,
      destinationId,
      reason,
      startDate,
      returnDate,
    } = this.state;

    const data = {
      originId,
      destinationId,
      reason,
      startDate,
      returnDate,
    };
    await this.props.createRoundTrip(data);
  }

  render() {
    const { spinner, roundTripMessage } = this.props;

    const {
      originId,
      destinationId,
      reason,
      startDate,
      returnDate,
    } = this.state;


    console.log('props', this.props);
    return (
    // <DashBoard>
      <div className="oneway-container">
        <TripHeader />
        <div className="trip-field-container">
          <TripType />
          <div className="trip-form">

            <form onSubmit={this.handleSubmit}>
              <div className="cityField">
                <label htmlFor="input">City</label>
                <div className="originCity">
                  <select
                    placeholder="hhh"
                    onChange={this.handleChangeInput}
                    value={originId}
                    name="originId"
                  >
                    {/* <option value={originId}>Origin</option> */}
                    <option value={originId}>1</option>
                  </select>
                </div>

                <div className="destinationCity">
                  <select
                    onChange={this.handleChangeInput}
                    value={destinationId}
                    name="destinationId"
                  >
                    {/* <option value={destinationId}>Destination</option> */}
                    <option value={destinationId}>2</option>
                  </select>
                </div>

              </div>

              <div className="reasonField">
                <label htmlFor="textArea">Reason</label>
                <textarea
                  name=""
                  id="textArea"
                  cols="30"
                  rows="10"
                  onChange={this.handleChangeInput}
                  value={reason}
                  name="reason"
                />

              </div>

              <div className="dateField">
                <div>
                  <label htmlFor="startDate">Start date</label>
                  <input
                    type="date"
                    name=""
                    id="startDate"
                    onChange={this.handleChangeInput}
                    value={startDate}
                    name="startDate"
                  />
                </div>
                <div>
                  <label htmlFor="startDate">Return date</label>
                  <input
                    type="date"
                    name=""
                    id="returnDate"
                    onChange={this.handleChangeInput}
                    value={returnDate}
                    name="returnDate"
                  />
                </div>


              </div>


              <div className="btnField">
                <Submit buttonName="Request trip" className="btn-submit" />
              </div>

            </form>
          </div>


        </div>
      </div>

    );
  }
}

export const mapStateToProps = (state) => ({
  roundTripMessage: state.trips.roundTrip.roundTripMessage,
  roundTripError: state.trips.roundTrip.roundTripError,
  spinner: state.trips.roundTrip.spinner,
  spinnerError: state.trips.roundTrip.spinnerError,

});

export default connect(mapStateToProps, { createRoundTrip, updateSpinnerStatus })(RoundTrip);
