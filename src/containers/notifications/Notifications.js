import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import '../../assets/css/notification.scss';
import { Link } from 'react-router-dom';
import Dashboard from '../../views/Dashboard/sidebar';
import picture from '../../assets/images/default_user_16px.png';
import getAllNotifications, { updateSpinnerStatus } from '../../redux/actions/notifications/getAllNotificationActions';
import verifyToken from '../../helpers/verifyToken';
import markOneAsRead from '../../redux/actions/notifications/markOneAsReadActions';

export class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleMarkAsRead = this.handleMarkAsRead.bind(this);
  }

  async componentDidMount() {
    const { getAllNotifications, markOneAsRead } = this.props;
    await getAllNotifications();
    const { allNotifications } = this.props;
  }

  async handleMarkAsRead(notificationId) {
    const { markOneAsRead } = this.props;
    await markOneAsRead(notificationId);
  }

  render() {
    const { allNotifications } = this.props;

    return (
      <>
        <Dashboard>
          <div className="notification-container">
            <h2>Notifications</h2>
            <hr className="title-underline" />
            <div className="all-notification-content">
              {allNotifications && allNotifications !== 'no new notification' && allNotifications.length > 0 ? (
                <>
                  {allNotifications.filter((item) => item.userId === verifyToken(localStorage.getItem('token')).id).map((item, index) => (
                    <div className="single-notification-content">
                      <div className="single-notification">
                        <div className="notification-element" key={item.id} role="button" tabIndex="0">
                          <img src={picture} alt="pic" />
                          {item.tripRequestId && (
                          <Link to={`/requests/${item.tripRequestId}`} onClick={() => this.handleMarkAsRead(item.id)}>
                            <p>{item.message}</p>
                          </Link>
                          )}
                          {item.bookingId && (
                          <Link to={`/bookings/${item.bookingId}`} onClick={() => this.handleMarkAsRead(item.id)}>
                            <p>{item.message}</p>
                          </Link>
                          )}
                        </div>
                        {!item.markRead && (
                        <div className="read-icon">
                          <span className="unread" />
                        </div>
                        )}
                      </div>
                      <div className="single-notification-date">
                        <p><Moment fromNow>{item.createdAt}</Moment></p>
                      </div>
                      <hr className="content-underline" />
                    </div>
                  ))}
                </>
              ) : <p>No Notifications found</p>}
            </div>
          </div>
        </Dashboard>
      </>
    );
  }
}

export const mapStateToProps = (state) => ({
  allNotifications: state.notifications.notifications.allNotifications,
  allNotificationsError: state.notifications.notifications.allNotificationsError,
  spinner: state.notifications.spinner,
});

export default connect(mapStateToProps, { getAllNotifications, updateSpinnerStatus, markOneAsRead })(Notifications);
