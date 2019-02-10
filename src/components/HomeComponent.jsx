import React from 'react';
import NavBar from './TopNav'
const Home = (props) => {
    const {
        onLoad
    } = props;


    return (
        <div onLoad={onLoad}>
            <NavBar />
            <div className="main">
                <div className='item-grid-container'>
                    <div className='item-grid'>
                        <div className='item-grid-item first-item'>
                            <div className="card" id="avialable_menu">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Home;
