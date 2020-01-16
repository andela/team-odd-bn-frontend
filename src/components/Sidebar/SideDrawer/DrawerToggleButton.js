import React from 'react';
import '../../../assets/css/sidenav/DrawerToggleButton.scss';

const drawerToggleButton = (props) => {
  const { click } = props;
  return (
    <button type="button" className="toggle-button" onClick={click}>
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
    </button>
  );
};

export default drawerToggleButton;
