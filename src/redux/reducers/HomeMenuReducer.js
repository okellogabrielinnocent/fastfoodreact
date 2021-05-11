import { ERROR_OCCURED, GET_MENU } from '../actions/types';

const initialState = {
    message: null,
    error: null,
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MENU:
            return {
                ...state,
                menu: action.menu,
                message: '',
                error: '',
            };
        case ERROR_OCCURED:
            return {
                ...state,
                error: action.error,
                message: null,
            };
        default:
            return state;
    }
};

export default menuReducer;
