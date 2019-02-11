import authReducer from '../AuthReducer';
import userSignUp from '../../actions/AuthActions';
import errorOccured from '../../actions/commonActions';

const initialState = {
    message: null,
    error: null,
};

describe('auth reducer', () => {
    it('should return initial state', () => {
        expect(authReducer(undefined, {})).toEqual(initialState);
    });

    it('should return success message', () => {
        const expected = {
            message: 'Login Successful',
            error: '',
        };
        expect(authReducer(initialState, userSignUp('Login Successful'))).toEqual(expected);
    });

    it('should return error message', () => {
        const expected = {
            message: null,
            error: "Username can't be empty",
        };
        expect(authReducer(initialState, errorOccured("Username can't be empty"))).toEqual(expected);
    });
});
