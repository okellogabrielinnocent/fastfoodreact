import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import menuReducer from './HomeMenuReducer';
import getOrderReducer from './AdminReducer'

const rootReducer = () => combineReducers({
    authReducer,
    menuReducer,
    getOrderReducer
});

export default rootReducer;
