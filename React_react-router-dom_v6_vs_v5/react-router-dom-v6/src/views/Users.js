import React, { useState, useEffect, useContext } from 'react';
import API from "../config/api";
import { Link } from "react-router-dom";
import { UserContext } from '../context/UserContext';
import { UserItem } from '../styled';

const Users = () => {
    // const [users, setUsers] = useState([]);
    const { users, dispatch } = useContext(UserContext);

    useEffect(() => {
        API.get("users").then(res => {
            // setUsers(res.data);
            dispatch({
                type: "SET_ALL_USERS",
                payload: res.data,
            })
        });
    }, [])

    return <div>
        {users && users.map((user, index) => (
            <UserItem primary={index % 2 ? true : false} key={user.id}>
                #{user.id}
                <Link to={`/users/${user.id}`}>
                    {user.name}
                </Link>
            </UserItem>
        ))}
    </div>
}

export default Users;