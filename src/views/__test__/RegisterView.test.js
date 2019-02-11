import { mount, shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Register, { RegisterView } from '../RegisterView';

const mockStore = configureStore([thunk]);

describe('signup view', () => {
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
    });

    it('renders container with chikd component successfully', () => {
        wrapper = shallow(<RegisterView {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders connected component successfully', () => {
        const state = {
            authReducer: {
                error: {
                    message: '',
                },
                successMessage: {
                    message: 'new user registered',
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
                message: 'new user registered',
            },
        };
        wrapper = mount(<Provider store={store}>
            <Register {...props} />
        </Provider>);
    });

    it('should handle change event on inputs', () => {
        const onChange = jest.fn();
        wrapper = mount(<RegisterView {...props} onChange={onChange} />);
        const event = 'kabanga';
        wrapper.find('#username').simulate('change', event);
        expect(wrapper.find('#username')).toBeDefined();
    });

    it('should handle click event on button', () => {
        const onSubmit = jest.fn();
        wrapper = mount(<RegisterView {...props} onSubmit={onSubmit} />);
        wrapper.find('#SignUpForm').simulate('click');
        expect(wrapper.find('#SignUpForm')).toBeDefined();
    });

    it('should call component will receive props with success', () => {
        const historyMock = { push: jest.fn() };
        const state = {
            username: '',
            email: '',
            address: '',
            password: '',
            error: '',
            success: { message: 'new user registered' },
        };
        wrapper = mount(<RegisterView {...props} history={historyMock} />);
        wrapper.setProps({
            postDataThunkPublic: jest.fn(),
            error: '',
            message: 'new user registered',
        }, () => {
            expect(wrapper.state()).toEqual(state);
        });
        expect(historyMock.push.mock.calls[0]).toEqual(['/login']);
    });

    it('should call component will receive props with error message', () => {
        const historyMock = { push: jest.fn() };
        const state = {
            username: '',
            email: '',
            address: '',
            password: '',
            error: "username can't be empty",
            success: '',
        };
        props = {
            postDataThunkPublic: jest.fn(),
            successMessage: null,
            error: "username can't be empty",
        };

        wrapper = mount(<RegisterView {...props} history={historyMock} />);
        wrapper.setProps({
            postDataThunkPublic: jest.fn(),
            error: { message: "username can't be empty" },
            message: null,
        });
    });
});
