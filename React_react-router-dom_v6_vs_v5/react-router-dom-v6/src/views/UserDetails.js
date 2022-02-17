import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const UsersDetails = () => {
    const { id } = useParams();
    const { users } = useContext(UserContext);
    const [user, setUser] = useState("");
    // console.log(id);

    useEffect(() => {
        // ovo vraca niz - vraca sve sa tim parametrom
        // const user = users.filter(user => user.id === parseInt(id))[0];
        // console.log(user);

        // ovo vraca objekat - vraca prvi na koji naidje
        const user1 = users.find(user => user.id === parseInt(id));
        console.log(user1);
        setUser(user1)
    }, [])

    const navigate = useNavigate();

    const handleHomeButton = (e) => {
        e.preventDefault();
        // navigate("/about");
        navigate("/");
    }

    const handleBackButton = (e) => {
        e.preventDefault();
        navigate(-1);
    }

    return (<div>
        <button type="submit" onClick={handleHomeButton}>Home</button>
        <button type="submit" onClick={handleBackButton}>Back</button>
        {user ? (<div><p>Name: {user.name}</p><p>Email: {user.email}</p><p>Website: {user.website}</p></div>) : <div>We can`t find user</div>}
    </div>)
}

export default UsersDetails;