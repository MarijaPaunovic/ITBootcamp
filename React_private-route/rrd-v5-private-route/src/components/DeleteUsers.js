import React, { useState, useEffect } from 'react';
import API from "../config/api";

const DeleteUsers = ({ users, removeUsers }) => {
    const [id, setId] = useState(``);

    const handleChange = e => {
        setId(e.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        // console.log(`handle submit func`);
        const userID = id;
        const response = await API.delete(`users/${userID}`)
        if (response.status === 200) {
            console.log(`response status: ${response.status}`);
            removeUsers(id);
        }
        // alert("You succesfully delete the user")
        // console.log(response);
        // console.log(response.data);
    }

    return <div>
        <h4>Delete Users:</h4>

        <form onSubmit={handleSubmit}>
            <label>
                User id: <input type="text" onChange={handleChange} />
            </label>
            <button type="submit">Delete</button>
        </form>
    </div>
}

export default DeleteUsers;