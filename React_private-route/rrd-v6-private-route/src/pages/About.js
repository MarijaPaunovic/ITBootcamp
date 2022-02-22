import React from 'react';
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.setItem("isLogin", false);
        navigate("/");
    }

    return (<div>
        If you are seeing this, your authentificated
        <button onClick={handleLogout}>Logout</button>
    </div>);
}

export default About;