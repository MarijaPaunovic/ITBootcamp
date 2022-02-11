import React, { useState } from 'react';

const NewSongForm = ({ addSong }) => {
    const [title, setTitle] = useState("");

    // const addSong = () => {
    //     props.setSong([...props.songs, { title: title, id: props.length + 1 }]);
    //     props.setSong([...props.songs, { title, id: props.length + 1 }]);

    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        addSong(title);
    }

    return <form onSubmit={handleSubmit}>
        <label style={{ marginRight: 5 }}>Song name: </label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <input type="submit" value="Add" style={{ marginLeft: 5 }} />
    </form>
};

export default NewSongForm; 