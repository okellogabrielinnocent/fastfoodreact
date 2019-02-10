import { mount, shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Login, { LoginView } from '../loginView';

const mockStore = configureStore([thunk]);

describe('test the login view Componnent', () => {
    let wrapper;
    let store;
    let props = {
        postDataThunkPublic: jest.fn(),
        error: null,
        successMessage: null,
    };

    const initialState = {
        message: null,
        error: null,
    };

    beforeEach(() => {
        store = mockStore(initialState);
        store.dispatch = jest.fn();
        window.location.reload = jest.fn();
    });
    it('renders connected component successfully', () => {
        const state = {
            authReducer: {
                error: {
                    message: '',
                },
                successMessage: {
                    message: 'Logged successfully',
                },
            },
        };
        store = mockStore(state);
        props = {
            postDataThunkPublic: jest.fn(),
            error: {
                message: '',
            },
            successMessage: {
                message: 'Login successful',
            },
        };
        wrapper = mount(<Provider store={store}>
            <Login {...props} />
        </Provider>);
    });

    it('should handle change event on inputs', () => {
        const onChange = jest.fn();
        wrapper = mount(<LoginView {...props} onChange={onChange} />);
        const event = 'xdfghj';
        wrapper.find('#userPass').simulate('change', event);
        expect(wrapper.find('#userPass')).toBeDefined();
    });

    it('should call component will receive props with success', () => {
        const historyMock = { push: jest.fn() };
        const state = {
            username: '',
            password: '',
            error: '',
            success: { message: 'Login successful' },
        };
        wrapper = mount(<LoginView {...props} history={historyMock} />);
        wrapper.setProps({
            postDataThunkPublic: jest.fn(),
            error: '',
            message: 'Login successful',
        }, () => {
            expect(wrapper.state()).toEqual(state);
        });
        expect(historyMock.push.mock.calls[0]).toEqual(['/home']);
    });

    it('should call component will receive props with error message', () => {
        const historyMock = { push: jest.fn() };
        props = {
            postDataThunkPublic: jest.fn(),
            successMessage: null,
            error: "Invalid password or username",
        };

        wrapper = mount(<LoginView {...props} history={historyMock} />);
        wrapper.setProps({
            postDataThunkPublic: jest.fn(),
            error: { message: "Invalid password or username" },
            message: null,
        });
    });
});
