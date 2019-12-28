import React, { Component } from 'react';
import { connect } from 'react-redux';
import Facebook from '../../../views/social/Facebook';
import Google from '../../../views/social/Google';
import '../../../assets/css/style.scss';

export class Signin extends Component {
  render() {
    return (
      <>
        <Google buttonName="log in with Google" />
        <Facebook buttonName="log in with Facebook" />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, null)(Signin);
