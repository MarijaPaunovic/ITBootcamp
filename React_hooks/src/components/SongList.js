import React, { useState } from 'react';
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: "Shook ones", id: 0 },
        { title: "Juisy", id: 1 },
        { title: "Hipnotise", id: 2 }
    ]);

    const addSong = title => {
        setSongs([...songs, { title, id: songs.length + 1 }]);
    }

    return (
        <>
            <h2>My song list</h2>
            {songs.map((song, index) => {
                return <li key={index}>{song.title}</li>
            })}

            <NewSongForm addSong={addSong} />
        </>
    )
};

export default SongList; 