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
import verifyToken from '../helpers/verifyToken';
import tokenExist from '../helpers/tokenExist';
import Dashboard from '../views/Dashboard/sidebar/index';

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
            loading: false,
            bio: '',
            formErrors: {
                address: '',
                department: '',
                bio: '',
            },
        };
    }
    async componentDidMount() {
        if (!verifyToken(localStorage.token)) {
            return this.props.history.push('/signin');
        }
        const token = localStorage.getItem('token');
        this.decode = jwtDecode(token);
        const { getProfile, updateSpinnerStatus, getManagers, profileError } = this.props;
        await getManagers();
        await getProfile();
        if (profileError.error
            || profileError.message === 'You have provided an invalid token') {
            return this.props.history.push('/signin');
        }
    }
    UNSAFE_componentWillReceiveProps(prevProps) {
        const { profile, imageURL: image } = prevProps;
        if (profile && profile.data) {
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
            this.setState({ ...this.state, imageURL: image });
        }
    }
    handleEditButtonChange = (e) => {
        e.preventDefault();
        this.setState({
            isEdit: false,
        });
    }
    handleChangeInput = (e) => {
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
    handleSubmit = async (e) => {
        e.preventDefault();
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
        this.setState({ loading: true })

        const data = {
            userFirstName: firstName,
            userLastName: lastName,
            managerId,
            address,
            gender,
            bio,
            department,
            imageURL,
            birthDate,
        };

        Object.keys(data).forEach(item => {
            if (data[item] === '') {
                delete data[item]
            }
        })
        await this.props.updateProfile(data);
        await this.props.getProfile();
        this.props.history.push('/dashboard');
    }
    handleFiles = async (files) => {
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
                <Dashboard >
                    <div className="main-profile-row">
                        <div className="profile-column-form">
                            <h2 className="profile-title">PROFILE</h2>
                            <div className="profile-details-row">
                                <div className="col-75">
                                    <div className="container">
                                        {this.state.loading ? <Spinner /> : null}
                                        <form onSubmit={this.handleSubmit}>
                                            <p className="profile-title-details">Personal Details</p>
                                            <hr className="legend" />
                                            <div className="profile-details-row">
                                                <div className="col-50">
                                                    <label htmlFor="fname"> First Name
                                                </label>
                                                    <TextInput
                                                        data_test="firstName"
                                                        name="firstName"
                                                        value={firstName || ''}
                                                        placeholder="Please enter first name"
                                                        onChange={this.handleChangeInput}
                                                        disabled={!!isEdit}
                                                    />
                                                    <label htmlFor="email"> Gender
                                                </label>
                                                    <select
                                                        data_test="gender"
                                                        onChange={this.handleChangeInput}
                                                        disabled={!!isEdit}
                                                        value={gender}
                                                        name="gender"
                                                    >
                                                        <option>Choose your Gender</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                    </select>

                                                    <label htmlFor="adr"> Line Manager
                                                <span className="required">*</span>
                                                    </label>
                                                    <select
                                                        name="managerId"
                                                        className="linemanager"
                                                        onChange={this.handleChangeInput}
                                                        disabled={!!isEdit}
                                                        value={managerId}
                                                    >
                                                        <option>Choose your Line Manager</option>
                                                        {users && users.data.filter((item) => item.roleId === 6).map((item, index) => (
                                                            <option
                                                                key={index}
                                                                value={item.id}
                                                                defaultValue={(profile && profile.data && item.id === profile.data.managerId)}
                                                            >
                                                                {`${item.firstName} ${item.lastName}`}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <div className="col-50">
                                                    <label htmlFor="email">Last Name</label>
                                                    <TextInput
                                                        data_test="lastName"
                                                        name="lastName"
                                                        value={lastName}
                                                        placeholder="Please enter last name"
                                                        onChange={this.handleChangeInput}
                                                        disabled={!!isEdit}
                                                    />
                                                    <label htmlFor="adr">Location</label>
                                                    <TextInput
                                                        data_test="address"
                                                        name="address"
                                                        value={address}
                                                        placeholder="Location"
                                                        onChange={this.handleChangeInput}
                                                        disabled={!!isEdit}
                                                    />

                                                    <label htmlFor="expmonth">Department</label>
                                                    <TextInput
                                                        data_test="department"
                                                        name="department"
                                                        value={department}
                                                        placeholder="Department"
                                                        onChange={this.handleChangeInput}
                                                        disabled={!!isEdit}
                                                        pattern="[a-zA-Z]{3,10}"
                                                        title="Your department should be characters of mimimum 3 letters and a maximu of 10"
                                                    />
                                                </div>
                                                {isEdit ? (
                                                    <button
                                                        className="edit-btn"
                                                        data_test="editButton"
                                                        type="submit"
                                                        onClick={this.handleEditButtonChange}
                                                    >
                                                        <p>Edit Profile</p>
                                                    </button>
                                                ) : (
                                                        <button type="submit" data_test="submitButton" value="Save" className="btn">Save Profile</button>
                                                    )}
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="profile-column-picture" >
                            <div className="profile-picture">
                                <h3 className="profile-picture-title">Profile Picture</h3>
                                <img src={imageURL || profilePicture} alt="profilePicture" />
                                {isEdit ? null : (
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
                        </div>
                    </div>
                </Dashboard >
            </>

        );
    }
}
export const mapStatetoProps = (state) => ({
    profile: state.viewProfile.profile,
    profileError: state.viewProfile.profileError,
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
