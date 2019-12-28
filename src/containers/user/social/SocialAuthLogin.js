import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import extractQueryInfo from '../../../helpers/extractQueryInfo';
import socialAuth from '../../../redux/actions/socialAuthAction';

export class SocialLogin extends Component {
  componentDidMount() {
    this.handleData();
  }

  handleData() {
    const { authUserData } = this.props;
    const { location } = this.props;
    const authenticateUser = extractQueryInfo(location);
    authUserData(authenticateUser);
  }

  render() {
    return (
      <Redirect to="/dashboard" />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  authUserData: (info) => dispatch(socialAuth(info)),
});

SocialLogin.propTypes = {
  authUserData: propTypes.func.isRequired,
  location: propTypes.shape({
    search: propTypes.string,
  }),
};

SocialLogin.defaultProps = {
  location: {
    search: 'www.example.url',
  },
};


export default connect(null, mapDispatchToProps)(SocialLogin);
