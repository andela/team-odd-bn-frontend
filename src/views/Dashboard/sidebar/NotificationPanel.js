import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../assets/css/notification.scss';
import { Link } from 'react-router-dom';

class NotificationPanel extends Component {
  render() {
    console.log(this.props.notification.display);

    return (
      <div
        className="notificationPanel"
        style={{ display: this.props.notification.display }}
      >
        <div className="notificationHeader">
          <div className="title">Notification</div>
          <div className="filterSearch">
            <select style={{ width: '160px' }}>
              <option>All</option>
              <option>Read</option>
              <option>Unread</option>
            </select>
          </div>
        </div>
        {
          this.props.notification.all.map((note, index) => (
            <div className="notification" key={index}>
              <div>{note.tag}</div>
              <div><Link to={note.url}>{note.message}</Link></div>
            </div>
          ))
        }
        <div className="notificationFooter">
          <div><Link to="/markRead">Mark all as read</Link></div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  notification: state.notification,
});

export default connect(mapStateToProps, null)(NotificationPanel);
