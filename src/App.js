import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/index';
import Demo from './components/Demo';


const App = () => (
  <Provider store={store}>
    <Demo />
  </Provider>
);

export default App;
