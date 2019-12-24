import React from 'react';
import { connect } from 'react-redux';
import sayHello from '../redux/actions/demoActions';

const Button = ({ whatsUp, stateObject, saySomething }) => (
  <div>
    <button onClick={() => console.log('Redux State:', stateObject)}>
          Press to inspect STATE in console panel
    </button>
  </div>
);
const mapStateToProps = (state) => ({
  whatsUp: state.say,
  stateObject: state,
});

const mapDispatchToProps = (dispatch) => ({
  saySomething: () => { dispatch(sayHello()); },
});

const mainButton = connect(mapStateToProps, mapDispatchToProps)(Button);

export default mainButton;
