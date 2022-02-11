import React, { useState, useEffect } from 'react';

const Select = () => {

    const [state, setState] = useState("posts");
    const [items, setItems] = useState([]);

    const handleChange = (e) => {
        setState(e.target.value)
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${state}`)
            .then((response) => response.json())
            .then((json) => setItems(json));
    }, [state]);

    return (
        <>
            <form>
                <select value={state} onChange={handleChange}>
                    <option value="posts">Posts</option>
                    <option value="comments">Comments</option>
                    <option value="albums">Albums</option>
                </select>
                <ul>
                    {items.map((item, index) => {
                        return <li key={index}>{JSON.stringify(item)}</li>
                    })}
                </ul>
            </form>
        </>
    )
};

export default Select; 