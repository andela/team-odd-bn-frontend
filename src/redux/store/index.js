import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import initialState from './initialState';

const middleware = applyMiddleware(thunk);

const store = createStore(rootReducer, initialState, composeWithDevTools(middleware));

export default store;
