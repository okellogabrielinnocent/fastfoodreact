import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => {
    const {
        onSubmit,
        onChange,
        email,
        password
    } = props;

    return (
        <div>
            <div className="main">
                <div className="login">
                    <div id="title">
                        <div id="error"></div>
                        <h3>Fast Food Fast</h3>
                    </div>
                    <form id="SignInForm" onSubmit={onSubmit}>
                        <h1>Please Login</h1>
                        <input type="email" id="email" placeholder="Enter Email" value={email} name="email" onChange={onChange} />
                        <br />
                        <input type="password" id="userPass" placeholder="Enter Password" value={password} name="password" onChange={onChange} />
                        <br />
                        <input type="submit" id="accept-btn" value="Login" />
                    </form>
                    <p><a href="/register" className="grey-text darken-2-text">I don't have an account</a></p>
                </div>
            </div>

        </div>
    );
}

Login.propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
};
export default Login;
