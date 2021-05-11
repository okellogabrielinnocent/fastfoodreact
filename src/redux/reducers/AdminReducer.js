import { ERROR_OCCURED, GET_ORDERS } from '../actions/types';
const initailState = {
    message: null,
    // order: [],
    error: null,
}

const getOrderReducer = (state = initailState, action) => {
    switch (action.type) {
        case GET_ORDERS:
            return {
                ...state,
                order: action.message,
            };
        case ERROR_OCCURED:
            return {
                ...state,
                error: action.error,
                message: null
            }
        default:
            return state
    }
};
export default getOrderReducer;
