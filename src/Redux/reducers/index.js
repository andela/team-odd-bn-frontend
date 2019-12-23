import { combineReducers } from 'redux';
import demoReducers from './demoReducers';

export default combineReducers({
  greetings: demoReducers,
});
