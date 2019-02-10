import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import userSignUp from '../../actions/AuthActions';
import { postDataThunkPublic, axiosInstance } from '../../thunks';
import { SIGNUP_USER, ERROR_OCCURED } from '../../actions/types';

describe('auth actions', () => {
    let httpMock;
    let store;
    const initialState = {
        message: null,
        error: null,
    };
    const userData = {
        username: 'innocent',
        email: 'gabrieliubbrbirbierb@gmail.com',
        address: 'kjsbfkdkufef',
        password: 'uiyfkgl;shfldf'
    };

    beforeEach(() => {
        httpMock = new MockAdapter(axiosInstance);
        const mockStore = configureStore([thunk]);
        store = mockStore(initialState);
    });

    it('should return success message', () => {
        const response = {
            message: 'sdxfcgvhbjnkm dxfcgvhbjnm',
        };
        httpMock.onPost('user/signup').reply(201, response);
        store
            .dispatch(postDataThunkPublic('user/signup', userData, userSignUp, 'post'))
            .then(() => {
                expect(store.getActions()).toEqual([{ type: SIGNUP_USER, message: response }]);
            });
    });

    it('should return error message', () => {
        const response = {
            error: {
                message: "sdxcfgvhbjnkm cvghbnm",
            },
        };
        httpMock.onPost('user/signup').reply(400, response);
        store
            .dispatch(postDataThunkPublic('user/signup', {}, userSignUp, 'post'))
            .catch(() => {
                expect(store.getActions()).toEqual([{ type: ERROR_OCCURED, message: response }]);
            });
    });
});
