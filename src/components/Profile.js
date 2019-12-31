/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import moment from 'moment';
import ReactFileReader from 'react-file-reader';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import getProfile, { updateSpinnerStatus } from '../redux/actions/profileActions';
import updateProfile, {
  uploadImage,
} from '../redux/actions/updateProfileActions';
import '../assets/css/profile.css';
import Navbar from './Navbar';
import profilePicture from '../assets/images/profile-picture2.png';
import TextInput from './common/TextInput';
import Spinner from './Spinner';
import { getManagers } from '../redux/actions/getAllUsersActions';

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.decode = '';
    this.state = {
      isEdit: true,
      firstName: '',
      lastName: '',
      gender: '',
      birthDate: '',
      address: '',
      department: '',
      imageURL: null,
      managerId: '',
      bio: '',
      formErrors: {
        address: '',
        department: '',
        bio: '',
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFiles = this.handleFiles.bind(this);
  }

  async componentDidMount() {
    const token = localStorage.getItem('token');
    if (!token) {
      return <Redirect to="/login" />;
    }
    this.decode = jwtDecode(token);
    const { getProfile, updateSpinnerStatus, getManagers } = this.props;
    await getManagers();
    await getProfile();
  }

  UNSAFE_componentWillReceiveProps(prevProps) {
    const { profile, imageURL: image } = prevProps;

    if (profile) {
      const {
        gender,
        birthDate,
        address,
        department,
        bio,
        managerId,
        imageURL,
        user: {
          firstName,
          lastName,
        },
      } = profile.data;
      this.setState({
        lastName: lastName || '',
        firstName: firstName || '',
        gender: gender || '',
        birthDate: birthDate ? moment(new Date(birthDate)).format('YYYY-MM-DD') : '',
        department: department || '',
        imageURL: imageURL || '',
        managerId: managerId || '',
        address: address || '',
        bio: bio || '',
      });
    }
    if (image) {
      this.setState({ imageURL: image });
    }
  }

  handleChange() {
    this.setState({
      isEdit: false,
    });
  }

  handleChangeInput(e) {
    const { name, value } = e.target;
    const formErrors = { ...this.state.formErrors };

    switch (name) {
      case 'address':
        formErrors.address = value.length < 3 ? 'minimum 3 characters required' : '';
        break;
      case 'department':
        formErrors.department = value.length < 3 ? 'minimum 3 characters required' : '';
        break;
      case 'bio':
        formErrors.bio = value.length < 15 ? 'minimum 15 characters required' : '';
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
      firstName,
      lastName,
      managerId,
      address,
      gender,
      bio,
      department,
      imageURL,
      birthDate,
    } = this.state;

    const data = {
      firstName,
      lastName,
      managerId,
      address,
      gender,
      bio,
      department,
      imageURL,
      birthDate,
    };
    await this.props.updateProfile(data);
    await this.props.getProfile();
  }

  async handleFiles(files) {
    const file = files.fileList[0];
    const { uploadImage } = this.props;
    await uploadImage(file);
  }

  render() {
    const { profile, spinner, users } = this.props;
    const { message } = this.props;
    const {
      firstName,
      lastName,
      isEdit,
      address,
      bio,
      gender,
      managerId,
      department,
      imageURL,
      birthDate,
      formErrors,
    } = this.state;

    return (
      <>

        <Navbar />
        { spinner ? <Spinner /> : '' }

        <div className="main-profile">
          <div className="profile-picture">
            <h3>Profile Picture</h3>
            <img src={imageURL || profilePicture} alt="profilePicture" />
            {isEdit ? (
              <button
                data-test="editButton"
                type="submit"
                onClick={this.handleChange}
              >
                <p>Edit Profile</p>
              </button>
            ) : (
              <ReactFileReader
                handleFiles={this.handleFiles}
                multipleFiles={false}
                base64
              >
                <button type="submit" className="file-reader-button">
                  <p>Change Profile Picture </p>
                </button>
              </ReactFileReader>
            )}
          </div>
          <div className="profile-details">
            <h3>Personal Info</h3>
            <hr className="profile-underline" />
            <form className="profile-form" onSubmit={this.handleSubmit}>
              <div className="names">
                <TextInput
                  data-test="firstName"
                  name="firstName"
                  value={firstName || ''}
                  placeholder="Please enter first name"
                  onChange={this.handleChangeInput}
                  disabled={!!isEdit}
                />
                <TextInput
                  data-test="lastName"
                  name="lastName"
                  value={lastName}
                  placeholder="Please enter last name"
                  onChange={this.handleChangeInput}
                  disabled={!!isEdit}
                />
              </div>
              <div className="gender">
                <select
                  data-test="gender"
                  onChange={this.handleChangeInput}
                  disabled={!!isEdit}
                  value={gender}
                  name="gender"
                >
                  <option>Choose your Gender</option>
                  <option value="male">Male</option>
                  <option value="female">female</option>
                </select>
                <input
                  data-test="birthDate"
                  type="date"
                  name="birthDate"
                  onChange={this.handleChangeInput}
                  disabled={!!isEdit}
                  value={birthDate || ''}
                />
              </div>
              <div className="address">
                <TextInput
                  data-test="address"
                  name="address"
                  value={address}
                  placeholder="Your address"
                  onChange={this.handleChangeInput}
                  disabled={!!isEdit}
                />
                <br />
                <div className="error">
                  {formErrors.address.length > 3 && (
                  <span className="errorMessageInputs">{formErrors.address}</span>
                  )}
                </div>
              </div>
              <div className="department">
                <TextInput
                  data-test="department"
                  name="department"
                  value={department}
                  placeholder="Department"
                  onChange={this.handleChangeInput}
                  disabled={!!isEdit}
                  pattern="[a-zA-Z]{3,10}"
                  title="Your department should be characters of mimimum 3 letters and a maximu of 10"
                />
                <br />
                <div className="error">
                  {formErrors.department.length > 3 && (
                  <span className="errorMessageInputs">
                    {formErrors.department}
                  </span>
                  )}
                </div>
              </div>
              <div>
                <select
                  name="managerId"
                  className="linemanager"
                  onChange={this.handleChangeInput}
                  disabled={!!isEdit}
                  value={managerId}
                >
                  <option>Choose your Line Manager</option>
                  { users && users.data.filter((item) => item.roleId === 6).map((item, index) => (
                    <option
                      key={index}
                      value={item.id}
                      selected={(profile && item.id === profile.data.managerId)}
                    >
                      {`${item.firstName} ${item.lastName}`}
                    </option>
                  )) }
                </select>
              </div>
              <div className="bio">
                <textarea
                  data-test="bio"
                  name="bio"
                  placeholder="Please input your bio"
                  onChange={this.handleChangeInput}
                  disabled={!!isEdit}
                  pattern="[a-zA-Z]{15,50}"
                  title="Your bio should be characters of mimimum 15 letters and a maximu of 50"
                  value={bio}
                >
                  {' '}
                  {bio}
                  {' '}
                </textarea>
                <br />
                <div className="error">
                  {formErrors.bio.length > 3 && (
                  <span className="errorMessageInputs">{formErrors.bio}</span>
                  )}
                </div>
              </div>
              <div>
                {isEdit ? null : (
                  <button
                    data-test="submitButton"
                    className="submit-button"
                    type="submit"
                  >
                    Save Changes
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export const mapStatetoProps = (state) => ({
  profile: state.viewProfile.profile,
  profileError: state.profileError,
  message: state.updateProfile.message,
  updateProfileError: state.updateProfileError,
  imageURL: state.updateProfile.imageURL,
  imageURLError: state.updateProfile.imageURLError,
  spinner: state.updateProfile.spinner,
  users: state.allUsers.users,
  usersError: state.allUsers.usersError,
});


export default
connect(mapStatetoProps, {
  getProfile, updateProfile, uploadImage, updateSpinnerStatus, getManagers,
})(Profile);
