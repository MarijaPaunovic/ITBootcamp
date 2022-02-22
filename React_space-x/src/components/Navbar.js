import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/SpaceX-Logo.svg';

const Navbar = () => {
    return (<div>
        <Logo fill="white" />
        <div className='navbar-container'>
            <nav className='navbar-wrapper'>
                <Link to="/">Home</Link>
                <Link to="/missions">Missions</Link>
                <Link to="/rockets">Rockets</Link>
                <Link to="/launches">Launches</Link>
            </nav>
        </div>
    </div>);
}

export default Navbar;