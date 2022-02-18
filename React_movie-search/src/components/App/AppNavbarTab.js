import React from 'react';
import { Link } from "react-router-dom";

const AppNavbarTab = ({ value }) => {
    return (
        <Link className='navbar-tab' to={value === "Home" ? "/" : value}>
            <h2>{value}</h2>
        </Link>
    )
}

export default AppNavbarTab;