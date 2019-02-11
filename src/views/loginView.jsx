import React, { Component } from 'react';
import { connect } from 'react-redux';
import notify from 'msg-notify';
import PropTypes from 'prop-types';
import { postDataThunkPublic } from '../redux/thunks';
import userSignUp from '../redux/actions/AuthActions';
import Login from '../components/LoginComponent';

export class LoginView extends Component {
    state = {
        username: '',
        password: '',
        error: '',
        success: '',
    }

    componentWillReceiveProps(nextProps) {
        const { error: { message }, successMessage } = nextProps;
        const { history } = this.props;
        const { email } = this.state;

        if (successMessage && message === undefined) {
            localStorage.setItem('Token', successMessage.Token);
            const error = successMessage.message;
            notify(error, 'success');
            (email === 'okellogabrielinnocent@gmail.com') ? history.push('/admin') : history.push('/home');
            window.location.reload();
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
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { postDataThunkPublic } = this.props;
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        postDataThunkPublic('auth/login', userData, userSignUp, 'post');
        notify(`${this.props.successMessage.Message}`)
    }

    render() {
        return (
            <Login
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                email={this.state.email}
                password={this.state.password}
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

LoginView.propTypes = {
    message: PropTypes.string,
    successMessage: PropTypes.object,
    history: PropTypes.object,
    postDataThunkPublic: PropTypes.func,
};

export default connect(mapStateToProps, actionCreator)(LoginView);
