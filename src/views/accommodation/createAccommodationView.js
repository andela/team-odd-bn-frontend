import React from 'react';
import '../../assets/css/accommodation.scss';
import CreateAccommodation from '../../containers/accommodation/createAccommodation';
import Dashboard from '../Dashboard/sidebar/index';

const createAccommodation = () => (
  <Dashboard data-testid="createAccommodation-View">
    <CreateAccommodation />
  </Dashboard>
);
export default createAccommodation;
