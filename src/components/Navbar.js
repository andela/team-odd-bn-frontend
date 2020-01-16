import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/css/navbar.css';
import logo from '../assets/images/logo.png';
import notifications from '../assets/images/notifications.png';
import getProfile from '../redux/actions/profileActions';
import profileImg from '../assets/images/profile.png';

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      imageURL: '',
    };
  }

  async componentDidMount() {
    const { getProfile } = this.props;
    await getProfile();
  }

  render() {
    const { profile } = this.props;
    const {
      firstName, lastName, imageURL,
    } = this.state;
    let urlImage;

    if (profile && profile.data) {
      urlImage = profile.data.imageURL;
    }

    return (
      <div className="navbar">
        <div className="align-left">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="logo-name">
            <a href="#home">Barefoot</a>
          </div>
        </div>
        <div className="align-right">
          <div className="notifications" href="#notifications">
            <img src={notifications} alt="notifications" />
          </div>
          <div className="border-line">
            <hr />
          </div>
          <div className="profile-name">
            <p href="#home">{(profile && profile.data) ? `${profile.data.user.firstName}  ${profile.data.user.lastName}` : ''}</p>

          </div>
          <div className="profile-img">
            <img src={urlImage || profileImg} alt="profile-img" />
          </div>
        </div>
      </div>
    );
  }
}

export const mapStatetoProps = (state) => ({
  profile: state.viewProfile.profile,
  profileError: state.profileError,
});
export default connect(mapStatetoProps, { getProfile })(Navbar);
