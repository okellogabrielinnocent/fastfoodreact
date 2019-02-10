import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'msg-notify/dist/notify.css';
import notify from 'msg-notify';
import PropTypes from 'prop-types';
import Register from '../components/RegisterComponent';
import { postDataThunkPublic } from '../redux/thunks';
import userSignUp from '../redux/actions/AuthActions';

export class RegisterView extends Component {
    state = {
        username: '',
        email: '',
        address: '',
        password: '',
        error: '',
        success: '',
    }

    componentWillReceiveProps(nextProps) {
        const { error: { message }, successMessage } = nextProps;
        const { history } = this.props;

        if (successMessage && message === undefined) {
            const success = successMessage.message;
            notify(success, 'success');
            history.push('/login');
            this.setState({
                success: successMessage,
            });
        } else if (message) {
            notify(message, 'error');
            this.setState({
                error: message,
            });
        }
    }
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const { postDataThunkPublic } = this.props;
        const userData = {
            email: this.state.email,
            address: this.state.address,
            username: this.state.username,
            password: this.state.password
        }
        postDataThunkPublic('user/signup', userData, userSignUp, 'post');
    }

    render() {
        return (
            <Register
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                email={this.state.email}
                password={this.state.password}
                address={this.state.address}
                username={this.state.username}
            />
        );
    }
}


const mapStateToProps = (state) => {
    return {
        error: state.authReducer.error,
        successMessage: state.authReducer.message,
    };
};

const actionCreator = {
    postDataThunkPublic,
};

RegisterView.propTypes = {
    message: PropTypes.string,
    successMessage: PropTypes.object,
    history: PropTypes.object,
    postDataThunkPublic: PropTypes.func,
};

export default connect(mapStateToProps, actionCreator)(RegisterView);
