import React from 'react';
import MovieLogo from '../../images/movie.svg';
import AppNavbarTabs from './AppNavbarTabs';
import AppNavbarUser from './AppNavbarUser';
import './style.css';

const AppNavbar = () => {
    return <div className='navbar'>
        <div className='navbar-content'>
            <img src={MovieLogo} alt="React Movie Logo" />
            <div className="navbar-tabs">
                <AppNavbarTabs />
            </div>
        </div>
        <AppNavbarUser />
    </div>
}

export default AppNavbar;