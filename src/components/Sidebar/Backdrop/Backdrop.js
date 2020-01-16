import React from 'react';
import '../../../assets/css/sidenav/Backdrop.scss';

const backdrop = (props) => {
  const { click } = props;
  return (
    <div className="backdrop" onClick={click} />
  );
};

export default backdrop;
