import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import signoutUser from '../../redux/actions/signoutAction';


export const Dashboard = (props) => {
  const logout = async () => {
    await props.signoutUser();
    props.history.push('/signin');
  };

  return (
    <>
      <p>Welcome to Barefoot</p>
      <Link to="#" onClick={logout} className="signout">Logout</Link>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state,
});

Dashboard.propTypes = {
  signoutUser: Proptypes.func.isRequired,
  history: Proptypes.shape({
    push: Proptypes.func,
  }),
};

Dashboard.defaultProps = {
  history: {
    push: () => {},
  },
};

export default connect(mapStateToProps, { signoutUser })(Dashboard);
