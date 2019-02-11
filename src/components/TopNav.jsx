import React from 'react';

const NavBar = (props) => {
    const {
        onClick
    } = props;


    return (
        <div className="topnav">
            <div className="topnav-list">
                <ul>
                    <li><a href="home.html">Home</a></li>
                    <li><a href="history.html">History</a></li>
                    <li><a href="/" onClick={onClick} >Log out</a></li>
                </ul>
            </div>
        </div>
    );

}
export default NavBar;
