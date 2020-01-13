import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TripNavbar from '../../components/tripNavbar';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';


import Dashboard from '../Dashboard/sidebar/index';
import '../../assets/css/trips/multicity.scss';
import '../../assets/css/trips/tripNavbar.scss';

class MulticityView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tripNumber: 1,
      startDate: 2020,
    };
  }

  handleChange(date) {
    this.setState({ startDate: date });
  }

  render() {
    return (
      <Dashboard>
        <TripNavbar />
        <div className="multicity-container">
          <div className="multicity-form">
            <form>
              <div className="count-trip">
                {`Trip ${this.state.tripNumber}`}
              </div>
              <div className="multicity-one-request">
                <div className="available-city">
                  <div className="trip-label-name">
                    City
                  </div>
                  <div className="select-trip">
                    <select required className="city-origin" id="city" name="city">
                      <option value="KAMPALA">Your origin</option>
                      <option value="KAMPALA">DODOMA</option>
                      <option value="KAMPALA">CAIRO</option>
                    </select>
                    <select required className="city-destination">
                      <option value="KIGALI">Your destination</option>
                      <option value="KIGALI">Bujumbura</option>
                      <option value="KIGALI">Capetown</option>
                    </select>
                  </div>
                </div>
                <div className="trip-description">
                  <div className="trip-label-name">
                    Reason
                  </div>
                  <textarea required name="description" placeholder="Tell us more about trip request" />
                </div>
                {/* <div className="available-city">
                  <div className="trip-label-name">
                    Start date
                  </div>
                  <div className="select-trip">
                    <select required className="city-origin" id="city" name="city">
                      <option value="KAMPALA">KAMPALA</option>
                      <option value="KAMPALA">DODOMA</option>
                      <option value="KAMPALA">CAIRO</option>
                    </select>
                    <div className="trip-label-name">
                      End date
                    </div>
                    <select required className="city-destination">
                      <option value="KIGALI">Kigali</option>
                      <option value="KIGALI">Bujumbura</option>
                      <option value="KIGALI">Capetown</option>
                    </select>
                  </div>
                </div> */}
                {/* <div className="trip-dates">
                  <div className="start-dates">
                    <div className="trip-label-name trip-date-custom-label">
                      End date
                    </div>
                    <div className="select-trip">
                      <select required className="city-origin" id="city" name="city">
                        <option value="KAMPALA">KAMPALA</option>
                      </select>
                    </div>
                  </div>
                </div> */}
                {/* <div className="trip-date">
                  <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
                </div> */}
              </div>
            </form>
          </div>
        </div>
      </Dashboard>
    );
  }
}

export default MulticityView;
