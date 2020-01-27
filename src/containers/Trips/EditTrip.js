import React, { Component } from 'react';
// import { connect } from 'react-redux';
import '../../assets/css/editTrip.css';



class EditRequest extends Component {
  render() {
    return (
      <>

          <form>
            <input type="submit" value="Save Changes" />
            <br />
            <label >Origin</label>
            <input type="text" id="origin" name="origin" placeholder="Your Origin.." />

            <label>Destination</label>
            <input type="text" id="destination" name="ldestination" placeholder="Your Destination.." />

            <label>Start Date</label>
            <input type="text" id="StartDate" name="StartDate" placeholder="Your Start Date.." />

            <label>Return Date</label>
            <input type="text" id="Return Date" name="lReturn Date" placeholder="Your Return Date.." />

            <label>Reason</label>
            <input type="text" id="Reason" name="Reason" placeholder="Your Reason.." />


          </form>

      </>
    );
  }
}


export default EditRequest;
