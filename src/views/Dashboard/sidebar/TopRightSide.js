import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../assets/css/App.scss';
import '../../../assets/css/sidenav/sidebar.scss';
import { Link } from 'react-router-dom';
import notificationIcon from '../../../assets/images/notification_icon/notification_32px.png';
import settingsIcon from '../../../assets/images/settings_icon/settings_32px.png';
import defaultUserIcon from '../../../assets/images/default_user_icon/default_user_32px.png';
import ToolTip from '../../../components/Sidebar/ToolTip';
import { updateNotificationDisplay } from '../../../redux/actions/notificationActions';
// eslint-disable-next-line react/prefer-stateless-function
class TopRightSide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: defaultUserIcon,
      firstName: '',
      lastName: '',
      display: 'none',
    };
  }

  UNSAFE_componentWillReceiveProps(prevProps, nextProps) {
    const { profile } = prevProps;
    if (profile) {
      const { data: { imageURL, user: { firstName, lastName } } } = profile;
      this.setState({
        image: imageURL,
        firstName,
        lastName,
      });
    }
  }

  render() {
    const {
      image, firstName, lastName,
    } = this.state;
    return (
      <>
        <div className="top-side-right">
          <ul>
            <li className="tooltip notification-icon">
              <button
                onClick={() => {
                  const display = this.props.notification.display == 'none' ? 'block' : 'none';
                  this.props.updateNotificationDisplay(display);
                }}
                type="button"
              >
                <img src={notificationIcon} alt="notification icon" />
              </button>
              { ToolTip('notifications') }
            </li>
            <li className="tooltip settings-icon">
              <Link to="/settings">
                <img src={settingsIcon} alt="notification icon" />
              </Link>
              { ToolTip('settings') }
            </li>
            <li className="username">
              <p>{`${firstName} ${lastName}`}</p>
            </li>
            <li className="profile-icon">
              <img src={image} alt="profile icon" />
            </li>
          </ul>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.viewProfile.profile,
  profileError: state.profileError,
  notification: state.notification,
});

export default connect(mapStateToProps, { updateNotificationDisplay })(TopRightSide);
