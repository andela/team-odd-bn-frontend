import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../assets/css/App.scss';
import '../../../assets/css/sidenav/sidebar.scss';
import { Link } from 'react-router-dom';
import notificationIcon from '../../../assets/images/notification_icon/notification_32px.png';
import settingsIcon from '../../../assets/images/settings_icon/settings_32px.png';
import defaultUserIcon from '../../../assets/images/default_user_icon/default_user_32px.png';
import ToolTip from '../../../components/Sidebar/ToolTip';

// eslint-disable-next-line react/prefer-stateless-function
export class TopRightSide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: defaultUserIcon,
      firstName: '',
      lastName: '',
    };
  }

  UNSAFE_componentWillReceiveProps(prevProps, nextProps) {
    const { profile } = prevProps;
    if (profile) {
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

  render() {
    const { image, firstName, lastName } = this.state;
    return (
      <div className="top-side-right">
        <ul>
          <li className="tooltip notification-icon">
            <Link to="/notification">
              <img src={notificationIcon} alt="notification icon" />
            </Link>
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
});

export default connect(mapStateToProps, null)(TopRightSide);
