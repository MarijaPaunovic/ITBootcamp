import React, { useState, createContext } from 'react';

export const SongContext = createContext();

const SongContextProvider = ({ children }) => {
    const [songs, setSongs] = useState([
        { title: "Shook ones", id: 0 },
        { title: "Juicy", id: 1 },
        { title: "Hipnotize", id: 2 }
    ]);

    return <SongContext.Provider value={{ songs }}>{children}</SongContext.Provider>
}

export default SongContextProvider;