import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import '../../../assets/css/App.scss';
import '../../../assets/css/sidenav/sidebar.scss';
import { Link } from 'react-router-dom';
import notificationIcon from '../../../assets/images/notification_icon/notification_32px.png';
import settingsIcon from '../../../assets/images/settings_icon/settings_32px.png';
import defaultUserIcon from '../../../assets/images/default_user_icon/default_user_32px.png';
import ToolTip from '../../../components/Sidebar/ToolTip';
import initializeSocket from '../../../helpers/notificationHelper';
import markAllAsRead from '../../../redux/actions/notifications/markAllAsReadActions';
import markOneAsRead from '../../../redux/actions/notifications/markOneAsReadActions';
import getAllNotifications from '../../../redux/actions/notifications/getAllNotificationActions';
import verifyToken from '../../../helpers/verifyToken';

// eslint-disable-next-line react/prefer-stateless-function
export class TopRightSide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: defaultUserIcon,
      firstName: '',
      lastName: '',

    };
    this.handleMarkAllAsRead = this.handleMarkAllAsRead.bind(this);
  }

  async componentDidMount() {
    const { getAllNotifications } = this.props;
    await getAllNotifications();
  }

  UNSAFE_componentWillReceiveProps(prevProps, nextProps) {
    const { profile } = prevProps;
    if (profile && profile.data) {
      const {
        data: {
          imageURL,
          user: { firstName, lastName },
        },
      } = profile;
      this.setState({
        image: imageURL,
        firstName,
        lastName,
      });

      const isImage = new Image();
      isImage.src = imageURL;
      isImage.onerror = () => {
        this.setState({
          image: defaultUserIcon,
        });
      };
    }
  }

  async handleMarkAllAsRead() {
    const { markAllAsRead, allNotifications, getAllNotifications } = this.props;
    const notificationIds = [];
    const userNotifications = allNotifications.filter((item) => item.userId === verifyToken(localStorage.getItem('token')).id);
    userNotifications.map((item) => notificationIds.push(item.id));
    await markAllAsRead(notificationIds);
    await getAllNotifications();
  }

  async handleMarkAsRead(notificationId) {
    const { markOneAsRead } = this.props;
    await markOneAsRead(notificationId);
  }


  render() {
    const { allNotifications } = this.props;
    const verifyAllNotifications = allNotifications.filter((item) => item.userId === verifyToken(localStorage.getItem('token')).id).filter((item) => !item.markRead);
    const { image, firstName, lastName } = this.state;
    return (
      <div className="top-side-right">
        <ul>
          <li className="tooltip notification-icon">
            <div className="notification">
              <img src={notificationIcon} alt="notification icon" />
              {allNotifications !== 'no new notification' && allNotifications === 0 && (
              <span className="notification-count"><p>{allNotifications && allNotifications !== 'no new notification' && allNotifications.length > 0 && allNotifications.filter((item) => item.userId === verifyToken(localStorage.getItem('token')).id).filter((item) => !item.markRead).length}</p></span>)}
              <div className="notification-content">
                <div className="notification-title">
                  <h2>Notifications</h2>
                  <button onClick={() => this.handleMarkAllAsRead()}> Mark all as read</button>
                </div>
                <hr className="notification-border" />
                <div
                  className="notification-item"
                  onClick={() => this.props.markOneAsRead(notificationId)}
                >
                  {allNotifications && allNotifications !== 'no new notification' && allNotifications.length > 0 ? (
                    <>
                      {verifyAllNotifications.length === 0 && (<p>No New Notifications</p>)}
                      {verifyAllNotifications.map((item, index) => (
                        <>
                          <div className="notification-item-title">
                            <img src={image} alt="pic" />
                            {item.tripRequestId && (
                            <Link className="links" to={`/requests/${item.tripRequestId}`} onClick={() => this.handleMarkAsRead(item.id)}>
                              <p>{item.message}</p>
                            </Link>
                            )}
                            {item.bookingId && (
                            <Link className="links" to={`/bookings/${item.bookingId}`} onClick={() => this.handleMarkAsRead(item.id)}>
                              <p>{item.message}</p>
                            </Link>
                            )}
                            {!item.markRead && (
                            <span className="dot" />
                            )}
                          </div>
                          <small className="notification-date"><Moment fromNow>{item.createdAt}</Moment></small>
                          <hr className="notification-border" />
                        </>
                      ))}
                    </>
                  ) : <p>No New Notifications</p>}
                </div>
                <div className="see-all">
                  <Link to="/Notifications">
                    <p>See All</p>
                  </Link>
                </div>

              </div>
            </div>
          </li>
          <li className="tooltip settings-icon">
            <Link to="/profile">
              <img src={settingsIcon} alt="notification icon" />
            </Link>
            {ToolTip('profile')}
          </li>
          <li className="username">
            <p>{`${firstName} ${lastName}`}</p>
          </li>
          <li className="profile-icon">
            <img src={image} alt="profile icon" />
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.viewProfile.profile,
  profileError: state.profileError,
  allNotifications: state.notifications.notifications.allNotifications,
  allNotificationsError: state.notifications.notifications.allNotificationsError,
});

export default connect(mapStateToProps, {
  markAllAsRead, markOneAsRead, initializeSocket, getAllNotifications,
})(TopRightSide);
