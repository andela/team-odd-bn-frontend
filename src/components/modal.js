import React, { Component } from 'react'
import '../assets/css/modal.scss'
import { connect } from 'react-redux'
import InputField from './InputField'
import SubmitButton from './SubmitButton'
import {
  roomsModalAction,
  addNewRoomsAction,
} from '../redux/actions/createAccommodationActions'
import { modalInput } from '../constants/accommodation'

export class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = { rows: [] }
  }

  handleSubmit(event){
   event.preventDefault();
   const { rows } = this.state;
   const roomsInput = document.getElementById('rooms');
   roomsInput.innerHTML = `${rows.length} rooms added!`
   this.props.roomsModalAction(false)
   
  }
  appendRow(event) {
    event.preventDefault()
    
    const name = document.getElementById('room-name').value

    const type = document.getElementById('room-type')
    const roomType = type.options[type.selectedIndex].text
    this.props.addNewRoomsAction({ name, roomType })
    let joined = this.state.rows.concat(
      <tr key={this.state.rows.length}>
        <td>{name}</td>
        <td>{roomType}</td>
      </tr>
    )
    this.setState({ rows: joined })
  }

  closeModal = props => {
    props.roomsModalAction(false)
  }
  render() {
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span
            data-test="close-modal"
            role="button"
            tabIndex={0}
            className="close"
            onClick={() => {
              this.closeModal(this.props)
            }}
            onKeyDown={() => {
              this.closeModal(this.props)
            }}
          >
            &times;
          </span>
          <h2 id="modal-header" className="modal-header">
            Add rooms
          </h2>
          <div className="modal-body">
            <div className="inputs">
              <form
                data-test="addNew-row"
                className="form-raw"
                onSubmit={this.appendRow.bind(this)}
              >
                <InputField handleChange={null} inputList={modalInput} />
                <div className="room-type">
                  <div>Room type</div>
                  <select defaultValue="" id="room-type" required>
                    <option disabled value="">
                      Choose room type
                    </option>
                    <option value="single">Single</option>
                    <option value="double">Double</option>
                  </select>
                </div>
                <SubmitButton buttonName="Add" className="btn-long" />
              </form>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Room name</th>
                  <th>Room type</th>
                </tr>
              </thead>
              <tbody>{this.state.rows}</tbody>
            </table>
            <div className="center-element">
              <form
                data-test="addNew-room"
                onSubmit={this.handleSubmit.bind(this)}
              >
                <SubmitButton buttonName="Save" className="btn-long" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({ stateObject: state })
export default connect(mapStateToProps, {
  roomsModalAction,
  addNewRoomsAction,
})(Modal)
