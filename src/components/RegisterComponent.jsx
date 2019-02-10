import React from 'react';
import PropTypes from 'prop-types';

const RegisterComponent = (props) => {
    const {
        onSubmit,
        onChange,
    } = props;

    return (
        <div>
            <div className="main">
                <div className="login">
                    <div id="title">

                        <h3>Fast Food</h3>
                        <div id="error"></div>
                        <div id="success"></div>
                    </div>
                    <form id="SignUpForm" onSubmit={onSubmit}>

                        <label>Address:</label>
                        <input type="text" id="address" name="address" placeholder="Enter Address" onChange={onChange} />
                        <label>Email:</label>
                        <input type="email" id="email" name="email" placeholder="name@domain.com" onChange={onChange} />
                        <label>Username:</label>
                        <input type="text" id="username" name="username" placeholder="Enter Username Name" onChange={onChange} />
                        <label>Password:</label>
                        <input type="password" id="password" name="password" placeholder="Password" onChange={onChange} />
                        <input type="submit" id="accept-btn" value="Register" />
                    </form>
                    <p><a href="/login" className="grey-text darken-2-text">Already have an account</a></p>
                </div>
            </div>
        </div>
    )
}
RegisterComponent.propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
};


export default RegisterComponent;
