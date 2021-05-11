import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Home extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', () => {
            const elems = document.querySelectorAll('.card');
            const options = {};
            const instances = M.Modal.init(elems, options);
        });
    }

    render() {
        const { menu = [], onClick } = this.props;
        // console.log('1234567890', menu)
        return (
            <div>
                <div className="topnav">
                    <div className="topnav-list">
                        <ul>
                            <li><a href="home.html">Home</a></li>
                            <li><a href="history.html">History</a></li>
                            <li><a href="/" onClick="logout()" >Log out</a></li>
                        </ul>
                    </div>
                </div>

                <div className="main">
                    <div className='item-grid-container'>
                        <div className='item-grid'>
                            <div className='item-grid-item first-item'>
                                <div className="card" id="avialable_menu">
                                    {menu.map((element, i, k) => <div >
                                        <p key={i}>{element.description}</p>
                                        <p key={k} >shs {element.price}</p>
                                        <button onClick={onClick}>Order</button>
                                    </div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Home.propTypes = {
    onClick: PropTypes.func,
};
export default Home;
