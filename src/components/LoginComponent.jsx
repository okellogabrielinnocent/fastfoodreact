import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <div className="topnav">
                    <div className="topnav-list">
                        <ul>
                            <li><a href="index.html">Fast Food Fast</a></li>
                        </ul>
                    </div>
                </div>
                <div className="main">
                    <div className="login">
                        <div id="title">
                            <div id="error"></div>
                            <h3>Fast Food Fast</h3>
                        </div>
                        <form id="SignInForm">
                            <h1>Please Login</h1>
                            <input type="email" id="email" placeholder="Enter Email" type="text" name="email" />
                            <br />
                            <input type="password" id="userPass" placeholder="Enter Password" type="password" name="password" />
                            <br />
                            <input type="submit" id="accept-btn" value="Login" href="admin.html" />
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default Login;
