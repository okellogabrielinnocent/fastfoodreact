import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

export default (initialState = {}) => createStore(
    rootReducer(),
    initialState,
    composeWithDevTools(applyMiddleware(thunk, logger)),
);
